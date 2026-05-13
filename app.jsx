// Main shell — capsule, navigation, brand background, font picker

const PAGES = ['home','creative','marketing','case-jurame','case-protect','case-tonico','case-femsa'];
const PAGE_LABELS = {
  'home': '00 · INDEX',
  'creative': '01 · CREATIVE DIRECTOR',
  'marketing': '02 · MARKETING & PM',
  'case-jurame': '03 · CASE — MEZCAL JÚRAME',
  'case-protect': '04 · CASE — PROTECT',
  'case-tonico': '05 · CASE — TÓNICO STUDIO',
  'case-femsa': '06 · CASE — FUNDACIÓN FEMSA',
};
const PAGE_SHORT = {
  'home': 'Home',
  'creative': 'Creative Director',
  'marketing': 'Marketing & PM',
  'case-jurame': 'Caso · Júrame',
  'case-protect': 'Case · Protect',
  'case-tonico': 'Case · Tónico',
  'case-femsa': 'Caso · FEMSA',
};

/* =====================================================================
 * FONT_REGISTRY
 *  Drop new TTF/OTF files into  assets/fonts/
 *  THEN add (a) an @font-face block in index.html
 *       (b) an entry below
 *  The picker in Tweaks reads from this list.
 * ===================================================================== */
const FONT_REGISTRY = [
  { id: 'default', label: 'Default · brand', stack: null },
  { id: 'fraunces', label: 'Fraunces (editorial serif)', stack: 'Fraunces, Georgia, serif' },
  { id: 'recoleta', label: 'Recoleta (FEMSA)', stack: 'Recoleta, Fraunces, Georgia, serif' },
  { id: 'rfrufo', label: 'RF Rufo (Júrame)', stack: '"RF Rufo", Fraunces, serif' },
  { id: 'dmsans', label: 'DM Sans (Tónico)', stack: '"DM Sans Local", "DM Sans", Inter, sans-serif' },
  { id: 'inter', label: 'Inter (system sans)', stack: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif' },
  { id: 'bebas', label: 'Bebas Neue (display)', stack: '"Bebas Neue", "Helvetica Neue", sans-serif' },
  { id: 'jetbrains', label: 'JetBrains Mono', stack: '"JetBrains Mono", ui-monospace, monospace' },
];

/* =====================================================================
 * BRAND_GRAPHICS — floating elements rendered on the stage (background),
 * different per page. Coordinates are CSS units (% / px).
 * Each entry: { src, w, top/left/right/bottom, op, rot, anim, delay }
 * ===================================================================== */
const BRAND_GRAPHICS = {
  // Home, Creative, Marketing → abstract default orbs (no brand graphics)
  'case-jurame': [
    { src:'assets/jurame/agave.png',         w:460, left:'-9%',  top:'18%',  rot:-6,  op:.50, anim:'a' },
    { src:'assets/jurame/greca.png',         w:420, right:'-6%', top:'8%',   rot:90,  op:.45, anim:'b' },
    { src:'assets/jurame/altiplano.png',     w:680, left:'18%',  bottom:'-12%', rot:0, op:.18, anim:'c' },
    { src:'assets/jurame/corazon.png',       w:160, right:'8%',  bottom:'22%', rot:8, op:.70, anim:'c', delay:'-6s' },
    { src:'assets/jurame/grecas-flechas.png',w:240, left:'8%',   top:'8%',   rot:0,   op:.55, anim:'b', delay:'-3s' },
  ],
  'case-protect': [
    { src:'assets/protect/g1.png', w:340, left:'-6%',  top:'14%',  rot:-8,  op:.55, anim:'a' },
    { src:'assets/protect/g2.png', w:280, right:'-4%', top:'22%',  rot:12,  op:.55, anim:'b' },
    { src:'assets/protect/g3.png', w:200, right:'10%', bottom:'10%', rot:0, op:.70, anim:'c', delay:'-7s' },
    { src:'assets/protect/g1.png', w:160, left:'14%',  bottom:'8%', rot:18, op:.40, anim:'b', delay:'-4s' },
  ],
  'case-tonico': [
    { src:'assets/tonico/graphic1.svg', w:520, left:'-12%', top:'10%',  rot:0,  op:.80, anim:'a' },
    { src:'assets/tonico/graphic2.svg', w:380, right:'-6%', top:'18%',  rot:6,  op:.85, anim:'b' },
    { src:'assets/tonico/graphic1.svg', w:220, right:'12%', bottom:'10%', rot:-10, op:.55, anim:'c', delay:'-5s' },
  ],
  'case-femsa': [
    { src:'assets/femsa/g1.svg', w:260, left:'-4%',  top:'14%',  rot:-8,  op:.55, anim:'a' },
    { src:'assets/femsa/g2.svg', w:210, right:'-3%', top:'10%',  rot:12,  op:.55, anim:'b' },
    { src:'assets/femsa/g3.svg', w:240, right:'4%',  bottom:'8%', rot:-4, op:.55, anim:'c', delay:'-6s' },
    { src:'assets/femsa/g7.png', w:200, left:'2%',   bottom:'14%',rot:6,  op:.45, anim:'b', delay:'-3s' },
    { src:'assets/femsa/g5.png', w:180, left:'14%',  top:'8%',   rot:14,  op:.40, anim:'c', delay:'-4s' },
  ],
};

/* ===================================================================== */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ff3b1f",
  "showGraphics": true,
  "showGrain": true,
  "darkStage": false,
  "fonts": {
    "home": "default",
    "creative": "default",
    "marketing": "default",
    "case-jurame": "default",
    "case-protect": "default",
    "case-tonico": "default",
    "case-femsa": "default"
  }
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState('home');
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  const go = (p) => {
    if (p === page) return;
    setPage(p);
    setKey(k => k+1);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      const idx = PAGES.indexOf(page);
      if (e.key === 'ArrowRight') { e.preventDefault(); go(PAGES[(idx+1) % PAGES.length]); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); go(PAGES[(idx-1+PAGES.length) % PAGES.length]); }
      if (e.key === 'Escape') { e.preventDefault(); go('home'); }
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 0 && num <= 6 && num < PAGES.length) { e.preventDefault(); go(PAGES[num]); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page]);

  const PageComp = {
    'home': HomePage,
    'creative': CreativePage,
    'marketing': MarketingPage,
    'case-jurame': CaseJurame,
    'case-protect': CaseProtect,
    'case-tonico': CaseTonico,
    'case-femsa': CaseFemsa,
  }[page];

  const isDarkPage = page === 'marketing';
  const isCasePage = page.startsWith('case-');
  const stageStyle = t.darkStage ? { background: '#0a0a0c' } : {};

  // Active font for current page
  const activeFontId = (t.fonts && t.fonts[page]) || 'default';
  const activeFont = FONT_REGISTRY.find(f => f.id === activeFontId);
  const capsuleStyle = activeFont && activeFont.stack
    ? { '--page-font': activeFont.stack }
    : {};

  // Brand graphics for the current page (case pages only)
  const graphics = (t.showGraphics && isCasePage) ? (BRAND_GRAPHICS[page] || []) : [];

  return (
    <div className="stage" style={stageStyle} data-screen-label={page}>
      {/* Default abstract orbs — only on non-case pages */}
      {t.showGraphics && !isCasePage && (
        <>
          <div className="orb a" style={{background: `radial-gradient(circle at 30% 25%, #ffffff 0%, ${t.accent}cc 18%, ${t.accent} 38%, #4a0a00 75%, #2a0300 100%)`}}></div>
          <div className="orb b"></div>
          <div className="orb c"></div>
          <div className="pillshape"></div>
        </>
      )}

      {/* Brand graphics — case pages */}
      {graphics.map((g, i) => {
        const positional = {};
        if (g.left   !== undefined) positional.left   = g.left;
        if (g.right  !== undefined) positional.right  = g.right;
        if (g.top    !== undefined) positional.top    = g.top;
        if (g.bottom !== undefined) positional.bottom = g.bottom;
        return (
          <img
            key={`${page}-${i}`}
            src={g.src}
            alt=""
            className={`bg-graphic ${g.anim || 'a'}`}
            style={{
              ...positional,
              width: g.w,
              height: 'auto',
              opacity: g.op,
              '--brot': `${g.rot || 0}deg`,
              transform: `rotate(${g.rot || 0}deg)`,
              animationDelay: g.delay || '0s',
            }}
          />
        );
      })}

      {t.showGrain && <div className="grain"></div>}

      {/* Frame ticks */}
      <div className="tickL"></div>
      <div className="tickR"></div>

      {/* Top bar */}
      <div className="topbar" style={t.darkStage ? {color:'#f4f1ea'} : {}}>
        <div className="grp">
          <span className="dot"></span>
          <span>SN — PORTFOLIO · 2026</span>
          <span style={{opacity:.5}}>SYS / OK</span>
        </div>
        <div className="grp">
          <span style={{opacity:.7}}>{PAGE_LABELS[page]}</span>
          <span style={{opacity:.5}}>· LAT 25.6° N · LON 100.3° W</span>
        </div>
        <div className="grp">
          <span style={{opacity:.7}}>MTY · MX</span>
          <span style={{opacity:.5}}>{new Date().toLocaleDateString('en-US', { year:'numeric', month:'short', day:'2-digit' }).toUpperCase()}</span>
        </div>
      </div>

      {/* Capsule */}
      <div className="capsule-wrap">
        <div className={"capsule" + (isDarkPage ? " dark" : "")} style={capsuleStyle}>
          {/* Capsule chrome head */}
          <div className="cap-head">
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <div className="lights"><span></span><span></span><span></span></div>
              <span>capsule.{page} · v.2026.05</span>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <span>↑↓ ← → · 0–6</span>
              <span style={{opacity:.7}}>FRAME {String(PAGES.indexOf(page)+1).padStart(2,'0')} / {String(PAGES.length).padStart(2,'0')}</span>
            </div>
          </div>

          <div className="cap-body" key={key}>
            <PageComp go={go} />
          </div>
        </div>
      </div>

      {/* Bottom bar — page switcher */}
      <div className="bottombar" style={t.darkStage ? {color:'#9c988c'} : {}}>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <span style={{opacity:.7}}>NAV</span>
          {PAGES.map((p,i) => (
            <button
              key={p}
              onClick={()=>go(p)}
              style={{
                background: page === p ? 'var(--ink)' : 'transparent',
                color: page === p ? '#f4f1ea' : (t.darkStage ? '#9c988c' : 'inherit'),
                border: '1px solid ' + (page === p ? 'var(--ink)' : 'var(--hairline)'),
                borderRadius:9999, padding:'4px 10px',
                fontFamily:'var(--mono)', fontSize:9, letterSpacing:'.14em', textTransform:'uppercase',
                cursor:'pointer'
              }}
            >
              {String(i).padStart(2,'0')}
            </button>
          ))}
        </div>
        <div style={{display:'flex', alignItems:'center', gap:24}}>
          <span style={{opacity:.7}}>fcosantiago5@gmail.com</span>
          <span style={{opacity:.7}}>+52 644 447 9443</span>
          <a className="underline-link" href="uploads/CV ENGLISH.pdf" download>CV ↓</a>
        </div>
      </div>

      {/* Tweaks */}
      <TweaksPanel title="Tweaks">
        <TweakSection label={`Font · ${PAGE_SHORT[page]}`}>
          <TweakSelect
            label="Family"
            value={activeFontId}
            onChange={v => setTweak('fonts', { ...t.fonts, [page]: v })}
            options={FONT_REGISTRY.map(f => ({ value: f.id, label: f.label }))}
          />
          <div style={{fontSize:10.5, color:'#888', lineHeight:1.5, marginTop:6}}>
            Drop new font files into <code style={{background:'#222', padding:'1px 6px', borderRadius:4, color:'#ddd'}}>assets/fonts/</code> and let Santiago know — they get registered in <code style={{background:'#222', padding:'1px 6px', borderRadius:4, color:'#ddd'}}>FONT_REGISTRY</code> (app.jsx).
          </div>
        </TweakSection>
        <TweakSection label="Theme">
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={v => setTweak('accent', v)}
            options={['#ff3b1f','#ffd24a','#3a6a4f','#ff5a3d','#1151ff','#ed1aa0']}
          />
          <TweakToggle label="Dark stage" value={t.darkStage} onChange={v => setTweak('darkStage', v)} />
        </TweakSection>
        <TweakSection label="Background">
          <TweakToggle label="Floating graphics" value={t.showGraphics} onChange={v => setTweak('showGraphics', v)} />
          <TweakToggle label="Grain texture" value={t.showGrain} onChange={v => setTweak('showGrain', v)} />
        </TweakSection>
        <TweakSection label="Navigation">
          <div style={{fontSize:11, color:'#888', lineHeight:1.5}}>
            ← / → arrows to step · 0–6 to jump · Esc returns home.
          </div>
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
