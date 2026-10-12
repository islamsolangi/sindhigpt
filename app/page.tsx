"use client";
import { useState, useEffect, useRef } from "react";
type Msg = { role: "user" | "bot"; text: string };
export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: "السلام عليڪم! مان SindhiGPT آهيان. Live موسم، ڪرڪيٽ، وقت بابت پڇو!" }]);
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
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: userText }) });
      const data = await res.json();
      setMessages(m => [...m, { role: "bot", text: data.reply || "جواب نه مليو!" }]);
    } catch { setMessages(m => [...m, { role: "bot", text: "انٽرنيٽ ۾ مسئلو!" }]); }
    setLoading(false);
  }
  return (
    <>
      <style>{`html,body{margin:0!important;padding:0!important;width:100%;overflow-x:hidden;} *{box-sizing:border-box;}`}</style>
      <div style={{ minHeight: "100vh", width: "100vw", margin: 0, background: "#f3f4f6", display: "flex", flexDirection: "column", direction: "rtl" }}>
        {/* نيري ايريا وڌايل - اڇي ڪنڊ ختم */}
        <header style={{ background: "#2563eb", color: "white", padding: "20px 16px 22px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 20, direction: "ltr", width: "100vw", margin: 0, boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}>
          <div style={{ position: "relative" }}>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "rgba(255,255,255,0.22)", border: "none", width: "44px", height: "44px", borderRadius: "50%", fontSize: "22px", color: "white", cursor: "pointer" }}>⋮</button>
            {menuOpen && (
              <div style={{ position: "absolute", top: "52px", left: 0, background: "white", borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", minWidth: "180px", overflow: "hidden", zIndex: 50, border: "1px solid #e2e8f0", direction: "rtl" }}>
                <a href="/about" onClick={()=>setMenuOpen(false)} style={{ display: "block", padding: "14px 16px", color: "#1e293b", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>👤 اسان بابت</a>
                <a href="/privacy" onClick={()=>setMenuOpen(false)} style={{ display: "block", padding: "14px 16px", color: "#1e293b", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>🔒 پرائيويسي پاليسي</a>
                <a href="/contact" onClick={()=>setMenuOpen(false)} style={{ display: "block", padding: "14px 16px", color: "#1e293b", textDecoration: "none" }}>📞 رابطو ڪريو</a>
              </div>
            )}
          </div>
          <div style={{ flex: 1, textAlign: "center", direction: "rtl", lineHeight: "1.35" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>سنڌي GPT</div>
            <div style={{ fontSize: "14px", fontWeight: "600", opacity: 0.96 }}>مصنوعي ذهانت</div>
            <div style={{ fontSize: "12px", opacity: 0.88, marginTop: "3px" }}>پهريون سنڌي چيٽ بوٽ ٽول</div>
          </div>
          <a href="/blog" style={{ background: "white", padding: "8px 18px", borderRadius: "22px", fontSize: "14px", color: "#2563eb", textDecoration: "none", fontWeight: "bold", direction: "rtl", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>📚 بلاگ</a>
        </header>

        <main style={{ maxWidth: "700px", margin: "0 auto", width: "100%", flex: 1, background: "white", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: "16px", background: "#f9fafb", overflowY: "auto" }}>
            {messages.map((m, i) => (<div key={i} style={{ alignSelf: m.role === "user"? "flex-start" : "flex-end", background: m.role === "user"? "#2563eb" : "white", color: m.role === "user"? "white" : "#111", padding: "14px 18px", borderRadius: m.role === "user"? "20px 20px 20px 4px" : "20px 20px 4px 20px", maxWidth: "85%", lineHeight: "1.8", fontSize: "16px", whiteSpace: "pre-wrap", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: m.role === "bot"? "1px solid #e5e7eb" : "none" }}>{m.text}</div>))}
            {loading && <div style={{ alignSelf: "flex-end", background: "white", padding: "12px 18px", borderRadius: "20px", fontSize: "14px", border: "1px solid #e5e7eb" }}>لکي رهيو آهي...</div>}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: "12px 14px", background: "white", borderTop: "1px solid #e5e7eb", display: "flex", gap: "10px", position: "sticky", bottom: 0 }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="هتي لکو..." style={{ flex: 1, border: "1.5px solid #d1d5db", borderRadius: "28px", padding: "13px 20px", fontSize: "16px", outline: "none", textAlign: "right" }} />
            <button onClick={send} disabled={loading} style={{ background: "#2563eb", color: "white", border: "none", padding: "13px 24px", borderRadius: "28px", fontSize: "15px", fontWeight: "bold", cursor: "pointer" }}>موڪليو</button>
          </div>
        </main>
      </div>
    </>
  );
}
