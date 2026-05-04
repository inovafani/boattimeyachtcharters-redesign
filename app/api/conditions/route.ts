import { NextResponse } from 'next/server';

// Gold Coast Broadwater coordinates
const LAT = -28.02;
const LNG = 153.4;

async function fetchSunset(): Promise<string> {
  const res = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${LAT}&lng=${LNG}&formatted=0`,
    { next: { revalidate: 86400 } }, // re-fetch once per day — sunset doesn't change intra-day
  );
  const data = await res.json();
  return new Date(data.results.sunset).toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Brisbane',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

async function fetchSeaState(): Promise<string> {
  const res = await fetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${LAT}&longitude=${LNG}&hourly=wave_height&timezone=Australia%2FBrisbane&forecast_days=1`,
    { next: { revalidate: 3600 } }, // re-fetch hourly
  );
  const data = await res.json();

  // Get current Brisbane hour as an index into the hourly array
  const brisbaneHour = parseInt(
    new Date().toLocaleString('en-AU', {
      timeZone: 'Australia/Brisbane',
      hour: 'numeric',
      hour12: false,
    }),
    10,
  );
  const wh: number = data.hourly?.wave_height?.[brisbaneHour] ?? 0.4;
  const label =
    wh <= 0.5 ? 'Calm' : wh <= 1.0 ? 'Light' : wh <= 2.0 ? 'Moderate' : 'Rough';
  return `${label} · ${wh.toFixed(1)}m`;
}

function sunsetFallback(): string {
  const month = new Date().getMonth();
  const h = [18, 18, 18, 17, 17, 17, 17, 17, 17, 18, 18, 18][month];
  const m = [45, 30, 5, 45, 30, 20, 25, 40, 55, 10, 25, 40][month];
  return `${h}:${String(m).padStart(2, '0')}`;
}

// Whale watching season: June (month 5) through November (month 10), daily sessions.
// Morning boarding 08:30 — if that has passed for today, roll to tomorrow.
// Out of season: show the opening date of the next season.
function getNextWhaleDate(): string {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Work entirely in Brisbane local time
  const now = new Date(
    new Date().toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
  );
  const month = now.getMonth(); // 0-indexed

  // In season = June–November (5–10)
  const inSeason = month >= 5 && month <= 10;

  if (inSeason) {
    // Morning session boards at 08:30 — if we're past that, advance to tomorrow
    const boardingPassed =
      now.getHours() > 8 || (now.getHours() === 8 && now.getMinutes() >= 30);
    const target = new Date(now);
    if (boardingPassed) target.setDate(target.getDate() + 1);
    return `${target.getDate()} ${MONTHS[target.getMonth()]} · 08:30 · Sun Goddess`;
  }

  // Out of season — next June 1
  const nextJune = new Date(
    month > 10 ? now.getFullYear() + 1 : now.getFullYear(),
    5, // June
    1,
  );
  return `Season opens 1 Jun ${nextJune.getFullYear()}`;
}

export async function GET() {
  const [sunsetResult, seaResult] = await Promise.allSettled([
    fetchSunset(),
    fetchSeaState(),
  ]);

  return NextResponse.json({
    sunset: sunsetResult.status === 'fulfilled' ? sunsetResult.value : sunsetFallback(),
    seaState: seaResult.status === 'fulfilled' ? seaResult.value : 'Calm · 0.4m',
    nextWhale: getNextWhaleDate(),
  });
}
