import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const OWNER_EMAIL = 'info@boattimeyachtcharters.com.au';
const FROM_EMAIL =
  process.env.FROM_EMAIL ??
  'Boattime Yacht Charters <noreply@boattimeyachtcharters.com>';

export async function POST(req: Request) {
  console.log('[partnership] POST received');

  if (!process.env.RESEND_API_KEY) {
    console.error('[partnership] RESEND_API_KEY not set');
    return NextResponse.json(
      { error: 'Email service not configured.' },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { type } = body;

  if (!type || (type !== 'company' && type !== 'creator')) {
    return NextResponse.json({ error: 'Invalid partnership type.' }, { status: 400 });
  }

  const contactEmail = type === 'company' ? body.companyEmail : body.creatorEmail;
  const contactName = type === 'company' ? body.companyName : body.creatorName;

  if (!contactEmail || !contactName) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: contactEmail,
      subject: `New Partnership Application — ${contactName} (${type === 'company' ? 'Company' : 'Creator'})`,
      html: ownerEmail(body),
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: contactEmail,
      subject: 'Your Partnership Application — Boattime Yacht Charters',
      html: applicantEmail(contactName, type),
    });

    console.log('[partnership] emails sent OK');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[partnership] send error', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}

function ownerEmail(data: Record<string, string>) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#8a7a5a;font-family:sans-serif;white-space:nowrap;border-bottom:1px solid #1e2e45;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:#f5f0e8;font-family:sans-serif;border-bottom:1px solid #1e2e45;">${value}</td>
        </tr>`
      : '';

  const isCompany = data.type === 'company';
  const rows = isCompany
    ? [
        row('Partnership Type', 'Company'),
        row('Company Name', data.companyName),
        row('Website', data.companyWebsite),
        row('Email', data.companyEmail),
        row('Phone', data.companyPhone),
        row('Address', data.companyAddress),
        row('Message', data.message),
      ].join('')
    : [
        row('Partnership Type', 'Creator'),
        row('Name', data.creatorName),
        row('Email', data.creatorEmail),
        row('Phone', data.creatorPhone),
        row('Instagram', data.instagram),
        row('YouTube', data.youtube),
        row('TikTok', data.tiktok),
        row('Address', data.creatorAddress),
        row('Message', data.message),
      ].join('');

  const contactEmail = isCompany ? data.companyEmail : data.creatorEmail;
  const contactName = isCompany ? data.companyName : data.creatorName;

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a1628;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0d1f38;border:1px solid #1e3a5a;border-radius:2px;overflow:hidden;">
        <tr>
          <td style="background:#0a1628;padding:28px 32px;border-bottom:2px solid #c9a84c;">
            <p style="margin:0;font-family:sans-serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#c9a84c;font-weight:600;">New Partnership Application</p>
            <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:24px;font-weight:300;color:#f5f0e8;">${contactName}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 16px;">
            <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;border-top:1px solid #1e3a5a;">
            <a href="mailto:${contactEmail}" style="display:inline-block;padding:12px 28px;background:#c9a84c;color:#0a1628;font-family:sans-serif;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;">Reply to ${contactName}</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function applicantEmail(name: string, type: string) {
  const firstName = name.split(' ')[0];
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a1628;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0d1f38;border:1px solid #1e3a5a;border-radius:2px;overflow:hidden;">
        <tr><td style="height:3px;background:linear-gradient(to right,#c9a84c,#e8c96b,#c9a84c);"></td></tr>
        <tr>
          <td style="padding:44px 40px 28px;text-align:center;">
            <p style="margin:0 0 6px;font-family:sans-serif;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#c9a84c;font-weight:600;">Boattime Yacht Charters</p>
            <h1 style="margin:16px 0 0;font-family:Georgia,serif;font-size:30px;font-weight:300;color:#f5f0e8;line-height:1.2;">Thank you, ${firstName}.</h1>
            <p style="margin:18px 0 0;font-family:Georgia,serif;font-size:16px;font-style:italic;color:rgba(245,240,232,0.6);line-height:1.6;">Your ${type === 'company' ? 'company' : 'creator'} partnership application is in good hands.</p>
          </td>
        </tr>
        <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #1e3a5a;margin:0;"></td></tr>
        <tr>
          <td style="padding:32px 40px;">
            <p style="margin:0 0 18px;font-family:sans-serif;font-size:14px;color:rgba(245,240,232,0.75);line-height:1.8;">
              We've received your partnership application and our team will review it carefully. We'll be in touch within 2–3 business days to discuss next steps.
            </p>
            <p style="margin:0;font-family:sans-serif;font-size:14px;color:rgba(245,240,232,0.75);line-height:1.8;">
              In the meantime, feel free to reach us at <strong style="color:#c9a84c;">+61 477 667 644</strong> or reply to this email.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;text-align:center;">
            <p style="margin:0;font-family:Georgia,serif;font-size:15px;font-style:italic;color:rgba(245,240,232,0.5);line-height:1.7;">"Great partnerships start on the water."</p>
            <p style="margin:12px 0 0;font-family:sans-serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#c9a84c;">— The Boattime Family, Gold Coast</p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #1e3a5a;text-align:center;">
            <p style="margin:0;font-family:sans-serif;font-size:11px;color:rgba(245,240,232,0.3);line-height:1.6;">
              Boattime Yacht Charters · Muriel Henchman Public Pontoon, Main Beach 4217<br>
              <a href="https://boattimeyachtcharters.com.au" style="color:#c9a84c;text-decoration:none;">boattimeyachtcharters.com.au</a>
            </p>
          </td>
        </tr>
        <tr><td style="height:2px;background:linear-gradient(to right,#c9a84c,#e8c96b,#c9a84c);"></td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
