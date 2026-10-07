export const dynamic = 'force-dynamic';

export async function POST() {
  const karachi = new Date().toLocaleString('en-PK', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });
  return Response.json({ reply: `🔴 TEST LIVE: ڪراچي ٽائيم ھاڻي ${karachi} آھي - جيڪڏھن ھي ٽائيم ھر ڀيري بدلي ٿو ته Live ڪم ڪري ٿو!` });
}
