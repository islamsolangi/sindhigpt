
"use client";

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
    title: "سچل سرمست جي ڪافي",
    description: "سچل سائينءَ جون ڪافيون ۽ آسان سنڌي معنيٰ",
    icon: "🎼",
    category: "صوفيانه شاعري",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-sarmast-kafis-tashreeh-15-famous-sindhi-kafi.html",
    ready: true,
  },
  {
    title: "سچل سرمست: جي هون پڇوڙي",
    description: "ڪافي ۽ ان جي تشريح",
    icon: "💚",
    category: "صوفيانه شاعري",
    href: "https://islamsolangi786.blogspot.com/2026/10/suchal-sarmast-ji-hon-pachori.html",
    ready: true,
  },
  {
    title: "سچل سرمست جون ڪافيون ۽ سنڌي معنيٰ",
    description: "ڪافين جو مجموعو ۽ سنڌي تشريح",
    icon: "📖",
    category: "ڪلاسيڪي ادب",
    href: "https://islamsolangi786.blogspot.com/2026/10/suchal-sarmast-kafi-sindhi-meaning.html",
    ready: true,
  },
  {
    title: "سچل سرمست جا 40 بيت",
    description: "بيت، تشريح ۽ وحدت الوجود جو فڪر",
    icon: "✍️",
    category: "سنڌي شاعري",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-sarmast-bait-40-tashreeh-wahdat-ul-wajud-sindhi.html",
    ready: true,
  },
  {
    title: "سچل سرمست جا 100 بيت",
    description: "سچل سائينءَ جا بيت ۽ انهن جي معنيٰ",
    icon: "📚",
    category: "صوفيانه ادب",
    href: "https://islamsolangi786.blogspot.com/2026/10/sachal-sarmast-100-baith-with-meaning.html",
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
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        padding: "22px 14px",
        background: "linear-gradient(180deg,#ecfdf5 0%,#f8fafc 100%)",
        fontFamily: "inherit",
        color: "#075e45",
      }}
    >
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
          <div style={{ fontSize: "48px" }}>📚</div>
          <h1 style={{ fontSize: "27px", margin: "8px 0" }}>
            سنڌي ڪتابن جي لائبريري
          </h1>
          <p style={{ color: "#64748b", lineHeight: 1.9, margin: 0 }}>
            سنڌي ٻولي، ادب، شاعري ۽ ثقافت جو خزانو
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
          📖 پنهنجي پسند جو ڪتاب چونڊيو
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {books.map((book, index) => (
            <a
              key={book.title}
              href={book.ready ? book.href : undefined}
              target={book.ready ? "_blank" : undefined}
              rel={book.ready ? "noopener noreferrer" : undefined}
              onClick={(event) => {
                if (!book.ready) event.preventDefault();
              }}
              aria-disabled={!book.ready}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 12px",
                minHeight: "76px",
                border: "1px solid #bbf7d0",
                borderRadius: "15px",
                background: book.ready ? "#f0fdf4" : "#fff",
                color: "#075e45",
                textDecoration: "none",
                cursor: book.ready ? "pointer" : "default",
                opacity: book.ready ? 1 : 0.85,
              }}
            >
              <span style={{ fontSize: "28px", flexShrink: 0 }}>
                {book.icon}
              </span>

              <span style={{ flex: 1 }}>
                <strong style={{ display: "block", fontSize: "16px" }}>
                  {index + 1}. {book.title}
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
                  {book.description}
                </span>

                <span
                  style={{
                    display: "inline-block",
                    marginTop: "6px",
                    fontSize: "11px",
                    color: book.ready ? "#15803d" : "#b45309",
                    fontWeight: "bold",
                  }}
                >
                  {book.ready ? "پڙهڻ لاءِ کوليو" : "جلد اچي رهيو آهي"}
                </span>
              </span>

              <span style={{ fontSize: "20px", flexShrink: 0 }}>
                {book.ready ? "❮" : "🔒"}
              </span>
            </a>
          ))}
        </div>

        <a
          href="/"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "24px",
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
