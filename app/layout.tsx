import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SindhiGPT - سنڌي GPT | سنڌي AI",
  description: "SindhiGPT - سنڌي ٻهرون AI دوست، دنيا جو پهريون سنڌي AI",
  keywords: ["SindhiGPT", "Sindhi AI", "سنڌي GPT"],
  openGraph: {
    title: "SindhiGPT - سنڌي ۾ ڳالهائيندڙ AI",
    description: "سنڌي دنيا جو پهريون سنڌي AI دوست",
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
        <meta name="monetag" content="1b861ed6bb7d53f1f7d2a4d1f7c1b9a" />
        {/* PWA Install لاءِ */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, Noto Nastaliq Urdu, sans-serif", background: "#f5f5f5" }}>
        {children}
        {/* Monetag Ad - Body جي آخر ۾، جيئن پراڻي ڊيزائن ۾ هو - Chat کي Cover نه ڪندو */}
        <script src="https://quge5.com/88/tag.min.js" data-zone="174339" async data-cfasync="false"></script>
      </body>
    </html>
  );
}
