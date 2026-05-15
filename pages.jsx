// Page content components — text comes from content.js (SITE_CONTENT)

/* =================== HOME =================== */
function HomePage({ go }) {
  const c = window.SITE_CONTENT.home;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'grid', gridTemplateColumns:'1.05fr 1.4fr', gap:0 }}>
      <div style={{ padding:'30px 36px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid var(--hairline)', minWidth:0 }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
            <span className="mono" style={{ color:'var(--mute)' }}>Index / 00 — Profile</span>
            <span className="chip">
              <span style={{ width:6, height:6, borderRadius:99, background:'var(--accent)', display:'inline-block' }}></span>
              {' '}{c.availability}
            </span>
          </div>
          <h1 className="display" style={{ fontSize:'clamp(56px,7vw,108px)', margin:'0 0 8px', lineHeight:0.84 }}>
            {c.name_line1}<br />{c.name_line2}<span style={{ color:'var(--accent)' }}>.</span>
          </h1>
          <p style={{ fontFamily:'var(--serif)', fontSize:18, lineHeight:1.3, margin:'14px 0 0', maxWidth:480, color:'var(--ink-soft)' }}>
            {c.bio}
          </p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          <div className="mono" style={{ color:'var(--mute)' }}>// Sections</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              ['creative','01','Creative Director'],
              ['marketing','02','Marketing & PM'],
              ['case-jurame','03','Case · Mezcal Júrame'],
              ['case-protect','04','Case · Protect'],
              ['case-tonico','05','Case · Tónico Studio'],
              ['case-femsa','06','Case · Fundación FEMSA'],
            ].map(([page, num, label]) => (
              <button key={page} className="pill soft" onClick={() => go(page)}>
                <span className="mono" style={{ fontSize:9, color:'var(--mute)' }}>{num}</span>
                {label}<span className="arr">→</span>
              </button>
            ))}
          </div>
          <hr className="hr" />
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, flexWrap:'wrap' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
              <div className="mono" style={{ color:'var(--mute)' }}>Download</div>
              <div style={{ fontSize:14, fontWeight:600 }}>{c.cv_label}</div>
            </div>
            <a className="pill" href="uploads/CV ENGLISH.pdf" download>↓ Download CV (PDF)</a>
          </div>
        </div>
      </div>
      <div style={{ position:'relative', overflow:'hidden' }}>
        {(() => {
          let portraitSrc = null;
          try { portraitSrc = localStorage.getItem('sn_img_portrait'); } catch(e) {}
          return portraitSrc
            ? <img src={portraitSrc} alt="Portrait" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            : <div className="portrait"><div className="label">{c.portrait_label}</div></div>;
        })()}
        <div style={{ position:'absolute', top:24, right:24, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
          <span className="chip" style={{ background:'rgba(255,255,255,0.92)' }}>FILE · sn-2026.001</span>
          <span className="chip" style={{ background:'rgba(255,255,255,0.92)' }}>04 / 05 · MX</span>
        </div>
        <div style={{ position:'absolute', left:24, top:24, color:'#f4f1ea' }}>
          <div className="mono" style={{ opacity:.8 }}>Roll 01 — Frame 02</div>
        </div>
        <div style={{ position:'absolute', right:24, bottom:24, color:'#f4f1ea', textAlign:'right' }}>
          <div className="display" style={{ fontSize:64, lineHeight:0.9 }}>
            {(c.overlay_display || 'Brand\nVoice').split('\n').map((l,i,arr) =>
              <span key={i}>{l}{i < arr.length-1 && <br/>}</span>
            )}<span style={{ color:'var(--accent)' }}>.</span>
          </div>
          <div className="mono" style={{ opacity:.85, marginTop:6 }}>{c.overlay_sub}</div>
        </div>
        <div style={{ position:'absolute', left:24, bottom:24, color:'#f4f1ea' }}>
          <div className="mono" style={{ opacity:.8, marginBottom:4 }}>Contact</div>
          <div style={{ fontFamily:'var(--mono)', fontSize:12, letterSpacing:'.05em', display:'flex', flexDirection:'column', gap:2 }}>
            <span>{c.email}</span>
            <span>{c.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =================== CREATIVE DIRECTOR =================== */
function CreativePage({ go }) {
  const c = window.SITE_CONTENT.creative;
  const m = window.SITE_CONTENT.marquee;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'grid', gridTemplateColumns:'1.4fr 1fr', gridTemplateRows:'auto 1fr auto', gap:0 }}>
      <div style={{ gridColumn:'1 / -1', padding:'22px 36px 16px', borderBottom:'1px solid var(--hairline)', display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24 }}>
        <div style={{ minWidth:0 }}>
          <div className="mono" style={{ color:'var(--mute)', marginBottom:8 }}>{c.section_label}</div>
          <h2 className="display" style={{ fontSize:'clamp(40px,4.4vw,68px)', margin:0, lineHeight:0.92 }}>{c.headline}</h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8, minWidth:220 }}>
          {c.chips.map(ch => <span key={ch} className="chip">{ch}</span>)}
        </div>
      </div>
      <div className="scroll" style={{ padding:'24px 44px', borderRight:'1px solid var(--hairline)' }}>
        <div className="mono" style={{ color:'var(--mute)', marginBottom:8 }}>// 01.A — Story</div>
        <p style={{ margin:'0 0 14px', fontSize:15.5, lineHeight:1.55, maxWidth:560 }}>{c.story_p1}</p>
        <p style={{ margin:'0 0 22px', fontSize:15.5, lineHeight:1.55, maxWidth:560, color:'var(--ink-soft)' }}>{c.story_p2}</p>
        <div className="mono" style={{ color:'var(--mute)', marginBottom:10 }}>// 01.B — Services</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'var(--hairline)', border:'1px solid var(--hairline)', marginBottom:24 }}>
          {c.services.map(([t, d]) => (
            <div key={t} style={{ padding:'14px 16px', background:'var(--canvas)' }}>
              <div style={{ fontSize:13.5, fontWeight:600, marginBottom:4 }}>{t}</div>
              <div style={{ fontSize:12.5, color:'var(--mute)', lineHeight:1.45 }}>{d}</div>
            </div>
          ))}
        </div>
        <div className="mono" style={{ color:'var(--mute)', marginBottom:10 }}>// 01.C — Open to</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {c.open_to.map(p => <span key={p} className="chip" style={{ height:30, padding:'0 12px' }}>{p}</span>)}
        </div>
      </div>
      <div className="scroll" style={{ padding:'24px 32px' }}>
        <div className="mono" style={{ color:'var(--mute)', marginBottom:14 }}>// 01.D — Selected work</div>
        {[
          { n:'03', tag:'Narrative · Heritage',  title:'Mezcal Júrame',   go:'case-jurame' },
          { n:'04', tag:'Voice · Tech',           title:'Protect',         go:'case-protect' },
          { n:'05', tag:'Editorial · Identity',   title:'Tónico Studio',   go:'case-tonico' },
          { n:'06', tag:'Corporate · Foundation', title:'Fundación FEMSA', go:'case-femsa' },
        ].map(item => (
          <button key={item.n} onClick={() => go(item.go)} style={{
            display:'block', width:'100%', textAlign:'left',
            background:'var(--canvas)', border:'1px solid var(--hairline)',
            padding:'14px 16px', marginBottom:10, cursor:'pointer', borderRadius:0, transition:'background .2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background='var(--cloud)'}
          onMouseLeave={e => e.currentTarget.style.background='var(--canvas)'}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
              <span className="mono" style={{ color:'var(--mute)' }}>{item.n} · {item.tag}</span>
              <span style={{ fontSize:14 }}>↗</span>
            </div>
            <div className="display" style={{ fontSize:36, marginBottom:2 }}>{item.title}</div>
          </button>
        ))}
        <div style={{ marginTop:14, display:'flex', gap:8 }}>
          <button className="pill sm" onClick={() => go('home')}>← Back to home</button>
          <button className="pill sm ghost" onClick={() => go('marketing')}>Marketing & PM →</button>
        </div>
      </div>
      <div style={{ gridColumn:'1 / -1' }}>
        <div className="marquee">
          <div className="marquee-track">
            {[...m,...m].map((b,i) => <React.Fragment key={i}><span>{b}</span><span className="sep">✦</span></React.Fragment>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =================== MARKETING / PM =================== */
function MarketingPage({ go }) {
  const c = window.SITE_CONTENT.marketing;
  const m = window.SITE_CONTENT.marquee;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'grid', gridTemplateColumns:'1fr 1.4fr', gridTemplateRows:'auto 1fr auto', gap:0, background:'var(--ink)', color:'#f4f1ea' }}>
      <div style={{ gridColumn:'1 / -1', padding:'22px 36px 16px', borderBottom:'1px solid #2a2a2e', display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24 }}>
        <div style={{ minWidth:0 }}>
          <div className="mono" style={{ color:'var(--stone)', marginBottom:8 }}>{c.section_label}</div>
          <h2 className="display" style={{ fontSize:'clamp(40px,4.4vw,68px)', margin:0, lineHeight:0.92, color:'#f4f1ea' }}>{c.headline}</h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8, minWidth:220 }}>
          {c.chips.map(ch => <span key={ch} className="chip" style={{ borderColor:'#3a3a3e', color:'#f4f1ea' }}>{ch}</span>)}
        </div>
      </div>
      <div className="scroll" style={{ padding:'24px 36px', borderRight:'1px solid #2a2a2e' }}>
        <div className="mono" style={{ color:'var(--stone)', marginBottom:8 }}>// 02.A — Story</div>
        <p style={{ margin:'0 0 14px', fontSize:15.5, lineHeight:1.55 }}>{c.story_p1}</p>
        <p style={{ margin:'0 0 22px', fontSize:15.5, lineHeight:1.55, color:'var(--stone)' }}>{c.story_p2}</p>
        <div className="mono" style={{ color:'var(--stone)', marginBottom:10 }}>// 02.B — Open to</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
          {c.open_to.map(p => <span key={p} className="chip" style={{ borderColor:'#3a3a3e', color:'#f4f1ea', height:30, padding:'0 12px' }}>{p}</span>)}
        </div>
        <div className="mono" style={{ color:'var(--stone)', marginBottom:10 }}>// 02.C — Numbers</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'#2a2a2e', border:'1px solid #2a2a2e' }}>
          {c.numbers.map(([n, l]) => (
            <div key={l} style={{ padding:'18px 16px', background:'var(--ink)' }}>
              <div className="display" style={{ fontSize:48, lineHeight:0.9, color:'#f4f1ea' }}>{n}</div>
              <div className="mono" style={{ color:'var(--stone)', marginTop:6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll" style={{ padding:'24px 36px' }}>
        <div className="mono" style={{ color:'var(--stone)', marginBottom:10 }}>// 02.D — Services</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:1, background:'#2a2a2e', border:'1px solid #2a2a2e', marginBottom:22 }}>
          {c.services.map(([t, d]) => (
            <div key={t} style={{ padding:'14px 16px', background:'var(--ink)' }}>
              <div style={{ fontSize:13.5, fontWeight:600, marginBottom:4 }}>{t}</div>
              <div style={{ fontSize:12.5, color:'var(--stone)', lineHeight:1.45 }}>{d}</div>
            </div>
          ))}
        </div>
        <div className="mono" style={{ color:'var(--stone)', marginBottom:10 }}>// 02.E — Highlights</div>
        {[
          { n:'03', tag:'Launch · Retail',     title:'Mezcal Júrame',   go:'case-jurame' },
          { n:'04', tag:'Product · Site',      title:'Protect',         go:'case-protect' },
          { n:'05', tag:'Always-on · Retainer',title:'Tónico Studio',   go:'case-tonico' },
          { n:'06', tag:'Corporate · Annual',  title:'Fundación FEMSA', go:'case-femsa' },
        ].map(item => (
          <button key={item.n} onClick={() => go(item.go)} style={{
            display:'block', width:'100%', textAlign:'left',
            background:'var(--ink)', border:'1px solid #2a2a2e', color:'#f4f1ea',
            padding:'14px 16px', marginBottom:10, cursor:'pointer', borderRadius:0
          }}
          onMouseEnter={e => e.currentTarget.style.background='#1a1a1d'}
          onMouseLeave={e => e.currentTarget.style.background='var(--ink)'}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
              <span className="mono" style={{ color:'var(--stone)' }}>{item.n} · {item.tag}</span>
              <span style={{ fontSize:14 }}>↗</span>
            </div>
            <div className="display" style={{ fontSize:36, marginBottom:2, color:'#f4f1ea' }}>{item.title}</div>
          </button>
        ))}
        <div style={{ marginTop:14, display:'flex', gap:8 }}>
          <button className="pill sm soft" onClick={() => go('home')}>← Back to home</button>
          <button className="pill sm" onClick={() => go('creative')}>Creative Director ←</button>
        </div>
      </div>
      <div style={{ gridColumn:'1 / -1', borderTop:'1px solid #2a2a2e' }}>
        <div className="marquee" style={{ background:'var(--ink)', borderColor:'#2a2a2e' }}>
          <div className="marquee-track" style={{ color:'#f4f1ea' }}>
            {[...m,...m].map((b,i) => <React.Fragment key={i}><span>{b}</span><span className="sep">✦</span></React.Fragment>)}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, CreativePage, MarketingPage });
