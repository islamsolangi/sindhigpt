"use client";
export default function Page() {
  const pdf = "https://raw.githubusercontent.com/islamsolangi/sindhigpt/main/app/app/books/chach-nama/fateh-nama-sindh-urf-chach-nama-by-nabi-bakhsh-balacoh-translated-akhtar-rizvi%20(1)_compressed.pdf";
  return (
    <div style={{maxWidth:'720px', margin:'0 auto', padding:'20px', direction:'rtl'}}>
      <h1 style={{color:'#075e45', textAlign:'center'}}>چچ نامو - فتح نامہ سنڌ</h1>
      <div style={{border:'3px solid #075e45', borderRadius:'12px', overflow:'hidden', marginTop:'15px'}}>
        <div style={{background:'#075e45', color:'white', padding:'12px', textAlign:'center', fontWeight:'bold'}}>📕 چچ نامو - هتي پڙهو - 21 MB</div>
        <iframe src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdf)}`} width="100%" height="1200px" style={{border:'none'}}></iframe>
        <div style={{padding:'15px', textAlign:'center', background:'#f0fdf4'}}>
          <a href={pdf} target="_blank" style={{background:'#075e45', color:'white', padding:'10px 20px', borderRadius:'8px', textDecoration:'none'}}>📥 ڊائونلوڊ ڪريو</a>
        </div>
      </div>
    </div>
  );
}
