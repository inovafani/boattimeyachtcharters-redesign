import { NextResponse } from 'next/server';

const LAT = -27.97;  // Gold Coast offshore — open Pacific, ~15 km east of Main Beach
const LNG = 153.56;
const BRISBANE_TZ = 'Australia/Brisbane';

// ── Helpers ──────────────────────────────────────────────────────────────────

function nowBrisbane(): Date {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: BRISBANE_TZ,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);
  return new Date(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));
}

function sunsetFallback(): string {
  const month = new Date().getMonth();
  const h = [18, 18, 18, 17, 17, 17, 17, 17, 17, 18, 18, 18][month];
  const m = [45, 30, 5, 45, 30, 20, 25, 40, 55, 10, 25, 40][month];
  return `${h}:${String(m).padStart(2, '0')}`;
}

function availabilityFallback(): string {
  const month = nowBrisbane().getMonth();
  return month >= 4 && month <= 10 ? 'Daily · book online' : 'Season opens May';
}

function nextWhaleFallback(): string {
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const now = nowBrisbane();
  const month = now.getMonth();
  const inSeason = month >= 4 && month <= 10;

  if (inSeason) {
    const boardingPassed =
      now.getHours() > 8 || (now.getHours() === 8 && now.getMinutes() >= 30);
    const target = new Date(now);
    if (boardingPassed) target.setDate(target.getDate() + 1);
    return `${target.getDate()} ${MONTHS[target.getMonth()]} · 08:30 · Sun Goddess`;
  }
  const nextMay = new Date(
    month > 10 ? now.getFullYear() + 1 : now.getFullYear(),
    4, 1,
  );
  return `Season opens 1 May ${nextMay.getFullYear()}`;
}

// ── External fetches ─────────────────────────────────────────────────────────

async function fetchSunset(): Promise<string> {
  const res = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${LAT}&lng=${LNG}&formatted=0`,
    { next: { revalidate: 86400 } },
  );
  const data = await res.json();
  return new Date(data.results.sunset).toLocaleTimeString('en-AU', {
    timeZone: BRISBANE_TZ,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

async function fetchSeaState(): Promise<string> {
  const res = await fetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${LAT}&longitude=${LNG}&hourly=wave_height&timezone=Australia%2FBrisbane&forecast_days=1`,
    { next: { revalidate: 3600 } },
  );
  const data = await res.json();
  const hour = nowBrisbane().getHours();
  const wh: number | null = data.hourly?.wave_height?.[hour] ?? null;
  if (wh === null) return '— · —';
  const whNum = wh as number;
  const label =
    whNum <= 0.5 ? 'Calm' : whNum <= 1.0 ? 'Light' : whNum <= 2.0 ? 'Moderate' : 'Rough';
  return `${label} · ${whNum.toFixed(1)}m`;
}

// ── Rezdy ────────────────────────────────────────────────────────────────────
// Set REZDY_API_KEY and REZDY_WHALE_PRODUCT_CODE in .env.local to enable.
// Correct endpoint: GET /v1/availability?productCode=...&startTime=YYYY-MM-DD&endTime=YYYY-MM-DD
// Response contains `sessions` array with startTimeLocal (Brisbane local) and seatsAvailable.

interface RezdySession {
  startTimeLocal: string;
  seatsAvailable: number;
}

function fmtDate(d: Date): string {
  return (
    d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0')
  );
}

async function fetchRezdyWhaleData(): Promise<{ nextWhale: string; availability: string } | null> {
  const apiKey = process.env.REZDY_API_KEY;
  const productCode = process.env.REZDY_WHALE_PRODUCT_CODE;
  if (!apiKey || !productCode) return null;

  const now = nowBrisbane();

  // Look 60 days ahead so we catch the next session even if we're between seasons
  const end = new Date(now);
  end.setDate(end.getDate() + 60);

  const url =
    `https://api.rezdy.com/v1/availability` +
    `?apiKey=${apiKey}` +
    `&productCode=${encodeURIComponent(productCode)}` +
    `&startTime=${fmtDate(now)}` +
    `&endTime=${fmtDate(end)}`;

  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) return null;

  const data = await res.json();
  // Rezdy returns `sessions` (not `availability`) for this endpoint
  const all: RezdySession[] = data.sessions ?? [];

  // Sessions with available seats
  const available = all.filter((s) => s.seatsAvailable > 0);

  if (available.length === 0 && all.length === 0) {
    // Truly no sessions scheduled yet — let the date-based fallback handle it
    return null;
  }

  if (available.length === 0) {
    // Sessions exist but all sold out
    return { nextWhale: 'Sold out this week', availability: 'All booked — check back' };
  }

  // ── Format the next upcoming session ──────────────────────────────────────
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const next = available[0];
  // startTimeLocal is already Brisbane time: "2026-06-13 09:00:00"
  const [datePart, timePart] = next.startTimeLocal.split(' ');
  const [yr, mo, dy] = datePart.split('-').map(Number);
  const [hh, mm] = timePart.split(':').map(Number);
  const nextDate = new Date(yr, mo - 1, dy, hh, mm);

  const isToday =
    nextDate.getDate() === now.getDate() &&
    nextDate.getMonth() === now.getMonth() &&
    nextDate.getFullYear() === now.getFullYear();

  const dayLabel = isToday ? 'Today' : DAYS[nextDate.getDay()];
  const timeLabel = `${hh}:${String(mm).padStart(2, '0')}`;
  const nextWhale = `${dayLabel} ${timeLabel} · Sun Goddess`;

  // ── Availability: count sessions with seats in the next 7 days ────────────
  const weekEnd = new Date(now);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const thisWeek = available.filter((s) => {
    const [dp] = s.startTimeLocal.split(' ');
    const d = new Date(dp);
    return d <= weekEnd;
  });

  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const availability =
    thisWeek.length > 0
      ? `${thisWeek.length} session${thisWeek.length === 1 ? '' : 's'} this week`
      : `Next: ${dayLabel} ${dy} ${MONTHS_SHORT[mo - 1]}`;

  return { nextWhale, availability };
}

// ── Route ─────────────────────────────────────────────────────────────────────

export async function GET() {
  console.log('[conditions] GET');

  const [sunsetResult, seaResult, rezdyResult] = await Promise.allSettled([
    fetchSunset(),
    fetchSeaState(),
    fetchRezdyWhaleData(),
  ]);

  const rezdy = rezdyResult.status === 'fulfilled' ? rezdyResult.value : null;

  return NextResponse.json({
    sunset:       sunsetResult.status === 'fulfilled' ? sunsetResult.value : sunsetFallback(),
    seaState:     seaResult.status === 'fulfilled'    ? seaResult.value    : '— · —',
    nextWhale:    rezdy?.nextWhale    ?? nextWhaleFallback(),
    availability: rezdy?.availability ?? availabilityFallback(),
  });
}
