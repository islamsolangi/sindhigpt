"use client";

const books = [
    {
  title: "چچ نامو - فتح نامہ سنڌ",
  description: "سنڌ جي تاريخ جو سڀ کان پراڻو ڪتاب - راجا چچ، ڏاهر ۽ محمد بن قاسم",
  icon: "📜",
  href: "/app/books/chach-nama",
},
    {
  title: "تحفة الڪرام - تاريخ سنڌ",
  description: "مير علي شير قانع ٺٽوي - سنڌ جي مڪمل تاريخ، بزرگن ۽ شهرن جو احوال",
  icon: "📖",
  href: "/app/books/tuhfat-ul-kiram",
},
   {
  title: "تاريخ سنڌ - مرزا قليچ بيگ",
  description: "مرزا قليچ بيگ - سنڌ جي قديم دور کان انگريزن تائين مستند تاريخ",
  icon: "📜",
  href: "/app/books/tarikh-sindh-qalich",
}, 
    {
  title: "محمد بن قاسم - فاتح سنڌ",
  description: "محمد بن قاسم جي سوانح، سنڌ جي فتح ۽ سندس عدل و انصاف جو داستان",
  icon: "⚔️",
  href: "/app/books/muhammad-bin-qasim",
},
{
title: "شاهه جو رسالو",
description: "شاهه عبداللطيف ڀٽائيءَ جو لازوال ڪلام",
icon: "📜",
href: "https://islamsolangi786.blogspot.com/2026/10/shah-jo-risalo-mukamal-online-read.html",
},
{
title: "سچل سرمست جو رسالو",
description: "سچل سرمست جو مڪمل رسالو",
icon: "📖",
href: "https://islamsolangi786.blogspot.com/2026/10/sachal-jo-risalo-usman-ali-ansari.html",
},
{
title: "ساميءَ جا سلوڪ",
description: "ساميءَ جي شاعري",
icon: "🪔",
href: "https://islamsolangi786.blogspot.com/2026/10/sami-ja-salook-mukamal-kitab-sindhi-pdf-tashreeh.html",
},
{
title: "لهر لهر دريا",
description: "استاد بخاريءَ جو مشهور مجموعو",
icon: "🌊",
href: "https://islamsolangi786.blogspot.com/2026/10/lehar-lehar-darya-ustad-bukhari-online.html",
},
{
title: "سنڌي گرامر",
description: "سنڌي ٻوليءَ جو گرامر",
icon: "📝",
href: "https://islamsolangi786.blogspot.com/2026/10/sindhi-grammar-ernest-trump-online.html",
},
{
title: "پهاڪا ۽ چوڻيون",
description: "سنڌي پهاڪن ۽ چوڻين جو مجموعو",
icon: "💬",
href: "https://islamsolangi786.blogspot.com/2026/10/pahaka-chooniyan-sindhi-proverbs-online.html",
},
];

export default function BooksLibraryPage() {
return (
<main
dir="rtl"
style={{
minHeight: "100vh",
padding: "20px 12px",
background: "linear-gradient(180deg, #ecfdf5 0%, #f8fafc 100%)",
color: "#075e45",
}}
>
<div
style={{
maxWidth: "700px",
margin: "0 auto",
background: "#fff",
border: "1px solid #d1fae5",
borderRadius: "20px",
padding: "18px 14px",
boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
}}
>
<h1
style={{
textAlign: "center",
fontSize: "27px",
margin: "8px 0",
}}
>
📚 سنڌي ڪتابن جي لائبريري
</h1>

    <p
      style={{
        textAlign: "center",
        color: "#64748b",
        fontSize: "14px",
        marginBottom: "22px",
      }}
    >
      پنهنجي پسند جو ڪتاب چونڊيو
    </p>

    <div style={{ display: "grid", gap: "12px" }}>
      {books.map((book, index) => (
        <a
          key={book.title}
          href={book.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "15px 12px",
            minHeight: "76px",
            border: "1px solid #bbf7d0",
            borderRadius: "14px",
            background: "#f0fdf4",
            color: "#075e45",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "29px" }}>{book.icon}</span>

          <span style={{ flex: 1 }}>
            <strong
              style={{
                display: "block",
                fontSize: "16px",
              }}
            >
              {index + 1}. {book.title}
            </strong>

            <span
              style={{
                display: "block",
                fontSize: "13px",
                color: "#64748b",
                marginTop: "4px",
              }}
            >
              {book.description}
            </span>
          </span>

          <span style={{ fontSize: "18px" }}>❮</span>
        </a>
      ))}
    </div>
  </div>
</main>

);
}
