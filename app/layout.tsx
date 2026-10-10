import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SindhiGPT - سنڌي GPT",
  description: "سنڌي ٻولي جو پهريون AI چيٽ بوٽ",
  openGraph: {
    url: "https://sindhigpt.vercel.app",
    siteName: "SindhiGPT",
    locale: "sd_PK",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sd" dir="rtl">
      <head>
        <meta name="monetag" content="4d1f7c1b9a" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
      </head>
      <body style={{ margin: 0, fontFamily: "Noto Nastaliq Urdu, sans-serif", background: "#f5f5f5" }}>
        {children}
        
        {/* Monetag - Onclick Ad - ڪمائي لاءِ */}
        <Script 
          id="monetag-ad"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s){s.dataset.zone='11995261',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
          }}
        />
      </body>
    </html>
  );
}
