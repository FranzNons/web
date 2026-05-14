/* =====================================================================
 * EDITOR.JSX — Edit Mode · Cmd/Ctrl + E to toggle
 * Tabs: Typography · Colors · Images · Layout (coming soon)
 * Hooks into window.__tweakState (set by tweaks-panel.jsx useTweaks)
 * Images stored in localStorage as base64 under key  sn_img_{key}
 * ===================================================================== */

/* ---- tiny helpers ---- */
const EditorCtx = React.createContext(null);

const CASE_COLORS = {
  'case-jurame':  { label: 'Júrame',        keys: ['bg','ink','gold'],        defaults: { bg:'#f2f3f0', ink:'#202d3f', gold:'#ab8d3a' } },
  'case-protect': { label: 'Protect',       keys: ['bg','ink','signal','deep'],defaults: { bg:'#0054D1', ink:'#ffffff', signal:'#00DC50', deep:'#001a44' } },
  'case-tonico':  { label: 'Tónico',        keys: ['bg','ink','signal'],       defaults: { bg:'#101010', ink:'#fdfdfd', signal:'#f7f56a' } },
  'case-femsa':   { label: 'FEMSA',         keys: ['bg','ink','signal','soft'],defaults: { bg:'#cecece', ink:'#0a0a0a', signal:'#ffe944', soft:'#e5e5e5' } },
};

const IMAGE_SLOTS = [
  { key: 'portrait',          label: 'Home · Portrait',           hint: 'Reemplaza el placeholder de rayas en Home. Recomendado: 4:5.' },
  { key: 'jurame_cases',      label: 'Júrame · Cases photo',      hint: 'Foto de casos en el panel derecho.' },
  { key: 'protect_cases',     label: 'Protect · Cases photo',     hint: 'Foto de casos en el panel derecho.' },
  { key: 'tonico_cases',      label: 'Tónico · Cases photo',      hint: 'Foto de casos en el panel derecho.' },
  { key: 'femsa_cases',       label: 'FEMSA · Cases photo',       hint: 'Foto de casos en el panel derecho.' },
  { key: 'femsa_hq',          label: 'FEMSA · HQ photo',          hint: 'Foto editorial de la fundación.' },
];

const FONT_REGISTRY = [
  { id: 'default',    label: 'Default · brand',              stack: null },
  { id: 'fraunces',   label: 'Fraunces · editorial serif',   stack: 'Fraunces, Georgia, serif' },
  { id: 'recoleta',   label: 'Recoleta · FEMSA',             stack: 'Recoleta, Fraunces, Georgia, serif' },
  { id: 'rfrufo',     label: 'RF Rufo · Júrame',             stack: '"RF Rufo", Fraunces, serif' },
  { id: 'dmsans',     label: 'DM Sans · Tónico',             stack: '"DM Sans Local", "DM Sans", Inter, sans-serif' },
  { id: 'inter',      label: 'Inter · system sans',          stack: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif' },
  { id: 'bebas',      label: 'Bebas Neue · display',         stack: '"Bebas Neue", "Helvetica Neue", sans-serif' },
  { id: 'jetbrains',  label: 'JetBrains Mono',               stack: '"JetBrains Mono", ui-monospace, monospace' },
];

const PAGE_LABELS = {
  'home': 'Home', 'creative': 'Creative Director', 'marketing': 'Marketing & PM',
  'case-jurame': 'Júrame', 'case-protect': 'Protect', 'case-tonico': 'Tónico', 'case-femsa': 'FEMSA',
};
const ALL_PAGES = Object.keys(PAGE_LABELS);

/* ---- localStorage image helpers ---- */
function saveImage(key, dataUrl) {
  try { localStorage.setItem('sn_img_' + key, dataUrl); } catch(e) { console.warn('img save failed', e); }
}
function loadImage(key) {
  try { return localStorage.getItem('sn_img_' + key); } catch(e) { return null; }
}
function clearImage(key) {
  try { localStorage.removeItem('sn_img_' + key); } catch(e) {}
}

/* ---- color overrides stored in localStorage ---- */
function saveColors(pageKey, colors) {
  try { localStorage.setItem('sn_colors_' + pageKey, JSON.stringify(colors)); } catch(e) {}
}
function loadColors(pageKey) {
  try {
    const raw = localStorage.getItem('sn_colors_' + pageKey);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

/* expose image + color loaders globally so pages can use them */
window.__snLoadImage = loadImage;
window.__snLoadColors = loadColors;

/* =====================================================================
 * Main Editor component — mounts once, overlays everything
 * ===================================================================== */
function Editor({ currentPage, tweakState, setTweak }) {
  const [open, setOpen]     = React.useState(false);
  const [tab, setTab]       = React.useState('type');
  const [images, setImages] = React.useState(() => {
    const obj = {};
    IMAGE_SLOTS.forEach(s => { const v = loadImage(s.key); if (v) obj[s.key] = v; });
    return obj;
  });
  const [colorOverrides, setColorOverrides] = React.useState(() => {
    const obj = {};
    Object.keys(CASE_COLORS).forEach(k => { const v = loadColors(k); if (v) obj[k] = v; });
    return obj;
  });
  const [toast, setToast] = React.useState(null);

  /* keyboard shortcut */
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  /* font helpers */
  const activeFontId = (tweakState?.fonts?.[currentPage]) || 'default';
  const setFont = (pageKey, fontId) => {
    setTweak('fonts', { ...(tweakState?.fonts || {}), [pageKey]: fontId });
    showToast('Fuente actualizada');
  };

  /* color helpers */
  const getColor = (pageKey, colorKey) => {
    return colorOverrides[pageKey]?.[colorKey] ?? CASE_COLORS[pageKey]?.defaults[colorKey] ?? '#000';
  };
  const setColor = (pageKey, colorKey, value) => {
    const updated = { ...(colorOverrides[pageKey] || CASE_COLORS[pageKey].defaults), [colorKey]: value };
    setColorOverrides(prev => ({ ...prev, [pageKey]: updated }));
    saveColors(pageKey, updated);
    /* inject CSS var for live preview */
    document.documentElement.style.setProperty(`--sn-${pageKey}-${colorKey}`, value);
    showToast('Color guardado');
  };
  const resetColors = (pageKey) => {
    clearImage('sn_colors_' + pageKey);
    localStorage.removeItem('sn_colors_' + pageKey);
    const defaults = CASE_COLORS[pageKey].defaults;
    setColorOverrides(prev => { const n = {...prev}; delete n[pageKey]; return n; });
    Object.entries(defaults).forEach(([k,v]) => {
      document.documentElement.style.setProperty(`--sn-${pageKey}-${k}`, v);
    });
    showToast('Colores restaurados');
  };

  /* image helpers */
  const handleImageUpload = (slotKey, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      saveImage(slotKey, dataUrl);
      setImages(prev => ({ ...prev, [slotKey]: dataUrl }));
      showToast('Imagen guardada ✓');
    };
    reader.readAsDataURL(file);
  };
  const handleImageClear = (slotKey) => {
    clearImage(slotKey);
    setImages(prev => { const n = {...prev}; delete n[slotKey]; return n; });
    showToast('Imagen eliminada');
  };

  if (!open) return (
    <div style={{
      position: 'fixed', bottom: 16, right: 16, zIndex: 9999,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
      letterSpacing: '.14em', textTransform: 'uppercase',
      color: 'var(--mute)', opacity: .5, pointerEvents: 'none',
      userSelect: 'none',
    }}>
      ⌘E · Edit
    </div>
  );

  const tabs = [
    { id: 'type',   label: 'Tipografía' },
    { id: 'colors', label: 'Colores' },
    { id: 'images', label: 'Imágenes' },
    { id: 'layout', label: 'Layout ·· soon' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div onClick={() => setOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(14,14,16,0.45)',
        backdropFilter: 'blur(2px)',
      }} />

      {/* Panel */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9001,
        width: 'min(680px, 92vw)',
        maxHeight: '80vh',
        display: 'flex', flexDirection: 'column',
        background: '#0e0e10',
        border: '1px solid #2a2a2e',
        borderRadius: 16,
        boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        fontFamily: '"JetBrains Mono", monospace',
      }}>

        {/* Header */}
        <div style={{
          padding: '14px 20px',
          borderBottom: '1px solid #2a2a2e',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 8, height: 8, borderRadius: 99,
              background: 'var(--accent)',
              display: 'inline-block',
              boxShadow: '0 0 0 4px rgba(255,59,31,.2)',
            }} />
            <span style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: '#f4f1ea' }}>
              EDIT MODE · {PAGE_LABELS[currentPage] || currentPage}
            </span>
          </div>
          <button onClick={() => setOpen(false)} style={{
            background: 'transparent', border: '1px solid #2a2a2e',
            color: '#9c988c', fontSize: 10, letterSpacing: '.1em',
            padding: '4px 10px', borderRadius: 9999, cursor: 'pointer',
          }}>ESC · Cerrar</button>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', borderBottom: '1px solid #2a2a2e',
          flexShrink: 0,
        }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => t.id !== 'layout' && setTab(t.id)} style={{
              flex: 1, padding: '10px 0',
              background: tab === t.id ? '#1a1a1d' : 'transparent',
              border: 'none', borderBottom: tab === t.id ? '2px solid var(--accent)' : '2px solid transparent',
              color: tab === t.id ? '#f4f1ea' : '#6f6c63',
              fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase',
              cursor: t.id === 'layout' ? 'not-allowed' : 'pointer',
              transition: 'color .15s',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', scrollbarWidth: 'thin', scrollbarColor: '#2a2a2e transparent' }}>

          {/* ── TIPOGRAFÍA ── */}
          {tab === 'type' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ fontSize: 9, letterSpacing: '.16em', color: '#6f6c63', textTransform: 'uppercase', marginBottom: -8 }}>
                // Fuente por página — afecta el titular y cuerpo principal
              </div>

              {/* Quick: current page */}
              <div style={{ padding: '14px 16px', background: '#1a1a1d', border: '1px solid #2a2a2e', borderRadius: 8 }}>
                <div style={{ fontSize: 9, letterSpacing: '.14em', color: 'var(--accent)', marginBottom: 10, textTransform: 'uppercase' }}>
                  Página actual · {PAGE_LABELS[currentPage]}
                </div>
                <FontRow
                  fontId={(tweakState?.fonts?.[currentPage]) || 'default'}
                  onChange={id => setFont(currentPage, id)}
                />
              </div>

              {/* All pages */}
              <div style={{ fontSize: 9, letterSpacing: '.14em', color: '#6f6c63', textTransform: 'uppercase' }}>// Todas las páginas</div>
              {ALL_PAGES.map(p => (
                <div key={p} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 9, letterSpacing: '.12em', color: '#9c988c', textTransform: 'uppercase' }}>{PAGE_LABELS[p]}</span>
                  <FontRow
                    fontId={(tweakState?.fonts?.[p]) || 'default'}
                    onChange={id => setFont(p, id)}
                    compact
                  />
                </div>
              ))}
            </div>
          )}

          {/* ── COLORES ── */}
          {tab === 'colors' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Global accent */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ fontSize: 9, letterSpacing: '.16em', color: '#6f6c63', textTransform: 'uppercase' }}>// Accent global</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ColorSwatch
                    value={tweakState?.accent || '#ff3b1f'}
                    onChange={v => { setTweak('accent', v); showToast('Accent actualizado'); }}
                  />
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['#ff3b1f','#ffd24a','#3a6a4f','#ff5a3d','#1151ff','#ed1aa0','#00DC50','#f7f56a'].map(c => (
                      <button key={c} onClick={() => { setTweak('accent', c); showToast('Accent actualizado'); }} style={{
                        width: 22, height: 22, borderRadius: 99, background: c, border: '2px solid',
                        borderColor: tweakState?.accent === c ? '#f4f1ea' : 'transparent',
                        cursor: 'pointer', padding: 0,
                      }} />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: '#2a2a2e' }} />

              {/* Per-case colors */}
              {Object.entries(CASE_COLORS).map(([pageKey, cfg]) => (
                <div key={pageKey} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: 9, letterSpacing: '.14em', color: '#9c988c', textTransform: 'uppercase' }}>
                      // {cfg.label}
                    </div>
                    {colorOverrides[pageKey] && (
                      <button onClick={() => resetColors(pageKey)} style={{
                        background: 'transparent', border: '1px solid #2a2a2e',
                        color: '#6f6c63', fontSize: 8, letterSpacing: '.1em',
                        padding: '3px 8px', borderRadius: 9999, cursor: 'pointer',
                        textTransform: 'uppercase',
                      }}>Reset</button>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px,1fr))', gap: 8 }}>
                    {cfg.keys.map(colorKey => (
                      <div key={colorKey} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <ColorSwatch
                          value={getColor(pageKey, colorKey)}
                          onChange={v => setColor(pageKey, colorKey, v)}
                        />
                        <span style={{ fontSize: 9, letterSpacing: '.1em', color: '#6f6c63', textTransform: 'uppercase' }}>{colorKey}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── IMÁGENES ── */}
          {tab === 'images' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 9, letterSpacing: '.16em', color: '#6f6c63', textTransform: 'uppercase', marginBottom: -4 }}>
                // Las imágenes se guardan en este navegador. Para publicar, reemplaza los archivos en assets/.
              </div>
              {IMAGE_SLOTS.map(slot => (
                <ImageSlot
                  key={slot.key}
                  slot={slot}
                  value={images[slot.key] || null}
                  onUpload={file => handleImageUpload(slot.key, file)}
                  onClear={() => handleImageClear(slot.key)}
                />
              ))}
            </div>
          )}

          {/* ── LAYOUT (coming soon) ── */}
          {tab === 'layout' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 200, gap: 12, color: '#3a3a3e' }}>
              <div style={{ fontSize: 40 }}>⬡</div>
              <div style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase' }}>Layout editor · coming soon</div>
              <div style={{ fontSize: 11, color: '#2a2a2e', maxWidth: 300, textAlign: 'center', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>
                Aquí podrás cambiar el grid y composición de cada cápsula sin tocar código.
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 20px',
          borderTop: '1px solid #2a2a2e',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 9, letterSpacing: '.12em', color: '#3a3a3e', textTransform: 'uppercase' }}>
            ⌘E · Toggle · ESC · Cerrar
          </span>
          <span style={{ fontSize: 9, letterSpacing: '.12em', color: '#3a3a3e', textTransform: 'uppercase' }}>
            SN EDIT MODE · v1.0
          </span>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          zIndex: 9999,
          background: '#f4f1ea', color: '#0e0e10',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase',
          padding: '8px 20px', borderRadius: 9999,
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
        }}>{toast}</div>
      )}
    </>
  );
}

/* ---- Sub-components ---- */

function FontRow({ fontId, onChange, compact }) {
  return (
    <select
      value={fontId}
      onChange={e => onChange(e.target.value)}
      style={{
        background: '#0e0e10', color: '#f4f1ea',
        border: '1px solid #2a2a2e', borderRadius: 6,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase',
        padding: '6px 10px', cursor: 'pointer', width: '100%',
      }}
    >
      {FONT_REGISTRY.map(f => (
        <option key={f.id} value={f.id}>{f.label}</option>
      ))}
    </select>
  );
}

function ColorSwatch({ value, onChange }) {
  return (
    <label style={{ position: 'relative', cursor: 'pointer' }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6,
        background: value,
        border: '2px solid #2a2a2e',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.1)',
      }} />
      <input
        type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
      />
    </label>
  );
}

function ImageSlot({ slot, value, onUpload, onClear }) {
  const inputRef = React.useRef();
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '80px 1fr', gap: 14,
      padding: '12px 14px', background: '#1a1a1d',
      border: '1px solid #2a2a2e', borderRadius: 8,
      alignItems: 'center',
    }}>
      {/* Preview */}
      <div
        onClick={() => inputRef.current.click()}
        style={{
          width: 80, height: 60, borderRadius: 4, overflow: 'hidden',
          background: value ? 'transparent' : '#0e0e10',
          border: '1px solid #2a2a2e', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}
      >
        {value
          ? <img src={value} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ fontSize: 18, color: '#3a3a3e' }}>+</span>
        }
      </div>

      {/* Info + actions */}
      <div>
        <div style={{ fontSize: 9, letterSpacing: '.12em', color: '#f4f1ea', textTransform: 'uppercase', marginBottom: 3 }}>
          {slot.label}
        </div>
        <div style={{ fontSize: 10, color: '#6f6c63', lineHeight: 1.4, marginBottom: 8, fontFamily: 'Inter, sans-serif' }}>
          {slot.hint}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => inputRef.current.click()} style={{
            background: 'transparent', border: '1px solid #3a3a3e',
            color: '#9c988c', fontSize: 8, letterSpacing: '.12em',
            padding: '4px 10px', borderRadius: 9999, cursor: 'pointer',
            textTransform: 'uppercase',
          }}>{value ? 'Cambiar' : 'Subir'}</button>
          {value && (
            <button onClick={onClear} style={{
              background: 'transparent', border: '1px solid #3a3a3e',
              color: '#6f6c63', fontSize: 8, letterSpacing: '.12em',
              padding: '4px 10px', borderRadius: 9999, cursor: 'pointer',
              textTransform: 'uppercase',
            }}>Eliminar</button>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
          onChange={e => onUpload(e.target.files[0])} />
      </div>
    </div>
  );
}

/* =====================================================================
 * EditorMount — reads tweakState from window and mounts Editor
 * Called after App renders, so window.__tweakState is populated
 * ===================================================================== */
function EditorMount() {
  /* Poll for tweakState until App exposes it */
  const [ts, setTs]   = React.useState(() => window.__tweakState || null);
  const [page, setPage] = React.useState(() => window.__currentPage || 'home');

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (window.__tweakState) setTs({ ...window.__tweakState });
      if (window.__currentPage) setPage(window.__currentPage);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const setTweak = (key, value) => {
    if (window.__setTweak) window.__setTweak(key, value);
  };

  return <Editor currentPage={page} tweakState={ts} setTweak={setTweak} />;
}

/* Mount into a dedicated root */
const editorRoot = document.createElement('div');
editorRoot.id = 'editor-root';
document.body.appendChild(editorRoot);
ReactDOM.createRoot(editorRoot).render(<EditorMount />);
