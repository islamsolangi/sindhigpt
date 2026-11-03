import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SindhiGPT - سنڌي جي پي ٽي",
  description: "سنڌي ٻولي لاءِ AI چيٽ",
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sd" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4ac.png" />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
        
        {/* Monetag 12165486 (304272) - صرف هڪ ڀيرو في سيشن */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!sessionStorage.getItem('ad_304272_done')) {
                var s = document.createElement('script');
                s.src = 'https://quge5.com/88/tag.min.js';
                s.setAttribute('data-zone', '304272');
                s.async = true;
                s.setAttribute('data-cfasync', 'false');
                document.body.appendChild(s);
                sessionStorage.setItem('ad_304272_done', '1');
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
