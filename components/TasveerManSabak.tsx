"use client";
import { useState, useRef } from "react";

export default function TasveerManSabak() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    // هتي توهان جو پراڻو upload وارو ڪوڊ هلي ويندو
    // تصوير پڙهڻ لاءِ
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/image-to-text", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("سبق مليو: " + (data.text || "تصوير پڙهي وئي"));
    } catch (err) {
      alert("تصوير موڪلڻ ۾ مسئلو ٿيو");
    }
    setLoading(false);
  };

  return (
    <>
      <input
        type="file"
        ref={fileRef}
        onChange={handleFile}
        accept="image/*"
        style={{ display: "none" }}
      />
      <button
        onClick={() => fileRef.current?.click()}
        style={{
          background: "white",
          border: "1px solid #dbeafe",
          borderRadius: "9999px",
          padding: "6px 14px",
          fontSize: "14px",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          margin: "8px 10px",
        }}
      >
        {loading ? "پڙهي رهيو آهيان..." : "📸 تصوير مان سبق"}
      </button>
    </>
  );
}
