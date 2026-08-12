import { NextResponse } from 'next/server';
import { sendKaiMessage } from '@/lib/kai';

export async function POST(req: Request) {
  console.log('[kai/messages] POST received');

  const body = await req.json().catch(() => null);
  const conversationId = typeof body?.conversationId === 'string' ? body.conversationId : '';
  const content = typeof body?.content === 'string' ? body.content.trim() : '';

  if (!conversationId || !content) {
    console.warn('[kai/messages] missing conversationId or content');
    return NextResponse.json(
      { error: 'A conversation id and a message are both required.' },
      { status: 400 },
    );
  }

  try {
    const turn = await sendKaiMessage({ conversationId, content });

    console.log('[kai/messages] OK —', turn.productCards.length, 'product card(s)');
    return NextResponse.json(turn);
  } catch (err) {
    console.error('[kai/messages] error', err);
    return NextResponse.json({ error: 'The booking assistant did not respond.' }, { status: 502 });
  }
}
