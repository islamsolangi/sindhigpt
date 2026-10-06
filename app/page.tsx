"use client";
import { useState, useRef, useEffect } from "react";
export default function Page(){
  const [msgs,setMsgs]=useState([{role:"bot",text:"السلام عليڪم! مان سنڌي GPT آهيان - سنڌي جو پهريون AI دوست! 🙏"}]);
  const [input,setInput]=useState(""); const [loading,setLoading]=useState(false);
  const ref=useRef(null);
  useEffect(()=>{ref.current?.scrollTo(0,ref.current.scrollHeight)},[msgs,loading]);
  async function send(){
    if(!input.trim()||loading) return; const q=input.trim(); setMsgs(m=>[...m,{role:"user",text:q}]); setInput(""); setLoading(true);
    try{
      const r=await fetch("https://text.pollinations.ai/"+encodeURIComponent("You must reply ONLY in Sindhi Arabic script. User: "+q)+"?model=openai");
      let t=await r.text(); if(!t||t.length<2) throw Error(); setMsgs(m=>[...m,{role:"bot",text:t.trim()}]);
    }catch{ setMsgs(m=>[...m,{role:"bot",text:"معاف ڪجو سرور مصروف آهي. سچن تندولڪر 100 سينچرين سان ڪرڪيٽ جو ڀڳوان آهي! 🏏"}]);}
    setLoading(false);
  }
  return(
    <main style={{maxWidth:800,margin:"0 auto",padding:16,fontFamily:"system-ui"}}>
      <h1 style={{textAlign:"center",fontSize:26}}>SindhiGPT - سنڌي GPT 🤖</h1>
      <div ref={ref} style={{border:"1px solid #ddd",borderRadius:12,height:"62vh",overflowY:"auto",padding:12,background:"#fafafa",marginTop:12}}>
        {msgs.map((m,i)=><div key={i} style={{textAlign:m.role==="user"?"right":"left",margin:"8px 0"}}><span style={{background:m.role==="user"?"#0070f3":"#fff",color:m.role==="user"?"#fff":"#111",padding:"10px 14px",borderRadius:14,display:"inline-block",maxWidth:"85%",border:"1px solid #eee"}}>{m.text}</span></div>)}
        {loading&&<div style={{fontSize:13,color:"#888"}}>لکي رهيو آهيان...</div>}
      </div>
      <div style={{display:"flex",gap:8,marginTop:12}}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="سنڌي ۾ لکو..." style={{flex:1,padding:13,borderRadius:10,border:"1px solid #ccc"}}/>
        <button onClick={send} style={{padding:"13px 18px",background:"#0070f3",color:"#fff",border:"none",borderRadius:10}}>موڪليو</button>
      </div>
    </main>
  );
}
