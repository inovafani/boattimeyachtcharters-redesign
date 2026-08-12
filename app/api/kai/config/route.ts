import { NextResponse } from 'next/server';
import { fetchKaiConfig } from '@/lib/kai';

export async function GET() {
  console.log('[kai/config] GET received');

  try {
    const config = await fetchKaiConfig();

    console.log('[kai/config] OK —', config.tenant?.slug);
    return NextResponse.json({
      widgetTitle: config.branding?.widgetTitle ?? 'Kai',
      welcomeMessage:
        config.branding?.welcomeMessage ?? 'Hi, I am Kai. How can I help with your charter?',
    });
  } catch (err) {
    console.error('[kai/config] error', err);
    return NextResponse.json({ error: 'Could not reach the booking assistant.' }, { status: 502 });
  }
}
