"use client";
export default function Page() {
  const pdf = "https://cdn.jsdelivr.net/gh/islamsolangi/sindhigpt@main/app/app/books/chach-nama/fateh-nama-sindh-urf-chach-nama-by-nabi-bakhsh-balacoh-translated-akhtar-rizvi%20(1)_compressed.pdf";
  return (
    <div style={{maxWidth:'720px', margin:'0 auto', padding:'15px', direction:'rtl', fontFamily:'system-ui'}}>
      <h1 style={{color:'#075e45', textAlign:'center', fontSize:'26px'}}>چچ نامو - فتح نامہ سنڌ</h1>
      
      <div style={{background:'#075e45', borderRadius:'15px', padding:'20px', textAlign:'center', marginTop:'20px'}}>
        <p style={{color:'white', fontSize:'20px', margin:'0 0 15px 0'}}>📕 چچ نامو - 21 MB</p>
        <p style={{color:'#fde68a', margin:'0 0 20px 0'}}>محمد علي ڪوفي - 1216ع | مرزا قليچ بيگ ترجمو</p>
        
        <a href={pdf} target="_blank" style={{background:'white', color:'#075e45', padding:'15px 30px', borderRadius:'10px', textDecoration:'none', fontWeight:'bold', fontSize:'18px', display:'block', marginBottom:'15px'}}>
          📖 هتي ڪلڪ ڪري سڌو ڪتاب کوليو
        </a>
        
        <p style={{color:'white', fontSize:'14px', margin:'0'}}>ٻئي ٽيب ۾ کلندو - بغير ڪنهن باڪس جي - صاف پڙهڻ</p>
      </div>

      <div style={{marginTop:'25px', border:'2px solid #075e45', borderRadius:'12px', overflow:'hidden'}}>
        <div style={{background:'#f0fdf4', padding:'10px', textAlign:'center', fontWeight:'bold', color:'#075e45'}}>
          يا هتي هيٺ پريويو ڏسو:
        </div>
        <object data={pdf} type="application/pdf" width="100%" height="800px" style={{border:'none'}}>
          <p style={{padding:'20px', textAlign:'center'}}>موبائل تي پريويو سپورٽ نه ٿو ڪري - مٿي واري بٽڻ تي ڪلڪ ڪريو - سڌو کلي ويندو!</p>
        </object>
      </div>

      <div style={{background:'#fffbeb', padding:'15px', borderRadius:'10px', marginTop:'20px', border:'1px solid gold'}}>
        <p>✅ هن لنڪ تي ڪتاب لائيو آهي:</p>
        <p style={{wordBreak:'break-all', color:'#075e45', fontWeight:'bold'}}>sindhigpt.vercel.app/app/books/chach-nama</p>
      </div>
    </div>
  );
}
