import { NextResponse } from 'next/server';
import { createKaiConversation } from '@/lib/kai';

export async function POST() {
  console.log('[kai/session] POST received');

  try {
    const conversationId = await createKaiConversation();

    console.log('[kai/session] OK — conversation', conversationId);
    return NextResponse.json({ conversationId });
  } catch (err) {
    console.error('[kai/session] error', err);
    return NextResponse.json(
      { error: 'Could not start a conversation with the booking assistant.' },
      { status: 502 },
    );
  }
}
