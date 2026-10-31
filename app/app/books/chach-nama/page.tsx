"use client";
export default function Page() {
  const fileId = "1PzeHDTbHhGhK3VCfOzqwq7cT9eVcqbJR";
  return (
    <div style={{maxWidth:'720px', margin:'0 auto', padding:'15px', direction:'rtl', fontFamily:'system-ui'}}>
      <h1 style={{color:'#075e45', textAlign:'center', fontSize:'28px'}}>چچ نامو - فتح نامہ سنڌ</h1>
      <p style={{textAlign:'center', color:'#666'}}>محمد علي ڪوفي 1216ع - مرزا قليچ بيگ ترجمو</p>
      
      <div style={{background:'#075e45', borderRadius:'15px', padding:'25px', textAlign:'center', marginTop:'20px'}}>
        <p style={{color:'#fde68a', fontSize:'18px', margin:'0 0 15px 0'}}>📕 اصل ڪتاب - 22 MB - اسڪين ڪاپي</p>
        <a href={`https://drive.google.com/file/d/${fileId}/view`} target="_blank" style={{background:'white', color:'#075e45', padding:'15px 30px', borderRadius:'10px', textDecoration:'none', fontWeight:'bold', fontSize:'18px', display:'block'}}>
          📖 گوگل ڊرائيو تي کوليو
        </a>
      </div>

      <div style={{marginTop:'25px', borderRadius:'12px', overflow:'hidden', border:'3px solid #075e45'}}>
        <div style={{background:'#f0fdf4', padding:'12px', textAlign:'center', fontWeight:'bold', color:'#075e45'}}>
          👇 هتي پڙهو - اسڪرول ڪريو
        </div>
        <iframe src={`https://drive.google.com/file/d/${fileId}/preview`} width="100%" height="1000px" style={{border:'none'}} allow="autoplay"></iframe>
      </div>

      <p style={{textAlign:'center', marginTop:'20px', color:'#075e45', fontWeight:'bold'}}>
        sindhigpt.vercel.app - سنڌ جو پهريون AI
      </p>
    </div>
  );
}
