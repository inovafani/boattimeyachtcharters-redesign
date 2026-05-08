import { NextResponse } from 'next/server';

const LAT = -28.02;
const LNG = 153.4;
const BRISBANE_TZ = 'Australia/Brisbane';

// ── Helpers ──────────────────────────────────────────────────────────────────

function nowBrisbane(): Date {
  return new Date(new Date().toLocaleString('en-AU', { timeZone: BRISBANE_TZ }));
}

function sunsetFallback(): string {
  const month = new Date().getMonth();
  const h = [18, 18, 18, 17, 17, 17, 17, 17, 17, 18, 18, 18][month];
  const m = [45, 30, 5, 45, 30, 20, 25, 40, 55, 10, 25, 40][month];
  return `${h}:${String(m).padStart(2, '0')}`;
}

function availabilityFallback(): string {
  const month = nowBrisbane().getMonth();
  return month >= 5 && month <= 10 ? 'Daily · book online' : 'Season opens June';
}

function nextWhaleFallback(): string {
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const now = nowBrisbane();
  const month = now.getMonth();
  const inSeason = month >= 5 && month <= 10;

  if (inSeason) {
    const boardingPassed =
      now.getHours() > 8 || (now.getHours() === 8 && now.getMinutes() >= 30);
    const target = new Date(now);
    if (boardingPassed) target.setDate(target.getDate() + 1);
    return `${target.getDate()} ${MONTHS[target.getMonth()]} · 08:30 · Sun Goddess`;
  }
  const nextJune = new Date(
    month > 10 ? now.getFullYear() + 1 : now.getFullYear(),
    5, 1,
  );
  return `Season opens 1 Jun ${nextJune.getFullYear()}`;
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
  const hour = parseInt(
    new Date().toLocaleString('en-AU', {
      timeZone: BRISBANE_TZ,
      hour: 'numeric',
      hour12: false,
    }),
    10,
  );
  const wh: number = data.hourly?.wave_height?.[hour] ?? 0.4;
  const label =
    wh <= 0.5 ? 'Calm' : wh <= 1.0 ? 'Light' : wh <= 2.0 ? 'Moderate' : 'Rough';
  return `${label} · ${wh.toFixed(1)}m`;
}

// ── Rezdy ────────────────────────────────────────────────────────────────────
// Set REZDY_API_KEY and REZDY_WHALE_PRODUCT_CODE in .env.local to enable.
// Get these from your Rezdy dashboard → Settings → API.
// The product code is the alphanumeric code shown on the product page (e.g. P09XXXXX).

interface RezdySession {
  startTimeLocal: string;
  seatsAvailable: number;
  status: string;
}

async function fetchRezdyWhaleData(): Promise<{ nextWhale: string; availability: string } | null> {
  const apiKey = process.env.REZDY_API_KEY;
  const productCode = process.env.REZDY_WHALE_PRODUCT_CODE;
  if (!apiKey || !productCode) return null;

  const now = nowBrisbane();
  const end = new Date(now);
  end.setDate(end.getDate() + 7);

  const pad = (d: Date) =>
    d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0') + ' 00:00:00';

  const url =
    `https://api.rezdy.com/v1/availability/${encodeURIComponent(productCode)}` +
    `?apiKey=${apiKey}` +
    `&startTime=${encodeURIComponent(pad(now))}` +
    `&endTime=${encodeURIComponent(pad(end))}`;

  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) return null;

  const data = await res.json();
  const sessions: RezdySession[] = data.availability ?? [];

  const available = sessions.filter(
    (s) => s.seatsAvailable > 0 && s.status !== 'CLOSED' && s.status !== 'CANCELLED',
  );

  if (available.length === 0) {
    return { nextWhale: 'Sold out this week', availability: 'Check back soon' };
  }

  // Format the next upcoming session
  const next = available[0];
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Rezdy returns Brisbane-local time already
  const [datePart, timePart] = next.startTimeLocal.split(' ');
  const [yr, mo, dy] = datePart.split('-').map(Number);
  const [hh, mm] = timePart.split(':').map(Number);
  const nextDate = new Date(yr, mo - 1, dy, hh, mm);

  const isToday =
    nextDate.getDate() === now.getDate() && nextDate.getMonth() === now.getMonth();
  const dayLabel = isToday ? 'Today' : DAYS[nextDate.getDay()];
  const timeLabel = `${hh}:${String(mm).padStart(2, '0')}`;
  const nextWhale = `${dayLabel} ${timeLabel} · Sun Goddess`;

  const count = available.length;
  const availability = `${count} session${count === 1 ? '' : 's'} this week`;

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
    seaState:     seaResult.status === 'fulfilled'    ? seaResult.value    : 'Calm · 0.4m',
    nextWhale:    rezdy?.nextWhale    ?? nextWhaleFallback(),
    availability: rezdy?.availability ?? availabilityFallback(),
  });
}
