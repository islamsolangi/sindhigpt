export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) return Response.json({ reply: "سوال لکو!" });

    // صرف وقت Live - باقي سڀ Unlimited AI
    const lower = message.toLowerCase();
    if (lower.includes('وقت') || lower.includes('time') || lower.includes('ٽائيم') || lower.includes('تاريخ')) {
      const now = new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true, weekday:'long', year:'numeric', month:'long', day:'numeric' });
      return Response.json({ reply: `⏰ هاڻي وقت: ${now} (Live)` });
    }

    // Unlimited AI - ڪوبه سوال، ڪابه حد نه
    const response = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai',
        messages: [
          {
            role: 'system',
            content: 'You are SindhiGPT - a helpful AI assistant. Answer in Sindhi language (سنڌي). You can answer ANY question - unlimited knowledge. Be direct, helpful and friendly.'
          },
          { role: 'user', content: message }
        ],
        stream: false
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "معاف ڪجو، ٻيهر ڪوشش ڪريو!";

    return Response.json({ reply });

  } catch (e) {
    return Response.json({ reply: "Error آيو، ٻيهر ڪوشش ڪريو!" });
  }
}
