import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SindhiGPT - سنڌي GPT | Sindhi AI Chat",
  description: "SindhiGPT - دنيا جو پھريون سنڌي AI. سنڌي ۾ سوال پڇو، جواب سنڌي ۾ حاصل ڪريو. Sindhi Tau - سنڌي ثقافت جو ماهر.",
  keywords: ["SindhiGPT","Sindhi AI","سنڌي GPT","Sindhi Tau"],
  openGraph: {
    title: "SindhiGPT - سنڌي ۾ ڳالهائيندڙ AI",
    description: "دنيا جو پھريون سنڌي AI",
    url: "https://sindhigpt.vercel.app",
    siteName: "SindhiGPT",
    locale: "sd_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sd" dir="rtl">
      <body style={{margin:0,fontFamily:"system-ui"}}>{children}</body>
    </html>
  );
}
