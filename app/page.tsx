      {/* Header - ڪتاب وارو بلاگ + 3 ڊاٽ ٻئي نيري پٽي ۾ */}
      <header style={{ background: "#2563eb", color: "white", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 20 }}>
        {/* ساڄي پاسي سنڌي GPT */}
        <h1 style={{ margin: 0, fontSize: "19px", fontWeight: "bold" }}>سنڌي GPT - مصنوعي ذهانت</h1>

        {/* کاٻي پاسي: بلاگ + 3 ڊاٽ */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="/blog" style={{ background: "rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: "20px", fontSize: "14px", color: "white", textDecoration: "none" }}>📚 بلاگ</a>
          
          <div style={{ position: "relative" }}>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "rgba(255,255,255,0.2)", border: "none", width: "36px", height: "36px", borderRadius: "50%", fontSize: "22px", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>⋮</button>
            {menuOpen && (
              <div style={{ position: "absolute", top: "45px", left: 0, background: "white", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.15)", minWidth: "160px", overflow: "hidden", zIndex: 30 }}>
                <a href="/about" style={{ display: "block", padding: "12px 16px", color: "#1e293b", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>اسان بابت</a>
                <a href="/privacy" style={{ display: "block", padding: "12px 16px", color: "#1e293b", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>پرائيويسي</a>
                <a href="/contact" style={{ display: "block", padding: "12px 16px", color: "#1e293b", textDecoration: "none" }}>رابطو</a>
              </div>
            )}
          </div>
        </div>
      </header>
