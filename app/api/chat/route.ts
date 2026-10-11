import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ reply: "API Key جو مسئلو آهي" }, { status: 500 })
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are SindhiGPT. Reply only in Sindhi Arabic script. Never use tables, |, <br>, **. Keep answers short and clean. If you don't know live score, say you don't have live data." },
          { role: "user", content: message }
        ],
        temperature: 0.3
      })
    })

    const data = await res.json()

    if (!data.choices) {
      console.log("OpenAI Error:", data)
      return NextResponse.json({ reply: "اوپن اي آءِ ۾ مسئلو: " + (data.error?.message || "نامعلوم") })
    }

    let reply = data.choices[0].message.content
    reply = reply.replace(/<br>/g, "").replace(/\|/g, " ")

    return NextResponse.json({ reply })

  } catch (e: any) {
    console.log("Server Error:", e)
    return NextResponse.json({ reply: "سرور ۾ مسئلو: " + e.message }, { status: 500 })
  }
}
