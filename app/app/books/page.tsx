
"use client";

import { useState } from "react";

const sachalSections = [
  {
    title: "سچل جو رسالو - عثمان علي انصاري",
    description: "سچل سرمست جو مڪمل رسالو",
    icon: "📖",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-jo-risalo-complete-pdf.html",
    pdf: "/Sachal-jo-risalo.pdf",
  },
  {
    title: "سچل سرمست جا 40 بيت",
    description: "بيت، تشريح ۽ وحدت الوجود جو فڪر",
    icon: "✍️",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-sarmast-bait-40-tashreeh-wahdat-ul-wajud-sindhi.html",
  },
  {
    title: "سچل سرمست جا 100 بيت",
    description: "بيت ۽ انهن جي سنڌي معنيٰ",
    icon: "📚",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-sarmast-100-baith-with-meaning.html",
  },
];

const books = [
  {
    title: "شاهه جو رسالو",
    description: "شاهه عبداللطيف ڀٽائيءَ جو لازوال ڪلام",
    icon: "📜",
    href: "https://islamsolangi786.blogspot.com/2026/10/shah-jo-risalo-mukamal-online-read.html",
    ready: true,
  },

  {
    title: "ساميءَ جا سلوڪ",
    description: "سامي جا سلوڪ تشريح سان",
    icon: "🪔",
    href: "https://islamsolangi786.blogspot.com/2026/10/sami-ja-salook-mukamal-kitab-sindhi-pdf-tashreeh.html",
    pdf: "/Sammi-ja-sulook.pdf",
    ready: true,
  },
  {
    title: "لهر لهر دريا - استاد بخاري",
    description: "استاد بخاري جو مشهور مجموعو",
    icon: "🌊",
    href: "https://islamsolangi786.blogspot.com/2026/10/lehar-lehar-darya-ustad-bukhari-online.html",
    pdf: "/Lahar-lahar-darya.pdf",
    ready: true,
  },
  {
    title: "سنڌي گرامر - ارنيسٽ ٽرمپ",
    description: "سنڌي ٻولي جو گرامر - PDF ڪتاب",
    icon: "📝",
    href: "https://islamsolangi786.blogspot.com/2026/10/sindhi-grammar-ernest-trump-online.html",
    pdf: "/Sindhi-grammar.pdf",
    ready: true,
  },
  {
    title: "پهاڪا ۽ چوڻيون",
    description: "سنڌي پهاڪن ۽ چوڻين جو مجموعو",
    icon: "💬",
    href: "https://islamsolangi786.blogspot.com/2026/10/pahaka-chooniyan-sindhi-proverbs-online.html",
    pdf: "/Pahaka-chawaniyon.pdf",
    ready: true,
  },
  {
    title: "سنڌي لوڪ ڪهاڻيون",
    description: "سسئي پنهون، عمر مارئي، مومل راڻو",
    icon: "🏺",
    href: "https://islamsolangi786.blogspot.com/search/label/لوڪ%20ڪهاڻيون",
    ready: true,
  },
];

export default function BooksLibraryPage() {
  const [showSachal, setShowSachal] = useState(false);

  const pageStyle = {
    minHeight: "100vh",
    padding: "22px 14px",
    background: "linear-gradient(180deg,#ecfdf5 0%,#f8fafc 100%)",
    color: "#075e45",
  } as const;

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 12px",
    minHeight: "76px",
    border: "1px solid #bbf7d0",
    borderRadius: "15px",
    background: "#f0fdf4",
    color: "#075e45",
    textDecoration: "none",
    cursor: "pointer",
  } as const;

  return (
    <main dir="rtl" style={pageStyle}>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #d1fae5",
          borderRadius: "22px",
          padding: "22px 16px",
          boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "48px" }}>
            {showSachal ? "📖" : "📚"}
          </div>

          
        <div
          style={{
            background: "#075e45",
            color: "#fff",
            borderRadius: "12px",
            padding: "13px 15px",
            marginBottom: "15px",
            fontWeight: "bold",
            fontSize: "17px",
          }}

        <div style={{ display: "grid", gap: "12px" }}>
          {(showSachal ? sachalSections : books).map((item, index) => {
            const isSachalBook =
              "type" in item && item.type === "sachal";

            const content = (
              <>
                <span style={{ fontSize: "28px", flexShrink: 0 }}>
                  {item.icon}
                </span>

                <span style={{ flex: 1 }}>
                  <strong style={{ display: "block", fontSize: "16px" }}>
                    {index + 1}. {item.title}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      fontSize: "12px",
                      lineHeight: 1.8,
                      color: "#64748b",
                      marginTop: "4px",
                    }}
                  >
                    {item.description}
                  </span>

                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "6px",
                      fontSize: "11px",
                      color: "#15803d",
                      fontWeight: "bold",
                    }}
                  >
                    ڪتاب کوليو ❯
                  </span>
                </span>

                <span style={{ fontSize: "20px", flexShrink: 0 }}>
                  ❮
                </span>
              </>
            );

            if (showSachal) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={cardStyle}
                >
                  {content}
                </a>
              );
            }

            if (isSachalBook) {
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setShowSachal(true)}
                  style={{
                    ...cardStyle,
                    width: "100%",
                    textAlign: "right",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                  }}
                >
                  {content}
                </button>
              );
            }

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={cardStyle}
              >
                {content}
              </a>
            );
          })}
        </div>

        {showSachal && (
          <button
            type="button"
            onClick={() => setShowSachal(false)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              marginTop: "20px",
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid #bbf7d0",
              background: "#ecfdf5",
              color: "#075e45",
              fontFamily: "inherit",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ❮ واپس ڪتابن جي فهرست ڏانهن
          </button>
        )}

        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            borderRadius: "16px",
            border: "2px dashed rgba(13,92,54,0.2)",
            background: "linear-gradient(to bottom right, #f0faf4, white)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#0d5c36",
              marginBottom: "8px",
            }}
          >
            📝 وڌيڪ سنڌي ڪتاب - Islam Solangi Blog
          </h3>

          <a
            href="https://islamsolangi786.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "white",
              border: "1px solid #0d5c36",
              color: "#0d5c36",
              padding: "10px 22px",
              borderRadius: "24px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            🌐 Blog وزٽ ڪريو
          </a>
        </div>

        <a
          href="/"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "16px",
            padding: "14px",
            borderRadius: "14px",
            background: "#075e45",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🏠 واپس سنڌي GPT ڏانهن
        </a>
      </div>
    </main>
  );
}
