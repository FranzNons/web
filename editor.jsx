/* editor.jsx v2 - Edit Mode - Cmd/Ctrl+E */

const EDITOR_FONT_OPTIONS = [
  { id:'default',   label:'Default brand' },
  { id:'fraunces',  label:'Fraunces serif' },
  { id:'recoleta',  label:'Recoleta FEMSA' },
  { id:'rfrufo',    label:'RF Rufo Jurame' },
  { id:'dmsans',    label:'DM Sans Tonico' },
  { id:'inter',     label:'Inter sans' },
  { id:'bebas',     label:'Bebas Neue display' },
  { id:'jetbrains', label:'JetBrains Mono' },
];

const EDITOR_PAGES = {
  home:'Home', creative:'Creative', marketing:'Marketing',
  'case-jurame':'Jurame', 'case-protect':'Protect',
  'case-tonico':'Tonico', 'case-femsa':'FEMSA',
};

const EDITOR_COLORS = {
  'case-jurame':  { label:'Jurame',  keys:['bg','ink','gold'],          defaults:{ bg:'#f2f3f0', ink:'#202d3f', gold:'#ab8d3a' } },
  'case-protect': { label:'Protect', keys:['bg','ink','signal','deep'], defaults:{ bg:'#0054D1', ink:'#ffffff', signal:'#00DC50', deep:'#001a44' } },
  'case-tonico':  { label:'Tonico',  keys:['bg','ink','signal'],        defaults:{ bg:'#101010', ink:'#fdfdfd', signal:'#f7f56a' } },
  'case-femsa':   { label:'FEMSA',   keys:['bg','ink','signal','soft'], defaults:{ bg:'#cecece', ink:'#0a0a0a', signal:'#ffe944', soft:'#e5e5e5' } },
};

const TEXT_DEFS = [
  { key:'home', label:'Home', fields:[
    { f:'name_line1',   label:'Nombre 1',    type:'text' },
    { f:'name_line2',   label:'Nombre 2',    type:'text' },
    { f:'availability', label:'Disponibilidad', type:'text' },
    { f:'bio',          label:'Bio',         type:'area' },
    { f:'email',        label:'Email',       type:'text' },
    { f:'phone',        label:'Telefono',    type:'text' },
    { f:'cv_label',     label:'Label CV',    type:'text' },
    { f:'overlay_sub',  label:'Overlay sub', type:'text' },
  ]},
  { key:'creative', label:'Creative', fields:[
    { f:'section_label', label:'Label seccion', type:'text' },
    { f:'headline',      label:'Titular',       type:'area' },
    { f:'story_p1',      label:'Historia p1',   type:'area' },
    { f:'story_p2',      label:'Historia p2',   type:'area' },
  ]},
  { key:'marketing', label:'Marketing', fields:[
    { f:'section_label', label:'Label seccion', type:'text' },
    { f:'headline',      label:'Titular',       type:'area' },
    { f:'story_p1',      label:'Historia p1',   type:'area' },
    { f:'story_p2',      label:'Historia p2',   type:'area' },
  ]},
  { key:'jurame', label:'Jurame', fields:[
    { f:'label',           label:'Label cabecera', type:'text' },
    { f:'headline',        label:'Titular',        type:'area' },
    { f:'brief',           label:'Brief',          type:'area' },
    { f:'rol',             label:'Rol',            type:'text' },
    { f:'equipo',          label:'Equipo',         type:'text' },
    { f:'entregables',     label:'Entregables',    type:'text' },
    { f:'copy_etiqueta',   label:'Copy etiqueta',  type:'area' },
    { f:'stat_number',     label:'Numero stat',    type:'text' },
    { f:'stat_label',      label:'Label stat',     type:'text' },
    { f:'lema',            label:'Lema',           type:'area' },
  ]},
  { key:'protect', label:'Protect', fields:[
    { f:'label',              label:'Label cabecera',    type:'text' },
    { f:'headline',           label:'Titular',           type:'area' },
    { f:'brief',              label:'Brief',             type:'area' },
    { f:'dashboard_headline', label:'Dashboard headline',type:'text' },
    { f:'naming_tiers',       label:'Naming tiers',      type:'text' },
    { f:'naming_sub',         label:'Naming sub',        type:'text' },
    { f:'stat_number',        label:'Numero stat',       type:'text' },
    { f:'stat_label',         label:'Label stat',        type:'text' },
  ]},
  { key:'tonico', label:'Tonico', fields:[
    { f:'label',      label:'Label cabecera', type:'text' },
    { f:'headline',   label:'Titular',        type:'area' },
    { f:'brief',      label:'Brief',          type:'area' },
    { f:'rol',        label:'Rol',            type:'text' },
    { f:'scope',      label:'Scope',          type:'text' },
    { f:'cadence',    label:'Cadence',        type:'text' },
    { f:'stat_number',label:'Numero stat',    type:'text' },
    { f:'stat_label', label:'Label stat',     type:'text' },
    { f:'note',       label:'Nota',           type:'area' },
  ]},
  { key:'femsa', label:'FEMSA', fields:[
    { f:'label',            label:'Label cabecera',   type:'text' },
    { f:'headline',         label:'Titular',          type:'area' },
    { f:'brief',            label:'Brief',            type:'area' },
    { f:'rol',              label:'Rol',              type:'text' },
    { f:'equipo',           label:'Equipo',           type:'text' },
    { f:'entregables',      label:'Entregables',      type:'text' },
    { f:'manifesto_quote',  label:'Quote manifesto',  type:'area' },
    { f:'manifesto_source', label:'Fuente manifesto', type:'text' },
  ]},
];

function exportContent(content) {
  const json = JSON.stringify(content, null, 2);
  const src = '/* CONTENT.JS - Exported ' + new Date().toLocaleDateString() + ' */\nconst SITE_CONTENT = ' + json + ';\n\nwindow.SITE_CONTENT = SITE_CONTENT;\n';
  const blob = new Blob([src], { type:'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'content.js'; a.click();
  URL.revokeObjectURL(url);
}

function EdSwatch({ value, onChange }) {
  return (
    <label style={{ position:'relative', cursor:'pointer', display:'inline-block' }}>
      <div style={{ width:26, height:26, borderRadius:5, background:value, border:'2px solid #2a2a2e' }} />
      <input type="color" value={value} onChange={e => onChange(e.target.value)}
        style={{ position:'absolute', inset:0, opacity:0, width:'100%', height:'100%', cursor:'pointer' }} />
    </label>
  );
}

function EditModePanel({ currentPage, tweakState, setTweak }) {
  const [open, setOpen]     = React.useState(false);
  const [tab, setTab]       = React.useState('texts');
  const [section, setSection] = React.useState('home');
  const [toast, setToast]   = React.useState(null);
  const [content, setContent] = React.useState(() => JSON.parse(JSON.stringify(window.SITE_CONTENT)));
  const [colorOv, setColorOv] = React.useState({});

  React.useEffect(() => { window.SITE_CONTENT = content; }, [content]);

  React.useEffect(() => {
    const h = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') { e.preventDefault(); setOpen(o => !o); }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const msg = (m) => { setToast(m); setTimeout(() => setToast(null), 2000); };

  const updateField = (sec, field, val) => {
    setContent(prev => ({ ...prev, [sec]: { ...prev[sec], [field]: val } }));
  };

  const setFont = (page, id) => {
    setTweak('fonts', { ...(tweakState && tweakState.fonts ? tweakState.fonts : {}), [page]: id });
    msg('Fuente guardada');
  };

  const getCol = (pk, ck) => colorOv[pk] && colorOv[pk][ck] ? colorOv[pk][ck] : (EDITOR_COLORS[pk] ? EDITOR_COLORS[pk].defaults[ck] : '#000');
  const setCol = (pk, ck, v) => {
    setColorOv(p => ({ ...p, [pk]: { ...(p[pk] || EDITOR_COLORS[pk].defaults), [ck]: v } }));
    document.documentElement.style.setProperty('--sn-' + pk + '-' + ck, v);
    msg('Color actualizado');
  };

  const mono = '"JetBrains Mono", monospace';
  const inputBase = { background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e', borderRadius:6, fontFamily:'Inter, sans-serif', fontSize:12, padding:'7px 10px', width:'100%', lineHeight:1.5, outline:'none', boxSizing:'border-box' };

  const tabs = [
    { id:'texts',  label:'Textos' },
    { id:'type',   label:'Tipografia' },
    { id:'colors', label:'Colores' },
  ];

  if (!open) return (
    <div style={{ position:'fixed', bottom:16, right:20, zIndex:9999, pointerEvents:'none',
      fontFamily:mono, fontSize:9, letterSpacing:'.14em', textTransform:'uppercase',
      color:'var(--mute)', opacity:.4 }}>Cmd+E Edit</div>
  );

  return (
    <div>
      <div onClick={() => setOpen(false)} style={{ position:'fixed', inset:0, zIndex:9000,
        background:'rgba(14,14,16,.5)', backdropFilter:'blur(3px)' }} />

      <div style={{ position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
        zIndex:9001, width:'min(700px, 94vw)', maxHeight:'85vh',
        display:'flex', flexDirection:'column',
        background:'#0e0e10', border:'1px solid #2a2a2e', borderRadius:16,
        boxShadow:'0 40px 100px rgba(0,0,0,.65)', overflow:'hidden',
        fontFamily:mono }}>

        <div style={{ padding:'13px 18px', borderBottom:'1px solid #2a2a2e',
          display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:8, height:8, borderRadius:99, background:'var(--accent)', display:'inline-block' }} />
            <span style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#f4f1ea' }}>
              EDIT MODE
            </span>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <button onClick={() => { exportContent(content); msg('content.js descargado'); }}
              style={{ background:'var(--accent)', border:'none', color:'#fff',
                fontFamily:mono, fontSize:9, letterSpacing:'.12em', padding:'5px 14px',
                borderRadius:9999, cursor:'pointer', textTransform:'uppercase', fontWeight:600 }}>
              Exportar content.js
            </button>
            <button onClick={() => setOpen(false)} style={{ background:'transparent',
              border:'1px solid #2a2a2e', color:'#9c988c', fontFamily:mono,
              fontSize:9, letterSpacing:'.1em', padding:'4px 10px',
              borderRadius:9999, cursor:'pointer', textTransform:'uppercase' }}>Cerrar</button>
          </div>
        </div>

        <div style={{ display:'flex', borderBottom:'1px solid #2a2a2e', flexShrink:0 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex:1, padding:'10px 0',
              background: tab === t.id ? '#1a1a1d' : 'transparent',
              border:'none',
              borderBottom: tab === t.id ? '2px solid var(--accent)' : '2px solid transparent',
              color: tab === t.id ? '#f4f1ea' : '#6f6c63',
              fontFamily:mono, fontSize:9, letterSpacing:'.13em', textTransform:'uppercase',
              cursor:'pointer' }}>{t.label}</button>
          ))}
        </div>

        <div style={{ flex:1, overflow:'hidden', display:'flex' }}>

          {tab === 'texts' && (
            <React.Fragment>
              <div style={{ width:130, flexShrink:0, borderRight:'1px solid #2a2a2e',
                display:'flex', flexDirection:'column', overflowY:'auto' }}>
                {TEXT_DEFS.map(s => (
                  <button key={s.key} onClick={() => setSection(s.key)} style={{
                    padding:'10px 12px',
                    background: section === s.key ? '#1a1a1d' : 'transparent',
                    border:'none',
                    borderLeft: section === s.key ? '2px solid var(--accent)' : '2px solid transparent',
                    color: section === s.key ? '#f4f1ea' : '#6f6c63',
                    fontFamily:mono, fontSize:9, letterSpacing:'.1em', textTransform:'uppercase',
                    cursor:'pointer', textAlign:'left', width:'100%' }}>{s.label}</button>
                ))}
              </div>

              <div style={{ flex:1, overflowY:'auto', padding:'18px',
                scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>
                {TEXT_DEFS.filter(s => s.key === section).map(sec => (
                  <div key={sec.key} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                    <div style={{ fontSize:9, letterSpacing:'.14em', color:'var(--accent)', textTransform:'uppercase', marginBottom:4 }}>
                      {sec.label}
                    </div>
                    {sec.fields.map(field => (
                      <div key={field.f}>
                        <div style={{ fontSize:9, letterSpacing:'.1em', color:'#6f6c63',
                          textTransform:'uppercase', marginBottom:5 }}>{field.label}</div>
                        {field.type === 'area'
                          ? <textarea
                              value={(content[sec.key] && content[sec.key][field.f]) || ''}
                              onChange={e => updateField(sec.key, field.f, e.target.value)}
                              rows={3}
                              style={{ ...inputBase, resize:'vertical' }}
                            />
                          : <input
                              type="text"
                              value={(content[sec.key] && content[sec.key][field.f]) || ''}
                              onChange={e => updateField(sec.key, field.f, e.target.value)}
                              style={{ ...inputBase }}
                            />
                        }
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {tab === 'type' && (
            <div style={{ flex:1, overflowY:'auto', padding:'18px',
              scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <div style={{ fontSize:9, letterSpacing:'.14em', color:'#6f6c63', textTransform:'uppercase' }}>
                  Fuente por pagina
                </div>
                {Object.entries(EDITOR_PAGES).map(([p, label]) => (
                  <div key={p} style={{ display:'grid', gridTemplateColumns:'110px 1fr', gap:10, alignItems:'center' }}>
                    <span style={{ fontSize:9, letterSpacing:'.1em', color:'#9c988c', textTransform:'uppercase' }}>{label}</span>
                    <select
                      value={(tweakState && tweakState.fonts && tweakState.fonts[p]) ? tweakState.fonts[p] : 'default'}
                      onChange={e => setFont(p, e.target.value)}
                      style={{ background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e',
                        borderRadius:6, fontFamily:mono, fontSize:9, padding:'5px 8px',
                        cursor:'pointer', width:'100%' }}>
                      {EDITOR_FONT_OPTIONS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'colors' && (
            <div style={{ flex:1, overflowY:'auto', padding:'18px',
              scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <div>
                  <div style={{ fontSize:9, letterSpacing:'.14em', color:'#6f6c63', textTransform:'uppercase', marginBottom:10 }}>
                    Accent global
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <EdSwatch value={(tweakState && tweakState.accent) ? tweakState.accent : '#ff3b1f'}
                      onChange={v => { setTweak('accent', v); msg('Accent actualizado'); }} />
                    <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                      {['#ff3b1f','#ffd24a','#3a6a4f','#ff5a3d','#1151ff','#ed1aa0','#00DC50','#f7f56a'].map(col => (
                        <button key={col} onClick={() => { setTweak('accent', col); msg('Accent actualizado'); }}
                          style={{ width:22, height:22, borderRadius:99, background:col,
                            border: (tweakState && tweakState.accent === col) ? '2px solid #f4f1ea' : '2px solid transparent',
                            cursor:'pointer', padding:0 }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ height:1, background:'#2a2a2e' }} />
                {Object.entries(EDITOR_COLORS).map(([pk, cfg]) => (
                  <div key={pk}>
                    <div style={{ fontSize:9, letterSpacing:'.12em', color:'#9c988c', textTransform:'uppercase', marginBottom:8 }}>
                      {cfg.label}
                    </div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
                      {cfg.keys.map(ck => (
                        <div key={ck} style={{ display:'flex', alignItems:'center', gap:6 }}>
                          <EdSwatch value={getCol(pk, ck)} onChange={v => setCol(pk, ck, v)} />
                          <span style={{ fontSize:9, letterSpacing:'.1em', color:'#6f6c63', textTransform:'uppercase' }}>{ck}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ padding:'9px 18px', borderTop:'1px solid #2a2a2e',
          display:'flex', justifyContent:'space-between', flexShrink:0 }}>
          <span style={{ fontSize:9, color:'#3a3a3e', textTransform:'uppercase', letterSpacing:'.1em' }}>
            Edita textos en vivo. Exporta content.js y subelo a GitHub para publicar.
          </span>
        </div>
      </div>

      {toast && (
        <div style={{ position:'fixed', bottom:28, left:'50%', transform:'translateX(-50%)',
          zIndex:9999, background:'#f4f1ea', color:'#0e0e10',
          fontFamily:mono, fontSize:10, letterSpacing:'.14em', textTransform:'uppercase',
          padding:'8px 20px', borderRadius:9999,
          boxShadow:'0 8px 32px rgba(0,0,0,.3)', pointerEvents:'none' }}>{toast}</div>
      )}
    </div>
  );
}

window.EditModePanel = EditModePanel;
