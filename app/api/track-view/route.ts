import { NextResponse } from 'next/server';
import { createPublicClient } from '@/lib/supabase/public';

// Records a single article view together with the visitor's approximate
// location. Vercel attaches location headers to every request in production
// (x-vercel-ip-*); they are empty in local dev, so location falls back to null.
export async function POST(req: Request) {
  console.log('[track-view] POST received');

  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = body?.slug;
  } catch {
    // No / invalid JSON body — handled below
  }

  if (!slug) {
    console.warn('[track-view] missing slug');
    return NextResponse.json({ error: 'slug required' }, { status: 400 });
  }

  // Read Vercel's approximate geolocation headers (city may be URL-encoded)
  const h = req.headers;
  const decode = (v: string | null) => (v ? decodeURIComponent(v) : null);
  const country = decode(h.get('x-vercel-ip-country'));
  const region = decode(h.get('x-vercel-ip-country-region'));
  const city = decode(h.get('x-vercel-ip-city'));

  const supabase = createPublicClient();
  const { error } = await supabase.rpc('record_post_view', {
    p_slug: slug,
    p_country: country,
    p_region: region,
    p_city: city,
  });

  if (error) {
    console.error('[track-view] rpc error', error.message);
    return NextResponse.json({ error: 'failed to record view' }, { status: 500 });
  }

  console.log('[track-view] recorded', { slug, country, city });
  return NextResponse.json({ ok: true });
}
