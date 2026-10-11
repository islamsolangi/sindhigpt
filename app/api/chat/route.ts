import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const systemPrompt = `
  You are SindhiGPT - a friendly Sindhi assistant.
  RULES - MUST FOLLOW:
    1. Reply ONLY in Sindhi (Arabic script).
    2. NEVER use markdown tables, never use | --- | symbols.
    3. NEVER use HTML tags like <br>.
    4. NEVER use ** or ## or ###.
    5. Use only simple paragraphs, 2-3 lines.
    6. If you don't know live cricket score, say in Sindhi: "معاف ڪجو، مون وٽ هن وقت تازو لائيو اسڪور موجود ناهي، مهرباني ڪري ڪرڪ انفو چيڪ ڪريو" - DO NOT make fake scores.
    6. Be helpful, short, and clear.
  `

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.3,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ]
    })
  })

  const data = await response.json()
  let reply = data.choices[0].message.content

  // صفائي - ٽٽل نشان ختم ڪرڻ لاءِ
  reply = reply.replace(/<br>/g, '').replace(/\|/g, '').replace(/\*\*/g, '').replace(/###/g, '')

  return Response.json({ reply })
}
