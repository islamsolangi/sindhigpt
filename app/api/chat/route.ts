export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const prompt = `You are SindhiGPT. Reply ONLY in Sindhi Arabic script. User question: ${message}`;
    const r = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai`);
    const text = await r.text();
    return Response.json({ reply: text });
  } catch {
    return Response.json({ reply: "معاف ڪجو، ڪو مسئلو ٿيو!" });
  }
}
