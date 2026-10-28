"use client";

const surs = [
  {
    name: "📖 شاهه جو رسالو مڪمل معنيٰ سان PDF - 13MB",
    url: "/shah-jo-risalo-with-meaning.pdf",
    isPdf: true,
  },
  {
    name: "سُر سسئي پنهون",
    url: "https://islamsolangi786.blogspot.com/2026/10/blog-post_231.html",
  },
  {
    name: "سُر سامونڊي",
    url: "https://islamsolangi786.blogspot.com/2026/10/sur-suri-raag-shah-abdul-latif-70-bait-6-wai.html",
  },
  {
    name: "سُر سهڻي ميهار",
    url: "https://islamsolangi786.blogspot.com/2026/10/blog-post_27.html",
  },
  {
    name: "سُر سري راڳ",
    url: "https://islamsolangi786.blogspot.com/2026/10/sur-sari-raag-shah-jo-risalo-complete.html",
  },
  {
    name: "سُر کنڀات",
    url: "https://islamsolangi786.blogspot.com/2026/10/sur-khambhat-shah-jo-risalo-complete-baits.html",
  },
  {
    name: "سُر يمن ڪلياڻ",
    url: "https://islamsolangi786.blogspot.com/2026/10/sur-yaman-kalyan-complete-70-bait-sindhi.html",
  },
  {
    name: "سُر ڪلياڻ",
    url: "https://islamsolangi786.blogspot.com/2026/10/blog-post.html",
  },
  {
    name: "سُر مومل راڻو",
    url: "https://islamsolangi786.blogspot.com/2026/10/blog-post_971.html",
  },
];

export default function BooksPage() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        padding: "20px 14px",
        background: "linear-gradient(180deg, #ecfdf5 0%, #f8fafc 100%)",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "22px 16px",
          boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
          border: "1px solid #d1fae5",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <div style={{ fontSize: "42px" }}>📚</div>
          <h1 style={{ color: "#075e45", fontSize: "27px", margin: "8px 0" }}>
            شاهه جو رسالو
          </h1>
          <p style={{ color: "#475569", lineHeight: 1.9, fontSize: "15px", margin: 0 }}>
            حضرت شاهه عبداللطيف ڀٽائيءَ جي رسالي جا سُر پڙهڻ لاءِ چونڊيو.
          </p>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {surs.map((sur, index) => (
            <a
              key={sur.name}
              href={sur.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px",
                border: sur.isPdf ? "2px solid #075e45" : "1px solid #bbf7d0",
                borderRadius: "14px",
                background: sur.isPdf ? "#075e45" : "#f8fffb",
                color: sur.isPdf ? "white" : "#075e45",
                textDecoration: "none",
                fontSize: "17px",
                fontWeight: "bold",
                minHeight: "64px",
              }}
            >
              <span
                style={{
                  background: sur.isPdf ? "white" : "#075e45",
                  color: sur.isPdf ? "#075e45" : "white",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "15px",
                }}
              >
                {sur.isPdf ? "📖" : index}
              </span>
              <span style={{ flex: 1 }}>{sur.name}</span>
              <span style={{ color: sur.isPdf ? "white" : "#16a34a", fontSize: "20px" }}>❮</span>
            </a>
          ))}
        </div>

        {/* AdSense Loop - Blogger */}
        <div
          style={{
            marginTop: "28px",
            padding: "18px",
            borderRadius: "16px",
            border: "2px dashed #bbf7d0",
            background: "#f0fdf4",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#075e45", fontSize: "16px", margin: "0 0 8px 0" }}>
            📝 وڌيڪ سنڌي ڪتاب - Islam Solangi Blog
          </h3>
          <p style={{ color: "#64748b", fontSize: "13px", margin: "0 0 10px 0" }}>
            سنڌي ادب، تاريخ ۽ ثقافت جا تفصيلي مضمون
          </p>
          <a
            href="https://islamsolangi786.blogspot.com/"
            target="_blank"
            rel="dofollow"
            style={{
              display: "inline-block",
              background: "white",
              border: "1px solid #075e45",
              color: "#075e45",
              padding: "10px 20px",
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
            marginTop: "20px",
            padding: "14px",
            borderRadius: "14px",
            background: "#075e45",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          🏠 واپس سنڌي GPT ڏانهن
        </a>

        <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "18px", marginBottom: 0 }}>
          سنڌي ٻولي، ادب ۽ ثقافت سان محبت
        </p>
      </div>
    </main>
  );
}
