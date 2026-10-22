"use client";

import { useState } from "react";

const videos = [
{
title: "شاهه عبداللطيف ڀٽائي",
description: "شاهه لطيف جي زندگي، شاعري ۽ فڪر بابت وڊيوز.",
query: "Shah Abdul Latif Bhittai Sindhi",
},
{
title: "سچل سرمست",
description: "سچل سرمست جي ڪلام ۽ صوفي فڪر بابت وڊيوز.",
query: "Sachal Sarmast Sindhi",
},
{
title: "سنڌي شاعري ۽ ڪلام",
description: "سنڌي شاعري، صوفي ڪلام ۽ ادبي پروگرام.",
query: "Sindhi poetry Sufi kalam",
},
{
title: "سنڌ جي تاريخ ۽ ثقافت",
description: "سنڌ جي تاريخ، تهذيب ۽ ثقافتي ورثي بابت وڊيوز.",
query: "History and culture of Sindh",
},
{
title: "سنڌي ٻولي سکون",
description: "سنڌي پڙهڻ، لکڻ ۽ ٻولي سکڻ لاءِ وڊيوز.",
query: "Learn Sindhi language",
},
{
title: "سنڌي تعليمي وڊيوز",
description: "علم، تعليم ۽ معلوماتي وڊيوز.",
query: "Sindhi educational videos",
},
];

export default function VideosPage() {
const [search, setSearch] = useState("");

const filteredVideos = videos.filter((video) =>
"${video.title} ${video.description}"
.toLowerCase()
.includes(search.toLowerCase())
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
<h1 style={{ margin: "0 0 10px" }}>🎬 سنڌي وڊيوز</h1>
<p style={{ margin: 0, lineHeight: 1.8 }}>
سنڌي ادب، شاعري، تعليم ۽ ثقافت جون وڊيوز
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
    placeholder="وڊيو جو موضوع ڳوليو..."
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
    {filteredVideos.map((video) => (
      <article
        key={video.title}
        style={{
          background: "white",
          padding: "18px",
          borderRadius: "16px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px #00000010",
        }}
      >
        <div style={{ fontSize: "38px" }}>▶️</div>
        <h2 style={{ color: "#075e45", fontSize: "19px" }}>
          {video.title}
        </h2>
        <p style={{ lineHeight: 1.8 }}>{video.description}</p>

        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.query)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#dc2626",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ▶ وڊيوز ڏسو
        </a>
      </article>
    ))}
  </div>

  {filteredVideos.length === 0 && (
    <p style={{ textAlign: "center", padding: "25px" }}>
      هن موضوع سان لاڳاپيل ڪيٽيگري نه ملي.
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
    وڊيوز يوٽيوب تان کلنديون. هر وڊيو جي دستيابي ۽ حقن جو دارومدار ان جي مالڪ تي آهي.
  </p>
</main>

);
}
