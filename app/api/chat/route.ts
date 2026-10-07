export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lower = message.toLowerCase();

    // 1. وقت / تاريخ / موسم - بلڪل Live
    if (lower.includes('وقت') || lower.includes('ٽائيم') || lower.includes('time') || lower.includes('تاريخ') || lower.includes('موسم')) {
      const now = new Date();
      const karachiTime = now.toLocaleString('en-PK', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      return Response.json({ reply: `⏰ هاڻي ڪراچي جو وقت: ${karachiTime}\n(Asia/Karachi) Live!` });
    }

    // 2. ڪرڪيٽ Live Score - ESPN API (بنا Key جي)
    if (lower.includes('کرکٹ') || lower.includes('کريکٽ') || lower.includes('cricket') || lower.includes('اسڪور') || lower.includes('اسکور') || lower.includes('ميچ') || lower.includes('انڊيا') || lower.includes('انڈیا') || lower.includes('ind') || lower.includes('wi')) {
      try {
        const scoreRes = await fetch('https://site.api.espn.com/apis/site/v2/sports/cricket/scoreboard', { cache: 'no-store' });
        const scoreData = await scoreRes.json();
        const events = scoreData.events || [];

        if (events.length === 0) {
          return Response.json({ reply: "هن وقت ڪو به Live ڪرڪيٽ ميچ ESPN تي نظر نٿو اچي. ڪجهه دير بعد ٻيهر چيڪ ڪريو!" });
        }

        let reply = "🏏 **Live ڪرڪيٽ اسڪور (ESPN):**\n\n";
        events.slice(0, 3).forEach((ev: any) => {
          const comp = ev.competitions[0];
          const status = comp.status.type.shortDetail;
          const teams = comp.competitors.map((c: any) => `${c.team.abbreviation} ${c.score || ''}`).join(' vs ');
          reply += `• ${ev.name}\n  ${teams}\n  Status: ${status}\n\n`;
        });
        return Response.json({ reply });
      } catch (e) {
        return Response.json({ reply: "Live اسڪور وٺڻ ۾ مسئلو ٿيو، مهرباني ڪري ESPNcricinfo تي چيڪ ڪريو!" });
      }
    }

    // 3. باقي عام سوال - Pollinations AI
    const prompt = encodeURIComponent(`You are SindhiGPT, a helpful AI that answers in Sindhi language. User asks: ${message}`);
    const res = await fetch(`https://text.pollinations.ai/${prompt}?model=openai`);
    const text = await res.text();
    return Response.json({ reply: text });

  } catch (e) {
    return Response.json({ reply: "معاف ڪجو، ڪجهه ٽيڪنيڪل مسئلو آهي!" });
  }
}
