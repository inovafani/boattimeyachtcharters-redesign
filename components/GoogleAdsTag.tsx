import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-18035686182';

/**
 * Google Ads / gtag.js tag.
 * Dipasang per-halaman (bukan di root layout) supaya hanya aktif
 * di halaman kampanye yang diminta.
 */
export default function GoogleAdsTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
      </Script>
    </>
  );
}
