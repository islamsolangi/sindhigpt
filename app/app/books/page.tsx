"use client";

import { useState } from "react";

const books = [
{
title: "شاهه جو رسالو",
author: "شاهه عبداللطيف ڀٽائي",
description: "سنڌ جي عظيم صوفي شاعر جو ڪلام.",
url: "https://archive.org/search?query=Shah+Jo+Risalo",
},
{
title: "سچل سرمست جو ڪلام",
author: "سچل سرمست",
description: "سنڌ جي عظيم صوفي شاعر جي شاعري.",
url: "https://archive.org/search?query=Sachal+Sarmast",
},
{
title: "ساميءَ جا سلوڪ",
author: "سامي",
description: "سنڌي روحاني شاعري ۽ فڪر.",
url: "https://archive.org/search?query=Samay+Sindhi+poetry",
},
{
title: "سنڌي ادب ۽ شاعري",
author: "مختلف ليکڪ",
description: "سنڌي ڪتابن ۽ شاعريءَ جي ڳولا.",
url: "https://archive.org/search?query=Sindhi+literature",
},
{
title: "سنڌ جي تاريخ",
author: "مختلف ليکڪ",
description: "سنڌ جي تاريخ بابت ڪتاب ڳوليو.",
url: "https://archive.org/search?query=History+of+Sindh",
},
{
title: "سنڌي لوڪ ڪهاڻيون",
author: "مختلف ليکڪ",
description: "سنڌي ڪهاڻين ۽ لوڪ ادب جو مجموعو.",
url: "https://archive.org/search?query=Sindhi+folk+tales",
},
];

export default function BooksPage() {
const [search, setSearch] = useState("");

const filteredBooks = books.filter((book) =>
"${book.title} ${book.author}".toLowerCase().includes(search.toLowerCase())
);

return (
<main
style={{
minHeight: "100vh",
padding: "20px 14px",
background: "#f3f4f6",
direction: "rtl",
fontFamily: "sans-serif",
}}
>
<header
style={{
background: "#2563eb",
color: "white",
padding: "24px 16px",
borderRadius: "18px",
textAlign: "center",
}}
>
<h1 style={{ margin: "0 0 10px" }}>📚 سنڌي ڪتاب گهر</h1>
<p style={{ margin: 0, lineHeight: 1.8 }}>
سنڌي ادب، شاعري، تاريخ ۽ ثقافت جي لائبريري
</p>
</header>

  <a
    href="/"
    style={{
      display: "inline-block",
      margin: "18px 0",
      color: "#2563eb",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    → واپس SindhiGPT ڏانهن
  </a>

  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="ڪتاب يا شاعر جو نالو ڳوليو..."
    style={{
      width: "100%",
      padding: "14px",
      border: "1px solid #d1d5db",
      borderRadius: "12px",
      fontSize: "16px",
      marginBottom: "18px",
      textAlign: "right",
    }}
  />

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "14px",
    }}
  >
    {filteredBooks.map((book) => (
      <article
        key={book.title}
        style={{
          background: "white",
          padding: "18px",
          borderRadius: "16px",
          boxShadow: "0 2px 8px #00000010",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ fontSize: "34px" }}>📖</div>
        <h2 style={{ fontSize: "19px", color: "#075e45" }}>
          {book.title}
        </h2>
        <p style={{ color: "#475569" }}>{book.author}</p>
        <p style={{ lineHeight: 1.8 }}>{book.description}</p>
        <a
          href={book.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#075e45",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ڪتاب ڳوليو
        </a>
      </article>
    ))}
  </div>

  {filteredBooks.length === 0 && (
    <p style={{ textAlign: "center", padding: "25px" }}>
      هن نالي سان ڪتاب نه مليو.
    </p>
  )}

  <p
    style={{
      textAlign: "center",
      color: "#64748b",
      marginTop: "30px",
      lineHeight: 1.8,
    }}
  >
    نوٽ: هي لنڪ ڪتابن جي ڳولا کولين ٿا؛ هر ڪتاب مفت پڙهڻ يا ڊائونلوڊ ڪرڻ لاءِ موجود هجي، اهو ضروري ناهي.
  </p>
</main>

);
}
