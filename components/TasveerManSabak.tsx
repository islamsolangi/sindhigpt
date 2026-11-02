"use client";
import { useState } from "react";
import { createWorker } from "tesseract.js";

export default function TasveerManSabak() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const worker = await createWorker(["eng","ara","urd"]);
      const ret = await worker.recognize(file);
      setText(ret.data.text);
      await worker.terminate();
    } catch (err) {
      setText("تصوير پڙهڻ ۾ مسئلو ٿيو");
    }
    setLoading(false);
  };

  return (
    <div style={{ border: "2px solid #00A651", borderRadius: "16px", padding: "16px", background: "#f0fdf4", margin: "10px 0" }}>
      <h3 style={{ fontWeight: "bold" }}>📸 تصوير مان سبق ڳوليو</h3>
      <p style={{ fontSize: "14px" }}>ڪتاب جي صفحي جي تصوير ڪڍو</p>
      <input type="file" accept="image/*" onChange={handleImage} style={{ marginTop: "10px" }} />
      {image && <img src={image} style={{ width: "100%", marginTop: "12px", borderRadius: "8px" }} />}
      {loading && <p style={{ color: "green", marginTop: "10px" }}>⏳ پڙهي رهيو آهيان...</p>}
      {text && (
        <div style={{ marginTop: "12px", background: "white", padding: "10px", borderRadius: "8px", whiteSpace: "pre-wrap" }}>
          <p style={{ fontWeight: "bold" }}>مليو متن:</p>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
