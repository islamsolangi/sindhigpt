export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', direction: 'rtl', fontFamily: 'system-ui' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #2563eb, #1e40af)', color: 'white', padding: '16px 20px', position: 'sticky', top: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>سنڌيGPT 📚</h1>
        <a href="/" style={{ background: 'white', color: '#2563eb', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>← واپس چيٽ ڏانهن</a>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px 16px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '50px', marginBottom: '10px' }}>📚</div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: 0 }}>سنڌيGPT بلاگ</h1>
          <p style={{ color: '#64748b', marginTop: '8px', fontSize: '16px' }}>سنڌي ٻولي، ٽيڪنالاجي ۽ مصنوعي ذهانت بابت ڄاڻ</p>
        </div>

        {/* Blog Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Post 1 */}
          <article style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>نئون</span>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '12px 0 10px', color: '#0f172a', lineHeight: '1.4' }}>سنڌيGPT ڇا آهي؟ پهريون سنڌي AI اسسٽنٽ</h2>
            <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '15px' }}>
              سنڌيGPT سنڌي ٻولي جو پهريون جديد AI چيٽ بٽ آهي. اهو Live موسم، ڪرڪيٽ اسڪور، نماز جو وقت، ۽ عام ڄاڻ بابت توهان جي سوالن جا جواب خالص ۽ مٺي سنڌي ٻولي ۾ ڏئي ٿو. اسان جو مقصد سنڌي ٻولي کي ڊجيٽل دنيا ۾ زنده رکڻ آهي.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center', color: '#94a3b8', fontSize: '13px' }}>
              <span>📅 11 آڪٽوبر 2026</span><span>•</span><span>👁️ 1.2k</span>
            </div>
          </article>

          {/* Post 2 */}
          <article style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>رهنمائي</span>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '12px 0 10px', color: '#0f172a', lineHeight: '1.4' }}>سنڌيGPT کي بهتر طريقي سان ڪيئن استعمال ڪجي؟</h2>
            <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '15px' }}>
              توهان سنڌيGPT کان اهڙا سوال پڇي سگهو ٿا: "ڪراچي جي موسم ڪيئن آهي؟"، "اڄ پاڪستان جو ميچ آهي؟"، "اڄ فجر جو وقت ڪهڙو آهي؟". جيترو صاف سنڌي ۾ لکندا، اوترو بهتر جواب ملندو. ڪوشش ڪريو ته سوال ننڍا ۽ واضح هجن.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center', color: '#94a3b8', fontSize: '13px' }}>
              <span>📅 11 آڪٽوبر 2026</span><span>•</span><span>👁️ 890</span>
            </div>
          </article>

          {/* Post 3 */}
          <article style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>مستقبل</span>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '12px 0 10px', color: '#0f172a', lineHeight: '1.4' }}>سنڌي ٻولي ۽ AI جو مستقبل</h2>
            <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '15px' }}>
              مصنوعي ذهانت سنڌي ٻولي جي حفاظت ۾ وڏو ڪردار ادا ڪري سگهي ٿي. اسان جلد ئي سنڌيGPT ۾ آواز ۾ ڳالهائڻ، سنڌي ڪهاڻيون ٺاهڻ، ۽ شاگردن لاءِ سبق سمجهائڻ جهڙا فيچر شامل ڪنداسين. هي صرف شروعات آهي!
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center', color: '#94a3b8', fontSize: '13px' }}>
              <span>📅 11 آڪٽوبر 2026</span><span>•</span><span>👁️ 2.5k</span>
            </div>
          </article>

        </div>

        {/* Footer CTA */}
        <div style={{ marginTop: '40px', background: 'linear-gradient(135deg, #2563eb, #1e40af)', borderRadius: '16px', padding: '28px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ڇا توهان سوال پڇڻ لاءِ تيار آهيو؟</h3>
          <p style={{ opacity: 0.9, marginTop: '8px', fontSize: '14px' }}>هاڻي سنڌي ۾ ڳالهايو پنهنجي AI دوست سان</p>
          <a href="/" style={{ display: 'inline-block', marginTop: '16px', background: 'white', color: '#2563eb', padding: '10px 24px', borderRadius: '24px', textDecoration: 'none', fontWeight: 'bold' }}>چيٽ شروع ڪريو 🚀</a>
        </div>
      </div>
    </div>
  )
}
