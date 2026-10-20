import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { message, image, mimeType } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: "GEMINI_API_KEY موجود ناهي." },
        { status: 500 }
      );
    }

    if (!message?.trim() && !image) {
      return NextResponse.json(
        { reply: "مهرباني ڪري سوال يا تصوير موڪليو." },
        { status: 400 }
      );
    }

    if (image) {
      if (
        typeof image !== "string" ||
        !["image/jpeg", "image/png", "image/webp"].includes(mimeType)
      ) {
        return NextResponse.json(
          { reply: "مهرباني ڪري JPG، PNG يا WebP تصوير موڪليو." },
          { status: 400 }
        );
      }

      if (image.length > 5_000_000) {
        return NextResponse.json(
          { reply: "تصوير وڏي آهي. مهرباني ڪري ننڍي تصوير موڪليو." },
          { status: 413 }
        );
      }
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const contents: any[] = [];

    if (image) {
      contents.push({
        inlineData: {
          mimeType,
          data: image,
        },
      });
    }

    contents.push({
      text: message?.trim()
        ? message.trim()
        : "هن تصوير کي غور سان ڏسي سنڌيءَ ۾ ان جي وضاحت ڪر.",
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction:
          "You are SindhiGPT. Reply only in Sindhi Arabic script. Give clear, helpful answers about uploaded images. If text is visible in an image, help read it. Never use tables, |, <br>, or **. If you cannot identify something, say so honestly.",
        temperature: 0.3,
      },
    });

    return NextResponse.json({
      reply: response.text || "جواب نه مليو.",
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        reply:
          "جواب حاصل ڪرڻ ۾ مسئلو ٿيو. مهرباني ڪري ٻيهر ڪوشش ڪريو.",
      },
      { status: 500 }
    );
  }
}
