/* =====================================================================
 * EDITOR.JSX v2 — Edit Mode · Cmd/Ctrl+E
 * Tabs: Tipografía · Colores · Textos · Imágenes
 * Textos: edita SITE_CONTENT en memoria → botón Exportar descarga content.js
 * ===================================================================== */

const EDITOR_FONT_REGISTRY = [
  { id:'default',   label:'Default · brand' },
  { id:'fraunces',  label:'Fraunces · serif' },
  { id:'recoleta',  label:'Recoleta · FEMSA' },
  { id:'rfrufo',    label:'RF Rufo · Júrame' },
  { id:'dmsans',    label:'DM Sans · Tónico' },
  { id:'inter',     label:'Inter · sans' },
  { id:'bebas',     label:'Bebas Neue · display' },
  { id:'jetbrains', label:'JetBrains Mono' },
];

const EDITOR_PAGE_LABELS = {
  home:'Home', creative:'Creative', marketing:'Marketing',
  'case-jurame':'Júrame', 'case-protect':'Protect',
  'case-tonico':'Tónico', 'case-femsa':'FEMSA',
};

const EDITOR_CASE_COLORS = {
  'case-jurame':  { label:'Júrame',  keys:['bg','ink','gold'],         defaults:{ bg:'#f2f3f0', ink:'#202d3f', gold:'#ab8d3a' } },
  'case-protect': { label:'Protect', keys:['bg','ink','signal','deep'],defaults:{ bg:'#0054D1', ink:'#ffffff', signal:'#00DC50', deep:'#001a44' } },
  'case-tonico':  { label:'Tónico',  keys:['bg','ink','signal'],       defaults:{ bg:'#101010', ink:'#fdfdfd', signal:'#f7f56a' } },
  'case-femsa':   { label:'FEMSA',   keys:['bg','ink','signal','soft'],defaults:{ bg:'#cecece', ink:'#0a0a0a', signal:'#ffe944', soft:'#e5e5e5' } },
};

/* Text field definitions per section */
const TEXT_SECTIONS = [
  { key:'home', label:'Home', fields:[
    { f:'name_line1',    label:'Nombre línea 1',  type:'text' },
    { f:'name_line2',    label:'Nombre línea 2',  type:'text' },
    { f:'availability',  label:'Chip disponibilidad', type:'text' },
    { f:'bio',           label:'Bio',             type:'textarea' },
    { f:'email',         label:'Email',           type:'text' },
    { f:'phone',         label:'Teléfono',        type:'text' },
    { f:'cv_label',      label:'Label CV',        type:'text' },
    { f:'overlay_sub',   label:'Subtítulo overlay', type:'text' },
  ]},
  { key:'creative', label:'Creative Director', fields:[
    { f:'section_label', label:'Label sección',  type:'text' },
    { f:'headline',      label:'Titular',        type:'textarea' },
    { f:'story_p1',      label:'Historia párr. 1', type:'textarea' },
    { f:'story_p2',      label:'Historia párr. 2', type:'textarea' },
  ]},
  { key:'marketing', label:'Marketing & PM', fields:[
    { f:'section_label', label:'Label sección',  type:'text' },
    { f:'headline',      label:'Titular',        type:'textarea' },
    { f:'story_p1',      label:'Historia párr. 1', type:'textarea' },
    { f:'story_p2',      label:'Historia párr. 2', type:'textarea' },
  ]},
  { key:'jurame', label:'Caso · Júrame', fields:[
    { f:'label',         label:'Label cabecera', type:'text' },
    { f:'headline',      label:'Titular',        type:'textarea' },
    { f:'brief',         label:'Brief',          type:'textarea' },
    { f:'rol',           label:'Rol',            type:'text' },
    { f:'equipo',        label:'Equipo',         type:'text' },
    { f:'entregables',   label:'Entregables',    type:'text' },
    { f:'copy_etiqueta', label:'Copy etiqueta',  type:'textarea' },
    { f:'stat_number',   label:'Número stat',    type:'text' },
    { f:'stat_label',    label:'Label stat',     type:'text' },
    { f:'lema',          label:'Lema',           type:'textarea' },
  ]},
  { key:'protect', label:'Caso · Protect', fields:[
    { f:'label',         label:'Label cabecera', type:'text' },
    { f:'headline',      label:'Titular',        type:'textarea' },
    { f:'brief',         label:'Brief',          type:'textarea' },
    { f:'dashboard_headline', label:'Dashboard headline', type:'text' },
    { f:'naming_tiers',  label:'Naming tiers',   type:'text' },
    { f:'naming_sub',    label:'Naming sub',     type:'text' },
    { f:'stat_number',   label:'Número stat',    type:'text' },
    { f:'stat_label',    label:'Label stat',     type:'text' },
  ]},
  { key:'tonico', label:'Caso · Tónico', fields:[
    { f:'label',         label:'Label cabecera', type:'text' },
    { f:'headline',      label:'Titular',        type:'textarea' },
    { f:'brief',         label:'Brief',          type:'textarea' },
    { f:'rol',           label:'Rol',            type:'text' },
    { f:'scope',         label:'Scope',          type:'text' },
    { f:'cadence',       label:'Cadence',        type:'text' },
    { f:'stat_number',   label:'Número stat',    type:'text' },
    { f:'stat_label',    label:'Label stat',     type:'text' },
    { f:'note',          label:'Nota',           type:'textarea' },
  ]},
  { key:'femsa', label:'Caso · FEMSA', fields:[
    { f:'label',         label:'Label cabecera', type:'text' },
    { f:'headline',      label:'Titular',        type:'textarea' },
    { f:'brief',         label:'Brief',          type:'textarea' },
    { f:'rol',           label:'Rol',            type:'text' },
    { f:'equipo',        label:'Equipo',         type:'text' },
    { f:'entregables',   label:'Entregables',    type:'text' },
    { f:'manifesto_quote', label:'Quote manifesto', type:'textarea' },
    { f:'manifesto_source', label:'Fuente manifesto', type:'text' },
  ]},
];

/* ---- small sub-components ---- */
function EdColorSwatch({ value, onChange }) {
  return (
    <label style={{ position:'relative', cursor:'pointer', display:'inline-block' }}>
      <div style={{ width:28, height:28, borderRadius:6, background:value, border:'2px solid #2a2a2e' }} />
      <input type="color" value={value} onChange={e => onChange(e.target.value)}
        style={{ position:'absolute', inset:0, opacity:0, width:'100%', height:'100%', cursor:'pointer' }} />
    </label>
  );
}

/* ---- Export helper ---- */
function exportContent(content) {
  const json = JSON.stringify(content, null, 2);
  const blob = new Blob([
    `/* =====================================================================\n` +
    ` * CONTENT.JS — Exported from Edit Mode · ${new Date().toLocaleDateString()}\n` +
    ` * ===================================================================== */\n` +
    `const SITE_CONTENT = ${json};\n\n` +
    `window.SITE_CONTENT = SITE_CONTENT;\n`
  ], { type:'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'content.js'; a.click();
  URL.revokeObjectURL(url);
}

/* ---- Main panel ---- */
function EditModePanel({ currentPage, tweakState, setTweak }) {
  const [open, setOpen]       = React.useState(false);
  const [tab, setTab]         = React.useState('texts');
  const [textSection, setTextSection] = React.useState('home');
  const [toast, setToast]     = React.useState(null);
  const [content, setContent] = React.useState(() => JSON.parse(JSON.stringify(window.SITE_CONTENT)));

  /* sync content changes into window.SITE_CONTENT for live preview */
  React.useEffect(() => {
    window.SITE_CONTENT = content;
  }, [content]);

  /* keyboard */
  React.useEffect(() => {
    const h = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') { e.preventDefault(); setOpen(o => !o); }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const toast_ = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2200); };

  /* text helpers */
  const updateField = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  /* font */
  const setFont = (page, id) => { setTweak('fonts', { ...(tweakState?.fonts || {}), [page]: id }); toast_('Fuente guardada'); };

  /* color */
  const [colorOverrides, setColorOverrides] = React.useState({});
  const getColor = (pk, ck) => colorOverrides[pk]?.[ck] ?? EDITOR_CASE_COLORS[pk]?.defaults[ck] ?? '#000';
  const setColor = (pk, ck, v) => {
    setColorOverrides(p => ({ ...p, [pk]: { ...(p[pk] || EDITOR_CASE_COLORS[pk].defaults), [ck]: v } }));
    document.documentElement.style.setProperty(`--sn-${pk}-${ck}`, v);
    toast_('Color actualizado');
  };

  const mono = { fontFamily:'"JetBrains Mono",monospace' };

  const tabs = [
    { id:'texts',  label:'Textos' },
    { id:'type',   label:'Tipografía' },
    { id:'colors', label:'Colores' },
    { id:'layout', label:'Layout ·· soon', disabled:true },
  ];

  const inputStyle = {
    background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e',
    borderRadius:6, fontFamily:'Inter,sans-serif', fontSize:12,
    padding:'7px 10px', width:'100%', lineHeight:1.5,
    outline:'none', resize:'vertical',
  };

  return (
    <>
      {!open && (
        <div style={{ position:'fixed', bottom:16, right:20, zIndex:9999, pointerEvents:'none',
          ...mono, fontSize:9, letterSpacing:'.14em', textTransform:'uppercase',
          color:'var(--mute)', opacity:.4 }}>⌘E · Edit</div>
      )}

      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position:'fixed', inset:0, zIndex:9000,
            background:'rgba(14,14,16,.5)', backdropFilter:'blur(3px)' }} />

          <div style={{ position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
            zIndex:9001, width:'min(700px,94vw)', maxHeight:'85vh',
            display:'flex', flexDirection:'column',
            background:'#0e0e10', border:'1px solid #2a2a2e', borderRadius:16,
            boxShadow:'0 40px 100px rgba(0,0,0,.65)', overflow:'hidden', ...mono }}>

            {/* header */}
            <div style={{ padding:'13px 18px', borderBottom:'1px solid #2a2a2e',
              display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ width:8, height:8, borderRadius:99, background:'var(--accent)',
                  display:'inline-block', boxShadow:'0 0 0 4px rgba(255,59,31,.2)' }} />
                <span style={{ fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:'#f4f1ea' }}>
                  EDIT MODE · {EDITOR_PAGE_LABELS[currentPage] || currentPage}
                </span>
              </div>
              <div style={{ display:'flex', gap:8 }}>
                <button onClick={() => { exportContent(content); toast_('content.js descargado ✓'); }}
                  style={{ background:'var(--accent)', border:'none', color:'#fff',
                    ...mono, fontSize:9, letterSpacing:'.12em', padding:'5px 12px',
                    borderRadius:9999, cursor:'pointer', textTransform:'uppercase', fontWeight:600 }}>
                  ↓ Exportar content.js
                </button>
                <button onClick={() => setOpen(false)} style={{ background:'transparent',
                  border:'1px solid #2a2a2e', color:'#9c988c', ...mono,
                  fontSize:9, letterSpacing:'.1em', padding:'4px 10px',
                  borderRadius:9999, cursor:'pointer', textTransform:'uppercase' }}>ESC</button>
              </div>
            </div>

            {/* tabs */}
            <div style={{ display:'flex', borderBottom:'1px solid #2a2a2e', flexShrink:0 }}>
              {tabs.map(t => (
                <button key={t.id} onClick={() => !t.disabled && setTab(t.id)} style={{
                  flex:1, padding:'10px 0', background:tab===t.id?'#1a1a1d':'transparent',
                  border:'none', borderBottom:tab===t.id?'2px solid var(--accent)':'2px solid transparent',
                  color:t.disabled?'#2a2a2e':(tab===t.id?'#f4f1ea':'#6f6c63'),
                  ...mono, fontSize:9, letterSpacing:'.13em', textTransform:'uppercase',
                  cursor:t.disabled?'not-allowed':'pointer' }}>{t.label}</button>
              ))}
            </div>

            {/* body */}
            <div style={{ flex:1, overflowY:'auto', padding:'0',
              scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent', display:'flex' }}>

              {/* ── TEXTOS ── */}
              {tab === 'texts' && (
                <>
                  {/* section nav sidebar */}
                  <div style={{ width:140, flexShrink:0, borderRight:'1px solid #2a2a2e',
                    display:'flex', flexDirection:'column', overflowY:'auto' }}>
                    {TEXT_SECTIONS.map(s => (
                      <button key={s.key} onClick={() => setTextSection(s.key)} style={{
                        padding:'10px 14px', background:textSection===s.key?'#1a1a1d':'transparent',
                        border:'none', borderLeft:textSection===s.key?'2px solid var(--accent)':'2px solid transparent',
                        color:textSection===s.key?'#f4f1ea':'#6f6c63',
                        ...mono, fontSize:9, letterSpacing:'.1em', textTransform:'uppercase',
                        cursor:'pointer', textAlign:'left' }}>{s.label}</button>
                    ))}
                  </div>

                  {/* fields */}
                  <div style={{ flex:1, overflowY:'auto', padding:'18px',
                    scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>
                    {TEXT_SECTIONS.filter(s => s.key === textSection).map(section => (
                      <div key={section.key} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                        <div style={{ fontSize:9, letterSpacing:'.15em', color:'var(--accent)',
                          textTransform:'uppercase', marginBottom:4 }}>// {section.label}</div>
                        {section.fields.map(field => (
                          <div key={field.f}>
                            <div style={{ fontSize:9, letterSpacing:'.1em', color:'#6f6c63',
                              textTransform:'uppercase', marginBottom:5 }}>{field.label}</div>
                            {field.type === 'textarea'
                              ? <textarea
                                  value={content[section.key]?.[field.f] || ''}
                                  onChange={e => updateField(section.key, field.f, e.target.value)}
                                  rows={3}
                                  style={{ ...inputStyle }}
                                />
                              : <input
                                  type="text"
                                  value={content[section.key]?.[field.f] || ''}
                                  onChange={e => updateField(section.key, field.f, e.target.value)}
                                  style={{ ...inputStyle }}
                                />
                            }
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* ── TIPOGRAFÍA ── */}
              {tab === 'type' && (
                <div style={{ flex:1, overflowY:'auto', padding:'18px',
                  scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>
                  <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                    <div style={{ fontSize:9, letterSpacing:'.15em', color:'#6f6c63', textTransform:'uppercase' }}>
                      // Fuente activa · {EDITOR_PAGE_LABELS[currentPage]}
                    </div>
                    <div style={{ padding:'12px 14px', background:'#1a1a1d', border:'1px solid #2a2a2e', borderRadius:8 }}>
                      <div style={{ fontSize:9, color:'var(--accent)', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:8 }}>Página actual</div>
                      <select value={tweakState?.fonts?.[currentPage] || 'default'}
                        onChange={e => setFont(currentPage, e.target.value)}
                        style={{ background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e',
                          borderRadius:6, ...mono, fontSize:10, padding:'7px 10px', cursor:'pointer', width:'100%' }}>
                        {EDITOR_FONT_REGISTRY.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                      </select>
                    </div>
                    <div style={{ fontSize:9, letterSpacing:'.14em', color:'#6f6c63', textTransform:'uppercase' }}>// Todas las páginas</div>
                    {Object.entries(EDITOR_PAGE_LABELS).map(([p, label]) => (
                      <div key={p} style={{ display:'grid', gridTemplateColumns:'110px 1fr', gap:10, alignItems:'center' }}>
                        <span style={{ fontSize:9, letterSpacing:'.1em', color:'#9c988c', textTransform:'uppercase' }}>{label}</span>
                        <select value={tweakState?.fonts?.[p] || 'default'} onChange={e => setFont(p, e.target.value)}
                          style={{ background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e',
                            borderRadius:6, ...mono, fontSize:9, padding:'5px 8px', cursor:'pointer', width:'100%' }}>
                          {EDITOR_FONT_REGISTRY.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── COLORES ── */}
              {tab === 'colors' && (
                <div style={{ flex:1, overflowY:'auto', padding:'18px',
                  scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>
                  <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
                    <div>
                      <div style={{ fontSize:9, letterSpacing:'.15em', color:'#6f6c63', textTransform:'uppercase', marginBottom:10 }}>// Accent global</div>
                      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                        <EdColorSwatch value={tweakState?.accent || '#ff3b1f'}
                          onChange={v => { setTweak('accent', v); toast_('Accent actualizado'); }} />
                        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                          {['#ff3b1f','#ffd24a','#3a6a4f','#ff5a3d','#1151ff','#ed1aa0','#00DC50','#f7f56a'].map(col => (
                            <button key={col} onClick={() => { setTweak('accent', col); toast_('Accent actualizado'); }}
                              style={{ width:22, height:22, borderRadius:99, background:col, border:'2px solid',
                                borderColor:tweakState?.accent===col?'#f4f1ea':'transparent', cursor:'pointer', padding:0 }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ height:1, background:'#2a2a2e' }} />
                    {Object.entries(EDITOR_CASE_COLORS).map(([pk, cfg]) => (
                      <div key={pk}>
                        <div style={{ fontSize:9, letterSpacing:'.13em', color:'#9c988c', textTransform:'uppercase', marginBottom:10 }}>// {cfg.label}</div>
                        <div style={{ display:'flex', flexWrap:'wrap', gap:14 }}>
                          {cfg.keys.map(ck => (
                            <div key={ck} style={{ display:'flex', alignItems:'center', gap:7 }}>
                              <EdColorSwatch value={getColor(pk, ck)} onChange={v => setColor(pk, ck, v)} />
                              <span style={{ fontSize:9, letterSpacing:'.1em', color:'#6f6c63', textTransform:'uppercase' }}>{ck}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── LAYOUT soon ── */}
              {tab === 'layout' && (
                <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center',
                  justifyContent:'center', gap:10, color:'#3a3a3e' }}>
                  <div style={{ fontSize:32 }}>⬡</div>
                  <div style={{ fontSize:9, letterSpacing:'.16em', textTransform:'uppercase' }}>Layout editor · coming soon</div>
                </div>
              )}
            </div>

            {/* footer */}
            <div style={{ padding:'9px 18px', borderTop:'1px solid #2a2a2e',
              display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
              <span style={{ fontSize:9, letterSpacing:'.1em', color:'#3a3a3e', textTransform:'uppercase' }}>
                Los cambios de texto son en vivo · Exporta content.js y súbelo a GitHub para publicar
              </span>
              <span style={{ fontSize:9, letterSpacing:'.1em', color:'#3a3a3e', textTransform:'uppercase' }}>v2.0</span>
            </div>
          </div>
        </>
      )}

      {toast && (
        <div style={{ position:'fixed', bottom:28, left:'50%', transform:'translateX(-50%)',
          zIndex:9999, background:'#f4f1ea', color:'#0e0e10',
          ...mono, fontSize:10, letterSpacing:'.14em', textTransform:'uppercase',
          padding:'8px 20px', borderRadius:9999,
          boxShadow:'0 8px 32px rgba(0,0,0,.3)', pointerEvents:'none' }}>{toast}</div>
      )}
    </>
  );
}

window.EditModePanel = EditModePanel;
