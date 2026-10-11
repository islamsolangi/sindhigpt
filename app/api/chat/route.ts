import { NextResponse } from 'next/server'
import { GoogleGenAI } from "@google/genai"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ reply: "GEMINI_API_KEY Vercel ۾ نه ملي" }, { status: 500 })
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
      config: {
        systemInstruction: "You are SindhiGPT. Reply only in Sindhi Arabic script. Never use tables, |, <br>, **. Keep answers short and clean. If you don't know live score, say you don't have live data.",
        temperature: 0.3
      }
    });

    const reply = response.text || "جواب نه مليو";
    return NextResponse.json({ reply })

  } catch (e: any) {
    console.log("Server Error:", e)
    return NextResponse.json({ reply: "سرور ۾ مسئلو: " + e.message }, { status: 500 })
  }
}
