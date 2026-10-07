export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { reply: "مهرباني ڪري سوال لکو." },
        { status: 400 }
      );
    }

    // پاڪستان جو موجوده وقت
    const karachiTime = new Date().toLocaleString("sd-PK", {
      timeZone: "Asia/Karachi",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const apiKey = process.env.POLLINATIONS_API_KEY;

    if (!apiKey) {
      return Response.json({
        reply:
          "معاف ڪجو، AI API Key سيٽ ناهي. مهرباني ڪري Vercel ۾ POLLINATIONS_API_KEY شامل ڪريو.",
      });
    }

    const systemPrompt = `
تون سنڌي GPT آهين.

هميشه سنڌي عربي رسم الخط ۾ جواب ڏي.

اهم هدايت:
- جيڪڏهن سوال تازين خبرن، ڪرڪيٽ، راندين، موسم، سون جي اگهه، موجوده واقعن، سياست يا ڪنهن به تازي معلومات بابت هجي ته ويب سرچ ذريعي موجوده معلومات ڳول.
- پراڻي يا اندازي واري معلومات کي Live معلومات طور پيش نه ڪر.
- جيڪڏهن ويب سرچ مان معلومات نه ملي ته صاف ٻڌاءِ ته تازو نتيجو حاصل نه ٿي سگهيو.
- موجوده پاڪستاني وقت لاءِ هي وقت استعمال ڪر:
${karachiTime}

مختصر، صحيح ۽ صاف سنڌي ۾ جواب ڏي.
`;

    const response = await fetch(
      "https://gen.pollinations.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "perplexity/sonar",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Pollinations Error:", errorText);

      return Response.json({
        reply:
          "معاف ڪجو، Live AI سروس هن وقت جواب نٿي ڏئي. ٿوري دير کان پوءِ ٻيهر ڪوشش ڪريو.",
      });
    }

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      "معاف ڪجو، مون کي هن سوال جو جواب حاصل نه ٿي سگهيو.";

    return Response.json({
      reply,
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return Response.json({
      reply:
        "معاف ڪجو، Live ڪنيڪشن ۾ مسئلو ٿيو. مهرباني ڪري ٻيهر ڪوشش ڪريو.",
    });
  }
}
