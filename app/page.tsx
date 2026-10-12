"use client";
import { useState, useEffect, useRef } from "react";

type Msg = { role: "user" | "bot"; text: string };

export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "السلام عليڪم! مان SindhiGPT آهيان. Live موسم، ڪرڪيٽ، وقت بابت پڇو!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setMessages(m => [...m, { role: "user", text: userText }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "bot", text: data.reply || "جواب نه مليو!" }]);
    } catch {
      setMessages(m => [...m, { role: "bot", text: "انٽرنيٽ ۾ مسئلو، ٻيهر ڪوشش ڪريو!" }]);
    }
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: "700px", margin: "0 auto", minHeight: "100vh", background: "white", display: "flex", flexDirection: "column", direction: "rtl" }}>
      <header style={{ background: "#2563eb", color: "white", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a href="/blog" style={{ background: "rgba(255,255,255,0.25)", padding: "6px 14px", borderRadius: "20px", fontSize: "14px", color: "white", textDecoration: "none", fontWeight: "bold" }}>📚 بلاگ</a>
          <div style={{ position: "relative" }}>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "rgba(255,255,255,0.25)", border: "none", width: "36px", height: "36px", borderRadius: "50%", fontSize: "20px", color: "white", cursor: "pointer" }}>⋮</button>
            {menuOpen && (
              <div style={{ position: "absolute", top: "45px", left: 0, background: "white", borderRadius: "12px", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", minWidth: "170px", overflow: "hidden", zIndex: 50, border: "1px solid #e2e8f0" }}>
                <a href="/about" onClick={()=>setMenuOpen(false)} style={{ display: "block", padding: "13px 16px", color: "#1e293b", textDecoration: "none", borderBottom: "1px solid #f1f5f9", fontSize: "15px" }}>👤 اسان بابت</a>
                <a href="/privacy" onClick={()=>setMenuOpen(false)} style={{ display: "block", padding: "13px 16px", color: "#1e293b", textDecoration: "none", borderBottom: "1px solid #f1f5f9", fontSize: "15px" }}>🔒 پرائيويسي</a>
                <a href="/contact" onClick={()=>setMenuOpen(false)} style={{ display: "block", padding: "13px 16px", color: "#1e293b", textDecoration: "none", fontSize: "15px" }}>📞 رابطو</a>
              </div>
            )}
          </div>
        </div>
        <h1 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>سنڌي GPT - مصنوعي ذهانت</h1>
      </header>

      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: "16px", background: "#f9fafb", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: m.role === "user"? "flex-start" : "flex-end", background: m.role === "user"? "#2563eb" : "#e5e7eb", color: m.role === "user"? "white" : "black", padding: "14px 18px", borderRadius: m.role === "user"? "20px 20px 20px 4px" : "20px 20px 4px 20px", maxWidth: "85%", lineHeight: "1.8", fontSize: "16px", whiteSpace: "pre-wrap" }}>{m.text}</div>
        ))}
        {loading && <div style={{ alignSelf: "flex-end", background: "#e5e7eb", padding: "12px 18px", borderRadius: "20px", fontSize: "14px" }}>لکي رهيو آهي...</div>}
        <div ref={bottomRef} />
      </div>

      <div style={{ padding: "12px 16px", background: "white", borderTop: "1px solid #e5e7eb", display: "flex", gap: "10px", position: "sticky", bottom: 0 }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="هتي لکو..." style={{ flex: 1, border: "1.5px solid #d1d5db", borderRadius: "24px", padding: "12px 18px", fontSize: "16px", outline: "none", textAlign: "right" }} />
        <button onClick={send} disabled={loading} style={{ background: "#2563eb", color: "white", border: "none", padding: "12px 22px", borderRadius: "24px", fontSize: "15px", fontWeight: "bold", cursor: "pointer" }}>موڪليو</button>
      </div>
    </main>
  );
}
