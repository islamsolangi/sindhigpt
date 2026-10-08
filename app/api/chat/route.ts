export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) return Response.json({ reply: "مهرباني ڪري سوال لکو!" });
    const lower = message.toLowerCase();

    // 1. وقت / تاريخ - Live
    if (lower.includes('وقت') || lower.includes('ٽائيم') || lower.includes('time') || lower.includes('تاريخ') || lower.includes('ڪيترو')) {
      const karachiTime = new Date().toLocaleString('en-PK', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      return Response.json({ reply: `⏰ هاڻي ڪراچي جو وقت: ${karachiTime}\nLive - Asia/Karachi` });
    }

    // 2. وزير اعلي - سڌو جواب، جيئن توهان پڇيو
    if (lower.includes('وزير اعلي') || lower.includes('وزيراعلي') || lower.includes('سنڌ جو وزير') || lower.includes('wazir e aala')) {
      return Response.json({ reply: "سنڌ جو موجوده وزير اعليٰ سيد مراد علي شاه آهي. هو 2024 کان وٺي هن عهدي تي آهي." });
    }

    // 3. ڪرڪيٽ
    if (lower.includes('کرکٹ') || lower.includes('کريکٽ') || lower.includes('cricket') || lower.includes('اسڪور') || lower.includes('ميچ')) {
      try {
        const r = await fetch('https://site.api.espn.com/apis/site/v2/sports/cricket/scoreboard', { cache: 'no-store' });
        const d = await r.json();
        if (!d.events?.length) return Response.json({ reply: "هن وقت ڪو Live ميچ ناهي!" });
        let reply = "🏏 Live ڪرڪيٽ:\n\n";
        d.events.slice(0,2).forEach((ev:any)=>{
          reply += `• ${ev.name} - ${ev.competitions[0].status.type.shortDetail}\n`;
        });
        return Response.json({ reply });
      } catch { return Response.json({ reply: "اسڪور ۾ مسئلو!" }); }
    }

    // 4. نئون Pollinations - POST طريقو - پراڻو GET نه
    try {
      const aiRes = await fetch('https://text.pollinations.ai/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: "user", content: `You are SindhiGPT. Answer ONLY in Sindhi language (سنڌي). Keep short. User: ${message}` }],
          model: 'openai',
          stream: false
        })
      });
      const data = await aiRes.json();
      let ans = data.choices?.[0]?.message?.content || "";
      // جيڪڏهن خالي يا {} اچي ته Fallback تي وڃو
      if (ans && ans.trim() !== "{}" && ans.length > 3 && !ans.includes('ENOSPC')) {
        return Response.json({ reply: ans });
      }
    } catch {}

    // 5. Fallback - ڪڏهن به {} نه ڏيکاريندو
    return Response.json({ reply: `توهان پڇيو: "${message}"\n\nمان SindhiGPT آهيان! هن وقت AI ٿورو مصروف آهي، پر مان توهان جي مدد لاءِ حاضر آهيان. وقت، ڪرڪيٽ، يا سنڌ بابت پڇو!` });

  } catch {
    return Response.json({ reply: "ٽيڪنيڪل مسئلو، ٻيهر ڪوشش ڪريو!" });
  }
}
