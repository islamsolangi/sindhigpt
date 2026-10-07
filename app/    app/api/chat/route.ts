export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    let liveData = "";
    try {
      const search = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(message)}&format=json&no_html=1`);
      const s = await search.json();
      liveData = s.AbstractText || s?.RelatedTopics?.[0]?.Text || "";
    } catch(e){}
    const prompt = `You are SindhiGPT. Answer ONLY in SINDHI. Q: "${message}". Live data: "${liveData}". Give live cricket/weather/gold rate if asked.`;
    const aiRes = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai`);
    const finalText = await aiRes.text();
    return Response.json({ reply: finalText });
  } catch {
    return Response.json({ reply: "مسئلو ٿيو!" });
  }
}
