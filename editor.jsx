/* =====================================================================
 * EDITOR.JSX — Edit Mode · Cmd/Ctrl + E to toggle
 * Se integra dentro de App via window.__mountEditor
 * ===================================================================== */

const EDITOR_CASE_COLORS = {
  'case-jurame':  { label: 'Júrame',  keys: ['bg','ink','gold'],         defaults: { bg:'#f2f3f0', ink:'#202d3f', gold:'#ab8d3a' } },
  'case-protect': { label: 'Protect', keys: ['bg','ink','signal','deep'],defaults: { bg:'#0054D1', ink:'#ffffff', signal:'#00DC50', deep:'#001a44' } },
  'case-tonico':  { label: 'Tónico',  keys: ['bg','ink','signal'],       defaults: { bg:'#101010', ink:'#fdfdfd', signal:'#f7f56a' } },
  'case-femsa':   { label: 'FEMSA',   keys: ['bg','ink','signal','soft'],defaults: { bg:'#cecece', ink:'#0a0a0a', signal:'#ffe944', soft:'#e5e5e5' } },
};

const EDITOR_IMAGE_SLOTS = [
  { key: 'portrait',     label: 'Home · Portrait',      hint: 'Reemplaza el placeholder. Recomendado: 4:5.' },
  { key: 'jurame_img',   label: 'Júrame · Imagen',      hint: 'Imagen en el panel de casos.' },
  { key: 'protect_img',  label: 'Protect · Imagen',     hint: 'Imagen en el panel de casos.' },
  { key: 'tonico_img',   label: 'Tónico · Imagen',      hint: 'Imagen en el panel de casos.' },
  { key: 'femsa_img',    label: 'FEMSA · Imagen',        hint: 'Imagen editorial de la fundación.' },
];

const EDITOR_FONT_REGISTRY = [
  { id: 'default',   label: 'Default · brand' },
  { id: 'fraunces',  label: 'Fraunces · serif' },
  { id: 'recoleta',  label: 'Recoleta · FEMSA' },
  { id: 'rfrufo',    label: 'RF Rufo · Júrame' },
  { id: 'dmsans',    label: 'DM Sans · Tónico' },
  { id: 'inter',     label: 'Inter · sans' },
  { id: 'bebas',     label: 'Bebas Neue · display' },
  { id: 'jetbrains', label: 'JetBrains Mono' },
];

const EDITOR_PAGE_LABELS = {
  'home': 'Home', 'creative': 'Creative', 'marketing': 'Marketing',
  'case-jurame': 'Júrame', 'case-protect': 'Protect',
  'case-tonico': 'Tónico', 'case-femsa': 'FEMSA',
};

/* ---- localStorage helpers ---- */
function snSaveImg(key, dataUrl) {
  try { localStorage.setItem('sn_img_' + key, dataUrl); } catch(e) {}
}
function snLoadImg(key) {
  try { return localStorage.getItem('sn_img_' + key); } catch(e) { return null; }
}
function snClearImg(key) {
  try { localStorage.removeItem('sn_img_' + key); } catch(e) {}
}
function snSaveColors(pageKey, colors) {
  try { localStorage.setItem('sn_colors_' + pageKey, JSON.stringify(colors)); } catch(e) {}
}
function snLoadColors(pageKey) {
  try { const r = localStorage.getItem('sn_colors_' + pageKey); return r ? JSON.parse(r) : null; } catch(e) { return null; }
}
/* expose loaders globally so pages can use them later */
window.__snLoadImg    = snLoadImg;
window.__snLoadColors = snLoadColors;

/* ---- ColorSwatch ---- */
function EdColorSwatch({ value, onChange }) {
  return (
    <label style={{ position:'relative', cursor:'pointer', display:'inline-block' }}>
      <div style={{ width:28, height:28, borderRadius:6, background:value, border:'2px solid #2a2a2e' }} />
      <input type="color" value={value} onChange={e => onChange(e.target.value)}
        style={{ position:'absolute', inset:0, opacity:0, width:'100%', height:'100%', cursor:'pointer' }} />
    </label>
  );
}

/* ---- ImageSlot ---- */
function EdImageSlot({ slot, value, onUpload, onClear }) {
  const ref = React.useRef();
  return (
    <div style={{ display:'grid', gridTemplateColumns:'72px 1fr', gap:12, padding:'12px 14px',
      background:'#1a1a1d', border:'1px solid #2a2a2e', borderRadius:8, alignItems:'center' }}>
      <div onClick={() => ref.current.click()} style={{ width:72, height:54, borderRadius:4,
        background: value ? 'transparent' : '#0e0e10', border:'1px solid #2a2a2e',
        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
        {value
          ? <img src={value} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          : <span style={{ fontSize:20, color:'#3a3a3e' }}>+</span>}
      </div>
      <div>
        <div style={{ fontFamily:'"JetBrains Mono",monospace', fontSize:9, letterSpacing:'.12em',
          textTransform:'uppercase', color:'#f4f1ea', marginBottom:3 }}>{slot.label}</div>
        <div style={{ fontSize:11, color:'#6f6c63', lineHeight:1.4, marginBottom:8,
          fontFamily:'Inter,sans-serif' }}>{slot.hint}</div>
        <div style={{ display:'flex', gap:6 }}>
          <button onClick={() => ref.current.click()} style={{ background:'transparent',
            border:'1px solid #3a3a3e', color:'#9c988c', fontFamily:'"JetBrains Mono",monospace',
            fontSize:8, letterSpacing:'.12em', padding:'4px 10px', borderRadius:9999,
            cursor:'pointer', textTransform:'uppercase' }}>{value ? 'Cambiar' : 'Subir'}</button>
          {value && <button onClick={onClear} style={{ background:'transparent',
            border:'1px solid #3a3a3e', color:'#6f6c63', fontFamily:'"JetBrains Mono",monospace',
            fontSize:8, letterSpacing:'.12em', padding:'4px 10px', borderRadius:9999,
            cursor:'pointer', textTransform:'uppercase' }}>Eliminar</button>}
        </div>
        <input ref={ref} type="file" accept="image/*" style={{ display:'none' }}
          onChange={e => e.target.files[0] && onUpload(e.target.files[0])} />
      </div>
    </div>
  );
}

/* ---- Main Editor panel ---- */
function EditModePanel({ currentPage, tweakState, setTweak }) {
  const [open, setOpen]   = React.useState(false);
  const [tab, setTab]     = React.useState('type');
  const [toast, setToast] = React.useState(null);

  const [images, setImages] = React.useState(() => {
    const obj = {};
    EDITOR_IMAGE_SLOTS.forEach(s => { const v = snLoadImg(s.key); if (v) obj[s.key] = v; });
    return obj;
  });

  const [colorOverrides, setColorOverrides] = React.useState(() => {
    const obj = {};
    Object.keys(EDITOR_CASE_COLORS).forEach(k => { const v = snLoadColors(k); if (v) obj[k] = v; });
    return obj;
  });

  /* keyboard shortcut */
  React.useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const toast_ = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2000); };

  /* font */
  const activeFontId = tweakState?.fonts?.[currentPage] || 'default';
  const setFont = (page, id) => { setTweak('fonts', { ...(tweakState?.fonts || {}), [page]: id }); toast_('Fuente guardada'); };

  /* color */
  const getColor = (pk, ck) => colorOverrides[pk]?.[ck] ?? EDITOR_CASE_COLORS[pk]?.defaults[ck] ?? '#000';
  const setColor = (pk, ck, v) => {
    const updated = { ...(colorOverrides[pk] || EDITOR_CASE_COLORS[pk].defaults), [ck]: v };
    setColorOverrides(p => ({ ...p, [pk]: updated }));
    snSaveColors(pk, updated);
    document.documentElement.style.setProperty(`--sn-${pk}-${ck}`, v);
    toast_('Color guardado');
  };
  const resetColors = (pk) => {
    localStorage.removeItem('sn_colors_' + pk);
    setColorOverrides(p => { const n = {...p}; delete n[pk]; return n; });
    toast_('Colores restaurados');
  };

  /* images */
  const uploadImg = (key, file) => {
    const reader = new FileReader();
    reader.onload = (e) => { snSaveImg(key, e.target.result); setImages(p => ({ ...p, [key]: e.target.result })); toast_('Imagen guardada ✓'); };
    reader.readAsDataURL(file);
  };
  const clearImg = (key) => { snClearImg(key); setImages(p => { const n = {...p}; delete n[key]; return n; }); toast_('Imagen eliminada'); };

  const tabs = [
    { id:'type',   label:'Tipografía' },
    { id:'colors', label:'Colores' },
    { id:'images', label:'Imágenes' },
    { id:'layout', label:'Layout ·· soon', disabled:true },
  ];

  const mono = { fontFamily:'"JetBrains Mono",monospace' };

  return (
    <>
      {/* hint when closed */}
      {!open && (
        <div style={{ position:'fixed', bottom:16, right:20, zIndex:9999, pointerEvents:'none',
          ...mono, fontSize:9, letterSpacing:'.14em', textTransform:'uppercase',
          color:'var(--mute)', opacity:.4 }}>⌘E · Edit</div>
      )}

      {!open ? null : (
        <>
          {/* backdrop */}
          <div onClick={() => setOpen(false)} style={{ position:'fixed', inset:0, zIndex:9000,
            background:'rgba(14,14,16,.5)', backdropFilter:'blur(3px)' }} />

          {/* panel */}
          <div style={{ position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
            zIndex:9001, width:'min(660px,92vw)', maxHeight:'82vh',
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
              <button onClick={() => setOpen(false)} style={{ background:'transparent',
                border:'1px solid #2a2a2e', color:'#9c988c', ...mono,
                fontSize:9, letterSpacing:'.1em', padding:'4px 10px',
                borderRadius:9999, cursor:'pointer', textTransform:'uppercase' }}>ESC · Cerrar</button>
            </div>

            {/* tabs */}
            <div style={{ display:'flex', borderBottom:'1px solid #2a2a2e', flexShrink:0 }}>
              {tabs.map(t => (
                <button key={t.id} onClick={() => !t.disabled && setTab(t.id)} style={{
                  flex:1, padding:'10px 0', background: tab===t.id ? '#1a1a1d' : 'transparent',
                  border:'none', borderBottom: tab===t.id ? '2px solid var(--accent)' : '2px solid transparent',
                  color: t.disabled ? '#2a2a2e' : (tab===t.id ? '#f4f1ea' : '#6f6c63'),
                  ...mono, fontSize:9, letterSpacing:'.13em', textTransform:'uppercase',
                  cursor: t.disabled ? 'not-allowed' : 'pointer' }}>{t.label}</button>
              ))}
            </div>

            {/* body */}
            <div style={{ flex:1, overflowY:'auto', padding:'18px',
              scrollbarWidth:'thin', scrollbarColor:'#2a2a2e transparent' }}>

              {/* ── TIPOGRAFÍA ── */}
              {tab === 'type' && (
                <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                  <div style={{ fontSize:9, letterSpacing:'.15em', color:'#6f6c63', textTransform:'uppercase' }}>
                    // Fuente activa · {EDITOR_PAGE_LABELS[currentPage]}
                  </div>
                  <div style={{ padding:'12px 14px', background:'#1a1a1d', border:'1px solid #2a2a2e', borderRadius:8 }}>
                    <div style={{ fontSize:9, color:'var(--accent)', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:8 }}>
                      Página actual
                    </div>
                    <select value={activeFontId} onChange={e => setFont(currentPage, e.target.value)}
                      style={{ background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e',
                        borderRadius:6, ...mono, fontSize:10, letterSpacing:'.1em',
                        padding:'7px 10px', cursor:'pointer', width:'100%' }}>
                      {EDITOR_FONT_REGISTRY.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                    </select>
                  </div>

                  <div style={{ fontSize:9, letterSpacing:'.14em', color:'#6f6c63', textTransform:'uppercase' }}>// Todas las páginas</div>
                  {Object.entries(EDITOR_PAGE_LABELS).map(([p, label]) => (
                    <div key={p} style={{ display:'grid', gridTemplateColumns:'120px 1fr', gap:10, alignItems:'center' }}>
                      <span style={{ fontSize:9, letterSpacing:'.1em', color:'#9c988c', textTransform:'uppercase' }}>{label}</span>
                      <select value={tweakState?.fonts?.[p] || 'default'} onChange={e => setFont(p, e.target.value)}
                        style={{ background:'#0e0e10', color:'#f4f1ea', border:'1px solid #2a2a2e',
                          borderRadius:6, ...mono, fontSize:9, letterSpacing:'.08em',
                          padding:'5px 8px', cursor:'pointer', width:'100%' }}>
                        {EDITOR_FONT_REGISTRY.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              )}

              {/* ── COLORES ── */}
              {tab === 'colors' && (
                <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
                  {/* accent */}
                  <div>
                    <div style={{ fontSize:9, letterSpacing:'.15em', color:'#6f6c63', textTransform:'uppercase', marginBottom:10 }}>// Accent global</div>
                    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <EdColorSwatch value={tweakState?.accent || '#ff3b1f'}
                        onChange={v => { setTweak('accent', v); toast_('Accent actualizado'); }} />
                      <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                        {['#ff3b1f','#ffd24a','#3a6a4f','#ff5a3d','#1151ff','#ed1aa0','#00DC50','#f7f56a'].map(c => (
                          <button key={c} onClick={() => { setTweak('accent', c); toast_('Accent actualizado'); }}
                            style={{ width:22, height:22, borderRadius:99, background:c, border:'2px solid',
                              borderColor: tweakState?.accent === c ? '#f4f1ea' : 'transparent',
                              cursor:'pointer', padding:0 }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ height:1, background:'#2a2a2e' }} />

                  {/* per-case */}
                  {Object.entries(EDITOR_CASE_COLORS).map(([pk, cfg]) => (
                    <div key={pk}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
                        <div style={{ fontSize:9, letterSpacing:'.13em', color:'#9c988c', textTransform:'uppercase' }}>// {cfg.label}</div>
                        {colorOverrides[pk] && (
                          <button onClick={() => resetColors(pk)} style={{ background:'transparent',
                            border:'1px solid #2a2a2e', color:'#6f6c63', ...mono,
                            fontSize:8, letterSpacing:'.1em', padding:'3px 8px',
                            borderRadius:9999, cursor:'pointer', textTransform:'uppercase' }}>Reset</button>
                        )}
                      </div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
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
              )}

              {/* ── IMÁGENES ── */}
              {tab === 'images' && (
                <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                  <div style={{ fontSize:9, letterSpacing:'.14em', color:'#6f6c63', textTransform:'uppercase', marginBottom:4 }}>
                    // Las imágenes se guardan en este navegador. Para publicar, reemplaza los archivos en assets/.
                  </div>
                  {EDITOR_IMAGE_SLOTS.map(slot => (
                    <EdImageSlot key={slot.key} slot={slot}
                      value={images[slot.key] || null}
                      onUpload={file => uploadImg(slot.key, file)}
                      onClear={() => clearImg(slot.key)} />
                  ))}
                </div>
              )}

              {/* ── LAYOUT ── */}
              {tab === 'layout' && (
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center',
                  justifyContent:'center', minHeight:180, gap:10, color:'#3a3a3e' }}>
                  <div style={{ fontSize:32 }}>⬡</div>
                  <div style={{ fontSize:9, letterSpacing:'.16em', textTransform:'uppercase' }}>Layout editor · coming soon</div>
                  <div style={{ fontSize:12, color:'#2a2a2e', maxWidth:280, textAlign:'center',
                    lineHeight:1.5, fontFamily:'Inter,sans-serif' }}>
                    Aquí podrás cambiar el grid y composición de cada cápsula sin tocar código.
                  </div>
                </div>
              )}
            </div>

            {/* footer */}
            <div style={{ padding:'9px 18px', borderTop:'1px solid #2a2a2e',
              display:'flex', justifyContent:'space-between', flexShrink:0 }}>
              <span style={{ fontSize:9, letterSpacing:'.11em', color:'#3a3a3e', textTransform:'uppercase' }}>⌘E · Toggle · ESC · Cerrar</span>
              <span style={{ fontSize:9, letterSpacing:'.11em', color:'#3a3a3e', textTransform:'uppercase' }}>SN EDIT MODE · v1.0</span>
            </div>
          </div>
        </>
      )}

      {/* toast */}
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

/* expose so App can render it inside its tree */
window.EditModePanel = EditModePanel;
