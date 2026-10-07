export async function POST(req: Request) {
  const { message } = await req.json();
  const r = await fetch(`https://text.pollinations.ai/${encodeURIComponent("Reply only in Sindhi Arabic: "+message)}`);
  const t = await r.text();
  return Response.json({ reply: t });
}
