"use client";
export default function Page() {
  return (
    <div style={{maxWidth:'720px', margin:'0 auto', padding:'20px', direction:'rtl', fontFamily:'system-ui'}}>
      <h1 style={{color:'#075e45', textAlign:'center', fontSize:'28px'}}>چچ نامو - فتح نامہ سنڌ</h1>
      
      <div style={{background:'#f0fdf4', padding:'15px', borderRadius:'10px', marginTop:'15px', border:'1px solid #075e45'}}>
        <p>📖 ليکڪ: محمد علي ڪوفي - 1216ع</p>
        <p>✍️ سنڌي ترجمو: مرزا قليچ بيگ</p>
        <p>📄 موضوع: راجا چچ، ڏاهر ۽ محمد بن قاسم جي تاريخ</p>
      </div>

      {/* ڪتاب هتي سڌو کلندو - بغير ڊائونلوڊ بٽڻ جي */}
      <div style={{marginTop:'25px', border:'3px solid #075e45', borderRadius:'12px', overflow:'hidden', background:'white'}}>
        <div style={{background:'#075e45', color:'white', padding:'12px', textAlign:'center', fontWeight:'bold', fontSize:'18px'}}>
          📕 چچ نامو - سڌو هتي پڙهو - بغير ڊائونلوڊ جي
        </div>
        <iframe 
          src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/islamsolangi/sindhigpt/main/app/app/books/chach-nama/chach-nama.pdf&embedded=true" 
          width="100%" 
          height="1100px" 
          style={{border:'none'}}
          title="Chach Nama"
        ></iframe>
      </div>

      <p style={{textAlign:'center', marginTop:'15px'}}>
        <a href="https://islamsolangi786.blogspot.com/2026/10/chach-nama-sindh-ji-qadeem-tareekh.html" target="_blank" style={{color:'#075e45', fontWeight:'bold'}}>اسان جي بلاگ تي به پڙهو</a>
      </p>
    </div>
  );
}
