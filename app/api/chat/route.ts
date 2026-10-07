export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lower = message.toLowerCase();

    if (lower.includes('وقت') || lower.includes('ٽائيم') || lower.includes('time') || lower.includes('تاريخ') || lower.includes('موسم')) {
      const now = new Date();
      const karachiTime = now.toLocaleString('en-PK', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      return Response.json({ reply: `⏰ هاڻي ڪراچي جو وقت: ${karachiTime}\n(Asia/Karachi) Live!` });
    }

    const prompt = encodeURIComponent(`You are SindhiGPT. Answer in Sindhi. User asks: ${message}`);
    const res = await fetch(`https://text.pollinations.ai/${prompt}?model=openai`);
    const text = await res.text();
    return Response.json({ reply: text });

  } catch (e) {
    return Response.json({ reply: "معاف ڪجو، ڪجهه مسئلو آهي!" });
  }
}
