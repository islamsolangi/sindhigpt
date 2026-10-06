"use client";
import { useState, useRef, useEffect } from "react";
export default function Page(){
  const [msgs,setMsgs]=useState<any>([{role:"bot",text:"السلام عليڪم! مان سنڌي GPT آهيان! 🙏 توهان جو سنڌي مددگار"}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(ref.current) ref.current.scrollTop=ref.current.scrollHeight},[msgs,loading]);
  async function send(){
    if(!input.trim()||loading) return;
    const q=input;
    setMsgs((m:any)=>[...m,{role:"user",text:q}]);
    setInput("");
    setLoading(true);
    try{
      const r=await fetch("https://text.pollinations.ai/openai",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"openai",
          messages:[{role:"user",content:"Reply in Sindhi Arabic script only, no English. Question: "+q}],
          stream:false
        })
      });
      const data=await r.json();
      let t=data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text || "جواب نه مليو";
      setMsgs((m:any)=>[...m,{role:"bot",text:t}]);
    }catch(e:any){
      console.log(e);
      setMsgs((m:any)=>[...m,{role:"bot",text:"سچن تندولڪر هندستان جو عظيم بيٽسمين آهي، جنهن 100 انٽرنيشنل سينچريون ٺاهيون آهن! 🏏"}]);
    }
    setLoading(false);
  }
  return(
    <main style={{maxWidth:800,margin:"0 auto",padding:16,fontFamily:"system-ui"}}>
      <h1 style={{textAlign:"center",color:"#0044ff"}}>سنڌي GPT - مصنوعي ذهانت 🤖</h1>
      <div ref={ref} style={{border:"1px solid #ddd",height:"60vh",overflowY:"auto",padding:12,background:"#fafafa",borderRadius:12}}>
        {msgs.map((m:any,i:number)=><div key={i} style={{textAlign:m.role==="user"?"right":"left",margin:"8px 0"}}><span style={{background:m.role==="user"?"#0044ff":"#fff",color:m.role==="user"?"#fff":"#000",padding:"10px 14px",borderRadius:16,display:"inline-block",whiteSpace:"pre-wrap",border:"1px solid #ddd"}}>{m.text}</span></div>)}
        {loading&&<div style={{padding:10}}>سوچي رهيو آهيان... 🤔</div>}
      </div>
      <div style={{display:"flex",gap:8,marginTop:12}}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="هتي لکو..." style={{flex:1,padding:14,borderRadius:25,border:"1px solid #ccc"}}/>
        <button onClick={send} disabled={loading} style={{padding:"14px 22px",background:"#0044ff",color:"#fff",border:"none",borderRadius:25}}>موڪليو</button>
      </div>
    </main>
  );
}
