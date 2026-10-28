
"use client";

import { useState } from "react";

const sachalSections = [
  {
    title: "شاهه جو رسالو معنيٰ سان PDF",
    description: "مڪمل شاهه جو رسالو سنڌي معنيٰ ۽ تشريح سان PDF ڊائونلوڊ - 13MB",
    icon: "📖",
    href: "/shah-jo-risalo-with-meaning.pdf",
  },
    {
    title: "سچل جو رسالو - عثمان علي انصاري",
    description: "سچل سرمست جو مڪمل رسالو - PDF",
    icon: "📖",
    href: "/Sachal-jo-risalo.pdf",
  },
  {
    title: "سامي جا سلوڪ",
    description: "سامي جا سلوڪ تشريح سان - PDF",
    icon: "📜",
    href: "/Sammi-ja-sulook.pdf",
  },
  {
    title: "لهر لهر دريا - استاد بخاري",
    description: "استاد بخاري جو مشهور شاعري مجموعو",
    icon: "🌊",
    href: "/Lahar-lahar-darya.pdf",
  },
  {
    title: "سنڌي گرامر - ارنيست ٽرمپ",
    description: "سنڌي ٻولي جو گرامر - PDF",
    icon: "📝",
    href: "/Sindhi-grammar.pdf",
  },
  {
    title: "پهاڪا چوڻيون - سنڌي پهاڪا",
    description: "سنڌي پهاڪن ۽ چوڻين جو مجموعو",
    icon: "💬",
    href: "/Pahaka-chawaniyon.pdf",
  },
  {
    title: "سچل سرمست جون ڪافيون",
    description: "15 مشهور ڪافيون ۽ سنڌي تشريح",
    icon: "🎼",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-sarmast-kafis-tashreeh-15-famous-sindhi-kafi.html",
  },
  {
    title: "سچل جي هون پڇوڙي",
    description: "ڪافي ۽ ان جي تشريح",
    icon: "💚",
    href: "https://islamsolangi786.blogspot.com/2026/10/suchal-sarmast-ji-hon-pachori.html",
  },
  {
    title: "ڪافيون ۽ سنڌي معنيٰ",
    description: "ڪافين جو مجموعو ۽ آسان سنڌي معنيٰ",
    icon: "📖",
    href: "https://islamsolangi786.blogspot.com/2026/10/suchal-sarmast-kafi-sindhi-meaning.html",
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
    category: "ڪلاسيڪي شاعري",
    href: "/app/app/books",
    ready: true,
  },
  {
    title: "سچل سرمست جو رسالو",
    description: "سچل سائينءَ جي ڪلام، ڪافين ۽ بيتن جا حصا",
    icon: "📖",
    category: "صوفيانه ادب",
    type: "sachal",
    ready: true,
  },
  {
    title: "ساميءَ جا سلوڪ",
    description: "ساميءَ جي فڪر ۽ دانائيءَ جا موتي",
    icon: "🪔",
    category: "صوفيانه ادب",
    ready: false,
  },
  {
    title: "سنڌي لوڪ ڪهاڻيون",
    description: "سسئي پنهون، عمر مارئي، مومل راڻو ۽ ٻيون ڪهاڻيون",
    icon: "🏺",
    category: "لوڪ ادب",
    ready: false,
  },
  {
    title: "سنڌي بيت ۽ وايون",
    description: "سنڌ جي شاعرن جو چونڊ ڪلام",
    icon: "✍️",
    category: "شاعري",
    ready: false,
  },
  {
    title: "سنڌي ناول",
    description: "سنڌي ادب جا ناول",
    icon: "📚",
    category: "ناول",
    ready: false,
  },
  {
    title: "سنڌي ڪهاڻيون",
    description: "سنڌي ليکڪن جون ڪهاڻيون",
    icon: "📘",
    category: "ڪهاڻي",
    ready: false,
  },
  {
    title: "سنڌي ٻولي ۽ گرامر",
    description: "سنڌي لکڻ، پڙهڻ ۽ ٻولي سکڻ لاءِ",
    icon: "🔤",
    category: "تعليم",
    ready: false,
  },
  {
    title: "سنڌي پهاڪا ۽ چوڻيون",
    description: "سنڌي ٻوليءَ جا پهاڪا ۽ محاورا",
    icon: "💎",
    category: "ٻولي ۽ ثقافت",
    ready: false,
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
          <h1 style={{ fontSize: "27px", margin: "8px 0" }}>
            {showSachal ? "سچل سرمست جو رسالو" : "سنڌي ڪتابن جي لائبريري"}
          </h1>
          <p style={{ color: "#64748b", lineHeight: 1.9, margin: 0 }}>
            {showSachal
              ? "پنهنجي پسند جي ڪافي، بيت يا تشريح چونڊيو"
              : "سنڌي ٻولي، ادب، شاعري ۽ ثقافت جو خزانو"}
          </p>
        </header>

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
        >
          {showSachal
            ? "🎼 سچل سائينءَ جي ڪلام جا حصا"
            : "📖 پنهنجي پسند جو ڪتاب چونڊيو"}
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {(showSachal ? sachalSections : books).map((item, index) => {
            const isSachalBook = "type" in item && item.type === "sachal";

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
                    پڙهڻ لاءِ کوليو
                  </span>
                </span>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>❮</span>
              </>
            );

            if (showSachal) {
              return (
                <a
                  key={item.title}
                  href={"href" in item ? item.href : "#"}
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
                href={"href" in item ? item.href : undefined}
                onClick={(event) => {
                  if (!("ready" in item) || !item.ready) {
                    event.preventDefault();
                  }
                }}
                aria-disabled={"ready" in item ? !item.ready : true}
                style={{
                  ...cardStyle,
                  background:
                    "ready" in item && item.ready ? "#f0fdf4" : "#fff",
                  opacity:
                    "ready" in item && item.ready ? 1 : 0.75,
                  cursor:
                    "ready" in item && item.ready ? "pointer" : "default",
                }}
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

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "12px",
            marginTop: "18px",
          }}
        >
          سنڌي ادب محفوظ ڪريو، سنڌي ٻوليءَ کي وڌايو
        </p>
      </div>
    </main>
  );
}
