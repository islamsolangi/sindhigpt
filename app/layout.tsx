import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SindhiGPT - سنڌي جي پي ٽي - محمد اسلام سولنگي",
  description: "سنڌي ٻولي لاءِ AI چيٽ - ٺاهيندڙ محمد اسلام سولنگي",
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4ac.png" />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f8fafc" }}>
        <header style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1e40af" }}>
            سنڌيGPT - محمد اسلام سولنگي
          </div>
          <nav style={{ display: "flex", gap: "15px", fontSize: "14px" }}>
            <a href="/" style={{ textDecoration: "none", color: "#334155" }}>هوم</a>
            <a href="/about" style={{ textDecoration: "none", color: "#334155" }}>اسان بابت</a>
            <a href="/blog" style={{ textDecoration: "none", color: "#334155" }}>بلاگ</a>
            <a href="/privacy" style={{ textDecoration: "none", color: "#334155" }}>پرائيويسي</a>
            <a href="/contact" style={{ textDecoration: "none", color: "#334155" }}>رابطو</a>
          </nav>
        </header>
        
        <main>{children}</main>

        <footer style={{ textAlign: "center", padding: "24px", color: "#64748b", fontSize: "13px", marginTop: "40px", background: "white", borderTop: "1px solid #e2e8f0" }}>
          © 2026 سنڌيGPT - ٺاهيندڙ: محمد اسلام سولنگي | سڀ حق محفوظ آهن
        </footer>
      </body>
    </html>
  );
}
