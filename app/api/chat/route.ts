export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: true, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const prompt = `Current Pakistan time in Karachi is ${now}. You are SindhiGPT, reply ONLY in Sindhi Arabic script. User question: ${message}`;
    const r = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&nocache=${Date.now()}`);
    const text = await r.text();
    return Response.json({ reply: text });
  } catch {
    return Response.json({ reply: "معاف ڪجو!" });
  }
}
