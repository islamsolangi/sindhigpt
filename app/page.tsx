"use client";
import { useState, useRef, useEffect } from "react";

export default function Page() {
  const [msgs, setMsgs] = useState([{ role: "bot", text: "السلام عليڪم! مان Live SindhiGPT آهيان. هاڻي Live موسم، ڪرڪيٽ، سون جو اگه ٻڌائيندس! 🏏" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  useEffect(()=>{bottom.current?.scrollIntoView({behavior:"smooth"})},[msgs, loading]);

  async function send(){
    if(!input.trim() || loading) return;
    const q = input; setInput(""); 
    setMsgs(m=>[...m, {role:"user", text:q}]); 
    setLoading(true);
    try{
      const res = await fetch("/api/chat",{
        method:"POST", 
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify({message:q})
      });
      const data = await res.json();
      setMsgs(m=>[...m, {role:"bot", text:data.reply}]);
    }catch{ 
      setMsgs(m=>[...m, {role:"bot", text:"نيٽ سلو آهي!"}]); 
    }
    setLoading(false);
  }

  return (
    <main style={{maxWidth:800, margin:"0 auto", padding:16}}>
      <h2 style={{textAlign:"center"}}>سنڌي GPT - Live ✅</h2>
      <div style={{border:"1px solid #ccc", height:"65vh", overflowY:"auto", padding:10, borderRadius:12, background:"#fff"}}>
        {msgs.map((m,i)=><div key={i} style={{textAlign:m.role=="user"?"right":"left", margin:"8px 0"}}><span style={{display:"inline-block", padding:"10px 14px", borderRadius:12, background:m.role=="user"?"#2563eb":"#f1f1f1", color:m.role=="user"?"#fff":"#000", whiteSpace:"pre-wrap"}}>{m.text}</span></div>)}
        {loading && <div style={{padding:10}}>🔍 Live ڳولي رهيو آهيان...</div>}
        <div ref={bottom}/>
      </div>
      <div style={{display:"flex", gap:8, marginTop:12}}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key=="Enter"&&send()} placeholder="سوال لکو..." style={{flex:1, padding:12, borderRadius:10, border:"1px solid #ccc"}} />
        <button onClick={send} disabled={loading} style={{padding:"12px 18px", borderRadius:10, background:"#2563eb", color:"#fff", border:"none"}}>موڪليو</button>
      </div>
    </main>
  );
}
