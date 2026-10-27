
"use client";

const surs = [
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
        background: "#f0fdf4",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "20px 16px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#075e45",
            fontSize: "25px",
            margin: "4px 0 8px",
          }}
        >
          📚 شاهه جو رسالو
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#475569",
            lineHeight: 1.9,
            marginBottom: "22px",
          }}
        >
          شاهه عبداللطيف ڀٽائيءَ جي رسالي جا موجود سُر پڙهڻ لاءِ چونڊيو.
        </p>

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
                padding: "16px 14px",
                border: "1px solid #bbf7d0",
                borderRadius: "14px",
                background: "#f8fffb",
                color: "#075e45",
                textDecoration: "none",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  background: "#075e45",
                  color: "white",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "15px",
                }}
              >
                {index + 1}
              </span>

              <span>{sur.name}</span>

              <span style={{ marginRight: "auto" }}>❯</span>
            </a>
          ))}
        </div>

        <a
          href="/"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "24px",
            padding: "13px",
            borderRadius: "12px",
            background: "#075e45",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          واپس سنڌي GPT ڏانهن
        </a>
      </div>
    </main>
  );
}
