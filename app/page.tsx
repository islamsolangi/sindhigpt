"use client";

import { useState, useEffect, useRef } from "react";

type Msg = { role: "user" | "bot"; text: string };

export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "السلام عليڪم! مان SindhiGPT آهيان. Live موسم، ڪرڪيٽ، وقت بابت پڇو!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [imageType, setImageType] = useState("image/jpeg");

  const bottomRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, imageData]);

  function chooseImage(file?: File) {
    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      alert("مهرباني ڪري JPG، PNG يا WebP تصوير چونڊيو.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result !== "string") {
        alert("تصوير پڙهي نه سگهيس. ٻيهر ڪوشش ڪريو.");
        return;
      }

      const commaIndex = result.indexOf(",");
      if (commaIndex === -1) {
        alert("تصوير پڙهڻ ۾ مسئلو ٿيو.");
        return;
      }

      const base64 = result.slice(commaIndex + 1);

      if (base64.length > 4_500_000) {
        alert("تصوير وڏي آهي. مهرباني ڪري ننڍي تصوير يا اسڪرين شاٽ چونڊيو.");
        return;
      }

      setImageData(base64);
      setImageType(file.type);
    };

    reader.onerror = () => alert("تصوير پڙهڻ ۾ مسئلو ٿيو.");

    reader.readAsDataURL(file);
  }

  async function send() {
    if ((!input.trim() && !imageData) || loading) return;

    const userText = input.trim();
    const selectedImage = imageData;
    const selectedType = imageType;

    setMessages((m) => [
      ...m,
      {
        role: "user",
        text: selectedImage
          ? `${userText || "مهرباني ڪري هن تصوير کي ڏسو."}\n\n📷 تصوير موڪلي وئي`
          : userText,
      },
    ]);

    setInput("");
    setImageData(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          image: selectedImage,
          mimeType: selectedType,
        }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: data.reply || "جواب نه مليو!",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "انٽرنيٽ ۾ مسئلو! ٻيهر ڪوشش ڪريو." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        html,body{margin:0!important;padding:0!important;width:100%;overflow-x:hidden;}
        *{box-sizing:border-box;}
        button,input{font-family:inherit;}
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          margin: 0,
          background: "#f3f4f6",
          display: "flex",
          flexDirection: "column",
          direction: "rtl",
        }}
      >
        <header
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px 16px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 20,
            direction: "ltr",
            width: "100%",
            margin: 0,
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "rgba(255,255,255,0.22)",
                border: "none",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                fontSize: "22px",
                color: "white",
                cursor: "pointer",
              }}
            >
              ⋮
            </button>

            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "52px",
                  left: 0,
                  background: "white",
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  minWidth: "180px",
                  overflow: "hidden",
                  zIndex: 50,
                  border: "1px solid #e2e8f0",
                  direction: "rtl",
                }}
              >
                <a
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  style={menuLink}
                >
                  👤 اسان بابت
                </a>
                <a
                  href="/privacy"
                  onClick={() => setMenuOpen(false)}
                  style={menuLink}
                >
                  🔒 پرائيويسي پاليسي
                </a>
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  style={{ ...menuLink, borderBottom: "none" }}
                >
                  📞 رابطو ڪريو
                </a>
              </div>
            )}
          </div>

          <div
            style={{
              flex: 1,
              textAlign: "center",
              direction: "rtl",
              lineHeight: "1.35",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              سنڌي GPT
            </div>
            <div style={{ fontSize: "14px", fontWeight: "600" }}>
              مصنوعي ذهانت
            </div>
            <div style={{ fontSize: "12px", marginTop: "3px" }}>
              پهريون سنڌي چيٽ بوٽ ٽول
            </div>
          </div>

          <a
            href="/blog"
            style={{
              background: "white",
              padding: "8px 18px",
              borderRadius: "22px",
              fontSize: "14px",
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold",
              direction: "rtl",
            }}
          >
            📚 بلاگ
          </a>
        </header>

        <main
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            width: "100%",
            flex: 1,
            background: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              background: "#f9fafb",
              overflowY: "auto",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf:
                    m.role === "user" ? "flex-start" : "flex-end",
                  background: m.role === "user" ? "#2563eb" : "white",
                  color: m.role === "user" ? "white" : "#111",
                  padding: "14px 18px",
                  borderRadius:
                    m.role === "user"
                      ? "20px 20px 20px 4px"
                      : "20px 20px 4px 20px",
                  maxWidth: "85%",
                  lineHeight: "1.8",
                  fontSize: "16px",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  border:
                    m.role === "bot" ? "1px solid #e5e7eb" : "none",
                }}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  alignSelf: "flex-end",
                  background: "white",
                  padding: "12px 18px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  border: "1px solid #e5e7eb",
                }}
              >
                جواب تيار ٿي رهيو آهي...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div
            style={{
              padding: "12px 14px",
              background: "white",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              position: "sticky",
              bottom: 0,
            }}
          >
            {imageData && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "8px",
                  border: "1px solid #dbeafe",
                  borderRadius: "12px",
                  background: "#eff6ff",
                }}
              >
                <img
                  src={`data:${imageType};base64,${imageData}`}
                  alt="چونڊيل تصوير"
                  style={{
                    width: "75px",
                    height: "75px",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
                <span style={{ flex: 1, fontSize: "14px" }}>
                  تصوير موڪلڻ لاءِ تيار آهي
                </span>
                <button
                  onClick={() => setImageData(null)}
                  aria-label="تصوير هٽايو"
                  style={{
                    border: "none",
                    background: "#fee2e2",
                    color: "#b91c1c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    fontSize: "20px",
                  }}
                >
                  ×
                </button>
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                direction: "ltr",
              }}
            >
              <button
                onClick={() => fileRef.current?.click()}
                disabled={loading}
                aria-label="فوٽو يا اسڪرين شاٽ چونڊيو"
                title="فوٽو يا اسڪرين شاٽ چونڊيو"
                style={{
                  background: "#eff6ff",
                  color: "#2563eb",
                  border: "1px solid #bfdbfe",
                  width: "46px",
                  height: "46px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                📎
              </button>

              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  chooseImage(e.target.files?.[0]);
                  e.currentTarget.value = "";
                }}
                style={{ display: "none" }}
              />

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder="هتي لکو..."
                style={{
                  flex: 1,
                  minWidth: 0,
                  border: "1.5px solid #d1d5db",
                  borderRadius: "28px",
                  padding: "13px 16px",
                  fontSize: "16px",
                  outline: "none",
                  textAlign: "right",
                  direction: "rtl",
                }}
              />

              <button
                onClick={send}
                disabled={loading || (!input.trim() && !imageData)}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "13px 16px",
                  borderRadius: "28px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  flexShrink: 0,
                  opacity:
                    loading || (!input.trim() && !imageData) ? 0.6 : 1,
                }}
              >
                موڪليو
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

const menuLink: React.CSSProperties = {
  display: "block",
  padding: "14px 16px",
  color: "#1e293b",
  textDecoration: "none",
  borderBottom: "1px solid #f1f5f9",
};
