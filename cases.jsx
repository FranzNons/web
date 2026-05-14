// Case study components — text comes from content.js (SITE_CONTENT)

const FOOT_H = 56;

/* ===================================================================== */
/* CASE 03 · MEZCAL JÚRAME                                               */
/* ===================================================================== */
function CaseJurame({ go }) {
  const c = { bg:'#f2f3f0', ink:'#202d3f', gold:'#ab8d3a' };
  const t = window.SITE_CONTENT.jurame;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', background:c.bg, color:c.ink, fontFamily:'var(--page-font, "RF Rufo", Georgia, serif)', overflow:'hidden' }}>
      <div style={{ padding:'28px 44px 14px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, position:'relative', zIndex:2, flexShrink:0 }}>
        <div style={{ minWidth:0 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.gold, marginBottom:8 }}>{t.label}</div>
          <h2 style={{ fontFamily:'"RF Rufo",serif', fontWeight:700, fontSize:'clamp(38px,4.2vw,60px)', lineHeight:.98, margin:0, color:c.ink }}>
            {t.headline.replace(t.headline_accent, '').split('').join('').trim().split(t.headline_accent)[0]}
            <span style={{ color:c.gold }}>{t.headline_accent}</span>
            {t.headline.split(t.headline_accent)[1]}
          </h2>
        </div>
        <img src="assets/jurame/logo-blue.png" alt="Júrame" style={{ height:64, width:'auto', flexShrink:0, filter:'drop-shadow(0 4px 10px rgba(32,45,63,0.15))' }}/>
      </div>

      <div style={{ flex:1, minHeight:0, padding:'8px 44px 14px', display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:24, position:'relative', zIndex:2 }}>
        <div className="scroll" style={{ paddingRight:16, minHeight:0 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.gold, marginBottom:8 }}>// Brief</div>
          <p style={{ fontSize:16.5, lineHeight:1.4, margin:'0 0 14px' }}>{t.brief}</p>
          <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'6px 14px', marginBottom:14, fontSize:13.5, lineHeight:1.4 }}>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:c.gold }}>Rol</span>
            <span>{t.rol}</span>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:c.gold }}>Equipo</span>
            <span>{t.equipo}</span>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:c.gold }}>Entregables</span>
            <span>{t.entregables}</span>
          </div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.gold, marginBottom:6 }}>// Pilares narrativos</div>
          <ol style={{ margin:'0 0 14px', paddingLeft:20, fontSize:14, lineHeight:1.55 }}>
            {t.pilares.map(p => <li key={p}>{p}</li>)}
          </ol>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.gold, marginBottom:6 }}>// Naming · expresiones</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {t.naming.map(([n, d]) => (
              <div key={n} style={{ padding:'8px 12px', border:`1px solid ${c.ink}33`, background:'#fff' }}>
                <div style={{ fontFamily:'"RF Rufo",serif', fontWeight:600, fontSize:15, lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', color:c.gold, marginTop:3 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateRows:'1.3fr 0.9fr', gap:14, minHeight:0 }}>
          <div style={{ position:'relative', background:c.ink, color:c.bg, overflow:'hidden', padding:'20px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <img src="assets/jurame/agave.png" alt="" style={{ position:'absolute', right:-30, bottom:-20, width:240, opacity:.22, filter:'brightness(2.5)' }}/>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.gold }}>Fig. 01 — Copy de etiqueta</div>
            <div style={{ fontFamily:'"RF Rufo",serif', fontWeight:400, fontSize:'clamp(18px,1.9vw,26px)', lineHeight:1.25, position:'relative', zIndex:2 }}>
              {t.copy_etiqueta.split(t.copy_etiqueta_accent)[0]}
              <span style={{ color:c.gold }}>{t.copy_etiqueta_accent}</span>
              {t.copy_etiqueta.split(t.copy_etiqueta_accent)[1]}
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', position:'relative', zIndex:2 }}>
              <img src="assets/jurame/logo-white.png" alt="" style={{ height:42 }}/>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.16em', color:c.gold, opacity:.85 }}>EST. MMXXIII · MX</div>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, minHeight:0 }}>
            <div style={{ padding:'14px 16px', background:'#fff', border:`1px solid ${c.ink}22`, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', color:c.gold }}>Resultado</div>
              <div>
                <div style={{ fontFamily:'"RF Rufo",serif', fontWeight:900, fontSize:44, lineHeight:.9, color:c.ink }}>{t.stat_number}<span style={{ color:c.gold }}>%</span></div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.14em', textTransform:'uppercase', color:'#6f6c63', marginTop:4 }}>{t.stat_label}</div>
              </div>
            </div>
            <div style={{ padding:'14px 16px', background:c.gold, color:c.ink, position:'relative', overflow:'hidden' }}>
              <img src="assets/jurame/corazon.png" alt="" style={{ position:'absolute', right:-10, top:-6, width:90, opacity:.28 }}/>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.16em', textTransform:'uppercase' }}>Lema</div>
              <div style={{ fontFamily:'"RF Rufo",serif', fontWeight:600, fontSize:20, lineHeight:1.1, marginTop:12, position:'relative' }}>{t.lema}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flexShrink:0, height:FOOT_H, padding:'0 44px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex:3, borderTop:`1px solid ${c.ink}22` }}>
        <button className="pill sm" style={{ background:c.ink, color:c.bg, borderColor:c.ink }} onClick={() => go('home')}>← Home</button>
        <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.gold }}>{t.footer_label}</span>
        <button className="pill sm" style={{ background:c.ink, color:c.bg, borderColor:c.ink }} onClick={() => go('case-protect')}>Next · Protect →</button>
      </div>
    </div>
  );
}

/* ===================================================================== */
/* CASE 04 · PROTECT                                                     */
/* ===================================================================== */
function CaseProtect({ go }) {
  const c = { bg:'#0054D1', ink:'#ffffff', signal:'#00DC50', deep:'#001a44' };
  const t = window.SITE_CONTENT.protect;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', background:c.bg, color:c.ink, fontFamily:'var(--page-font, Inter, sans-serif)', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(${c.ink}0a 1px,transparent 1px),linear-gradient(90deg,${c.ink}0a 1px,transparent 1px)`, backgroundSize:'40px 40px', pointerEvents:'none' }}></div>
      <div style={{ padding:'28px 44px 14px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, position:'relative', zIndex:2, borderBottom:`1px solid ${c.ink}22`, flexShrink:0 }}>
        <div style={{ minWidth:0 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal, marginBottom:8 }}>{t.label}</div>
          <h2 style={{ fontFamily:'Bebas Neue,sans-serif', textTransform:'uppercase', letterSpacing:'-0.005em', fontSize:'clamp(34px,3.2vw,46px)', lineHeight:1.02, margin:0, color:c.ink, whiteSpace:'nowrap' }}>
            {t.headline.split(t.headline_accent)[0]}<span style={{ color:c.signal }}>{t.headline_accent}</span>{t.headline.split(t.headline_accent)[1]}
          </h2>
        </div>
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'8px 16px', border:`1px solid ${c.ink}55`, borderRadius:9999, flexShrink:0 }}>
          <span style={{ width:8, height:8, borderRadius:99, background:c.signal, boxShadow:`0 0 0 4px ${c.signal}33` }}></span>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, letterSpacing:'.16em', textTransform:'uppercase' }}>PROTECT · SYS / LIVE</span>
        </div>
      </div>

      <div style={{ flex:1, minHeight:0, padding:'14px 44px 14px', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:24, position:'relative', zIndex:2 }}>
        <div className="scroll" style={{ paddingRight:14, minHeight:0 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal, marginBottom:8 }}>// 04.A — Brief</div>
          <p style={{ fontSize:15.5, lineHeight:1.4, margin:'0 0 14px' }}>{t.brief}</p>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal, marginBottom:8 }}>// 04.B — Voice pillars</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14 }}>
            {t.pillars.map(([ti, d]) => (
              <div key={ti} style={{ padding:'10px 12px', background:`${c.ink}10`, border:`1px solid ${c.ink}22` }}>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:c.signal, marginBottom:3 }}>{ti}</div>
                <div style={{ fontSize:11.5, lineHeight:1.4, color:`${c.ink}cc` }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal, marginBottom:8 }}>// 04.C — Sample copy</div>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {t.copy_lines.map(([k, l]) => (
              <div key={k} style={{ padding:'8px 12px', background:c.deep, border:`1px solid ${c.ink}22`, display:'grid', gridTemplateColumns:'70px 1fr', gap:12, alignItems:'baseline' }}>
                <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.14em', color:c.signal }}>{k}</span>
                <span style={{ fontFamily:'Inter,sans-serif', fontSize:14, fontWeight:500 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:14, minHeight:0 }}>
          <div style={{ background:c.deep, padding:'18px 20px', position:'relative', overflow:'hidden', border:`1px solid ${c.ink}22`, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div style={{ display:'flex', justifyContent:'space-between' }}>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', color:c.signal }}>Fig. 01 — Dashboard hero</span>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.14em', opacity:.7 }}>v.4.2.1</span>
            </div>
            <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(28px,3.5vw,52px)', lineHeight:.9 }}>
              {t.dashboard_headline}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:6 }}>
              {['ENDPOINTS · 42','THREATS · 0','SCANS · 1.2K','UPTIME · 99.99%'].map(s =>
                <div key={s} style={{ padding:'6px 8px', background:`${c.ink}0d`, border:`1px solid ${c.ink}22`, fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.08em' }}>{s}</div>
              )}
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:14, minHeight:0 }}>
            <div style={{ background:c.signal, color:c.deep, padding:'16px 18px', display:'flex', flexDirection:'column', justifyContent:'space-between', overflow:'hidden' }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase' }}>Naming · Tiers</div>
              <div>
                <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:28, lineHeight:1 }}>{t.naming_tiers}</div>
                <div style={{ fontFamily:'Inter,sans-serif', fontSize:11, marginTop:8, color:c.deep, opacity:.8 }}>{t.naming_sub}</div>
              </div>
            </div>
            <div style={{ background:`${c.ink}10`, padding:'16px 18px', border:`1px solid ${c.ink}22`, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal }}>KPI</div>
              <div>
                <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:46, lineHeight:.9 }}>{t.stat_number}<span style={{ color:c.signal }}>%</span></div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.14em', textTransform:'uppercase', opacity:.75, marginTop:4 }}>{t.stat_label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flexShrink:0, height:FOOT_H, padding:'0 44px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex:3, borderTop:`1px solid ${c.ink}22` }}>
        <button className="pill sm" style={{ background:c.ink, color:c.deep, borderColor:c.ink }} onClick={() => go('case-jurame')}>← Júrame</button>
        <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal }}>{t.footer_label}</span>
        <button className="pill sm" style={{ background:c.ink, color:c.deep, borderColor:c.ink }} onClick={() => go('case-tonico')}>Next · Tónico →</button>
      </div>
    </div>
  );
}

/* ===================================================================== */
/* CASE 05 · TÓNICO STUDIO                                               */
/* ===================================================================== */
function CaseTonico({ go }) {
  const c = { bg:'#101010', ink:'#fdfdfd', signal:'#f7f56a' };
  const t = window.SITE_CONTENT.tonico;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', background:c.bg, color:c.ink, fontFamily:'var(--page-font, "DM Sans Local","DM Sans",Inter,sans-serif)', overflow:'hidden' }}>
      <div style={{ padding:'28px 44px 14px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, position:'relative', zIndex:2, flexShrink:0 }}>
        <div style={{ minWidth:0 }}>
          <div style={{ fontFamily:'"DM Sans",monospace', fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:c.signal, marginBottom:8 }}>{t.label}</div>
          <h2 style={{ fontFamily:'"DM Sans",sans-serif', fontWeight:900, fontSize:'clamp(40px,4.6vw,66px)', lineHeight:.95, letterSpacing:'-0.03em', margin:0 }}>
            {t.headline.split(t.headline_accent)[0]}<span style={{ color:c.signal, fontStyle:'italic' }}>{t.headline_accent}</span>{t.headline.split(t.headline_accent)[1]}
          </h2>
        </div>
        <img src="assets/tonico/logo.svg" alt="Tónico" style={{ height:36, width:'auto', flexShrink:0, filter:'invert(1)' }}/>
      </div>

      <div style={{ flex:1, minHeight:0, padding:'10px 44px 14px', display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:24, position:'relative', zIndex:2 }}>
        <div className="scroll" style={{ paddingRight:14, minHeight:0 }}>
          <div style={{ fontFamily:'"DM Sans",monospace', fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:c.signal, marginBottom:8 }}>// Brief</div>
          <p style={{ fontSize:16, lineHeight:1.4, margin:'0 0 14px', fontWeight:300 }}>{t.brief}</p>
          <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'6px 14px', marginBottom:14, fontSize:13.5, lineHeight:1.4 }}>
            <span style={{ fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:c.signal }}>Role</span><span>{t.rol}</span>
            <span style={{ fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:c.signal }}>Scope</span><span>{t.scope}</span>
            <span style={{ fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:c.signal }}>Cadence</span><span>{t.cadence}</span>
          </div>
          <div style={{ fontFamily:'"DM Sans",monospace', fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:c.signal, marginBottom:6 }}>// Sample lines</div>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {t.lines.map(l => (
              <div key={l} style={{ padding:'10px 14px', border:`1px solid ${c.ink}22`, background:`${c.ink}06`, fontSize:14.5, lineHeight:1.35, fontWeight:300 }}>
                <span style={{ color:c.signal, fontFamily:'"DM Sans",monospace', fontSize:10, marginRight:6 }}>"</span>{l}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateRows:'1.3fr 1fr', gap:14, minHeight:0 }}>
          <div style={{ position:'relative', overflow:'hidden', background:c.signal, color:c.bg }}>
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src="assets/tonico/graphic2.svg" alt="" style={{ width:'65%', height:'auto', opacity:.95 }}/>
            </div>
            <div style={{ position:'absolute', left:18, top:14, fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.16em', textTransform:'uppercase' }}>Fig. 01 — Wordmark + glyph</div>
            <div style={{ position:'absolute', right:18, bottom:14, fontFamily:'"DM Sans",sans-serif', fontWeight:900, fontSize:'clamp(32px,4vw,60px)', lineHeight:.85, textAlign:'right' }}>
              tónico<span style={{ fontStyle:'italic' }}>.</span>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 0.8fr', gap:14, minHeight:0 }}>
            <div style={{ padding:'14px 16px', background:`${c.ink}0a`, border:`1px solid ${c.ink}22`, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div style={{ fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:c.signal }}>Metric · qtr</div>
              <div>
                <div style={{ fontFamily:'"DM Sans",sans-serif', fontWeight:900, fontSize:44, lineHeight:.9 }}>{t.stat_number}<span style={{ color:c.signal }}>%</span></div>
                <div style={{ fontFamily:'"DM Sans",monospace', fontSize:9, letterSpacing:'.14em', textTransform:'uppercase', opacity:.7, marginTop:4 }}>{t.stat_label}</div>
              </div>
            </div>
            <div style={{ padding:'14px 16px', background:c.ink, color:c.bg, position:'relative' }}>
              <div style={{ fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:'#666' }}>Note</div>
              <div style={{ fontFamily:'"DM Sans",sans-serif', fontStyle:'italic', fontWeight:500, fontSize:13.5, lineHeight:1.3, marginTop:6 }}>
                {t.note.split('read out loud')[0]}<span style={{ background:c.signal, color:c.bg, padding:'0 4px' }}>read out loud.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flexShrink:0, height:FOOT_H, padding:'0 44px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex:3, borderTop:`1px solid ${c.ink}22` }}>
        <button className="pill sm" style={{ background:c.signal, color:c.bg, borderColor:c.signal }} onClick={() => go('case-protect')}>← Protect</button>
        <span style={{ fontFamily:'"DM Sans",monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.signal }}>{t.footer_label}</span>
        <button className="pill sm" style={{ background:c.signal, color:c.bg, borderColor:c.signal }} onClick={() => go('case-femsa')}>Next · FEMSA →</button>
      </div>
    </div>
  );
}

/* ===================================================================== */
/* CASE 06 · FUNDACIÓN FEMSA                                             */
/* ===================================================================== */
function CaseFemsa({ go }) {
  const c = { bg:'#cecece', ink:'#0a0a0a', signal:'#ffe944', soft:'#e5e5e5' };
  const t = window.SITE_CONTENT.femsa;
  return (
    <div className="page-enter" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', background:c.bg, color:c.ink, fontFamily:'var(--page-font, Fraunces, Georgia, serif)', overflow:'hidden' }}>
      <div style={{ padding:'28px 44px 14px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:24, position:'relative', zIndex:2, borderBottom:`1px solid ${c.ink}22`, flexShrink:0 }}>
        <div style={{ minWidth:0 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:c.ink, marginBottom:8, opacity:.7 }}>{t.label}</div>
          <h2 style={{ fontFamily:'Fraunces,serif', fontWeight:600, fontSize:'clamp(38px,4.2vw,60px)', lineHeight:1.0, letterSpacing:'-0.01em', margin:0 }}>
            {t.headline.split(t.headline_accent)[0]}<span style={{ background:c.signal, padding:'0 6px' }}>{t.headline_accent}</span>{t.headline.split(t.headline_accent)[1]}
          </h2>
        </div>
        <img src="assets/femsa/logo-black.png" alt="Fundación FEMSA" style={{ height:54, width:'auto', flexShrink:0 }}/>
      </div>

      <div style={{ flex:1, minHeight:0, padding:'14px 44px 14px', display:'grid', gridTemplateColumns:'1fr 1.05fr', gap:24, position:'relative', zIndex:2 }}>
        <div className="scroll" style={{ paddingRight:14, minHeight:0 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', opacity:.6, marginBottom:8 }}>// Brief</div>
          <p style={{ fontSize:15.5, lineHeight:1.4, margin:'0 0 14px' }}>{t.brief}</p>
          <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'6px 14px', marginBottom:14, fontSize:13.5, lineHeight:1.4 }}>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', opacity:.65 }}>Rol</span><span>{t.rol}</span>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', opacity:.65 }}>Equipo</span><span>{t.equipo}</span>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', opacity:.65 }}>Entregables</span><span>{t.entregables}</span>
          </div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', opacity:.6, marginBottom:6 }}>// Pilares de voz</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:`${c.ink}22`, border:`1px solid ${c.ink}22` }}>
            {t.pilares.map(([ti, d]) => (
              <div key={ti} style={{ padding:'10px 14px', background:c.soft }}>
                <div style={{ fontFamily:'Fraunces,serif', fontWeight:600, fontSize:14, marginBottom:3 }}>{ti}</div>
                <div style={{ fontSize:11.5, lineHeight:1.4, opacity:.75 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateRows:'1.2fr 1fr', gap:14, minHeight:0 }}>
          <div style={{ position:'relative', overflow:'hidden', background:c.signal, color:c.ink, padding:'18px 22px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase' }}>Fig. 01 — Manifesto pg. 1</span>
              <img src="assets/femsa/g3.svg" alt="" style={{ height:36, opacity:.55 }}/>
            </div>
            <div style={{ fontFamily:'Fraunces,serif', fontWeight:600, fontStyle:'italic', fontSize:'clamp(18px,2vw,26px)', lineHeight:1.2 }}>
              {t.manifesto_quote.split(t.manifesto_accent)[0]}
              <span style={{ textDecoration:'underline', textDecorationStyle:'wavy' }}>{t.manifesto_accent}</span>
              {t.manifesto_quote.split(t.manifesto_accent)[1]}
            </div>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', opacity:.8 }}>{t.manifesto_source}</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1px', background:`${c.ink}22`, border:`1px solid ${c.ink}22`, minHeight:0 }}>
            {t.stats.map(([n, l]) => (
              <div key={l} style={{ padding:'14px 16px', background:c.soft, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div style={{ fontFamily:'Fraunces,serif', fontWeight:600, fontSize:56, lineHeight:.85 }}>{n}</div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'.14em', textTransform:'uppercase', opacity:.7, marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ flexShrink:0, height:FOOT_H, padding:'0 44px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex:3, borderTop:`1px solid ${c.ink}22` }}>
        <button className="pill sm" onClick={() => go('case-tonico')}>← Tónico</button>
        <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', opacity:.65 }}>{t.footer_label}</span>
        <button className="pill sm" onClick={() => go('home')}>Back to home →</button>
      </div>
    </div>
  );
}

Object.assign(window, { CaseJurame, CaseProtect, CaseTonico, CaseFemsa });
