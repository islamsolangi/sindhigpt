export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // 1. Live Karachi Time
    const karachiTime = new Date().toLocaleString('sd-PK', {
      timeZone: 'Asia/Karachi',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    const lower = message.toLowerCase();
    if (lower.includes('وقت') || lower.includes('وڳي') || lower.includes('time') || lower.includes('ٽائيم')) {
      return Response.json({ reply: `هن وقت پاڪستان ۾ لائيو ٽائيم آهي:\n\n**${karachiTime}**\n\n(PKT - Asia/Karachi) - هي Live سرور ٽائيم آهي.` });
    }

    // 2. Live Internet Search
    let liveInfo = "";
    try {
      const searchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(message)}&format=json&no_html=1&skip_disambig=1`;
      const searchRes = await fetch(searchUrl);
      const searchData = await searchRes.json();
      if (searchData.AbstractText) {
        liveInfo = `Live Internet Result: ${searchData.AbstractText}`;
      } else if (searchData.RelatedTopics && searchData.RelatedTopics[0]) {
        liveInfo = `Live Internet Result: ${searchData.RelatedTopics[0].Text || ''}`;
      }
    } catch (e) {
      liveInfo = "";
    }

    // 3. AI Prompt with Live Data
    const nowForAI = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' });
    const prompt = `
    Current LIVE time in Karachi Pakistan is: ${karachiTime} / ${nowForAI}
    ${liveInfo ? `Current LIVE internet search info about user query is: ${liveInfo}` : ''}
    
    You are SindhiGPT. You must reply ONLY in Sindhi Arabic script.
    Use the LIVE time and LIVE internet info above to answer.
    If user asks about news, gold price, weather, etc, use the LIVE info.
    User question: ${message}
    `;

    const r = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&nocache=${Date.now()}`);
    const text = await r.text();
    return Response.json({ reply: text });

  } catch (err) {
    return Response.json({ reply: "معاف ڪجو، Live ڪنيڪشن ۾ مسئلو ٿيو، وري ڪوشش ڪريو!" });
  }
}
