// Page content components for Santiago's portfolio capsule

const BRANDS = [
"ALG DIGITAL", "MEZCAL JÚRAME", "PROTECT", "TÓNICO STUDIO",
"FUNDACIÓN FEMSA", "MÓDULO MARKETING"];


const PageFrame = ({ children, theme = "light", label, idx }) =>
<div className={"cap-body " + (theme === "dark" ? "" : "")}>
    {children}
  </div>;


/* =================== HOME =================== */
function HomePage({ go }) {
  return (
    <div className="page-enter" style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1.05fr 1.4fr', gap: 0 }}>
      {/* Left — info column */}
      <div style={{ padding: '30px 36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', borderRight: '1px solid var(--hairline)', minWidth: 0 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span className="mono" style={{ color: 'var(--mute)' }}>Index / 00 — Profile</span>
            <span className="chip"><span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--accent)', display: 'inline-block' }}></span> Available · 2026</span>
          </div>

          <h1 className="display" style={{ fontSize: 'clamp(56px, 7vw, 108px)', margin: '0 0 8px', lineHeight: 0.84 }}>
            Santiago<br />Navarro<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.3, margin: '14px 0 0', maxWidth: 480, color: 'var(--ink-soft)' }}>
            Creative Director, copywriter and <em>man of marketing</em> — building brand voice,
            naming systems and narrative architectures from <span style={{ color: 'var(--accent)' }}>Monterrey, MX.</span>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="mono" style={{ color: 'var(--mute)' }}>// Sections</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <button className="pill soft" onClick={() => go('creative')}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>01</span>
              Creative Director
              <span className="arr">→</span>
            </button>
            <button className="pill soft" onClick={() => go('marketing')}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>02</span>
              Marketing & PM
              <span className="arr">→</span>
            </button>
            <button className="pill soft" onClick={() => go('case-jurame')}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>03</span>
              Case · Mezcal Júrame
              <span className="arr">→</span>
            </button>
            <button className="pill soft" onClick={() => go('case-protect')}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>04</span>
              Case · Protect
              <span className="arr">→</span>
            </button>
            <button className="pill soft" onClick={() => go('case-tonico')}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>05</span>
              Case · Tónico Studio
              <span className="arr">→</span>
            </button>
            <button className="pill soft" onClick={() => go('case-femsa')}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>06</span>
              Case · Fundación FEMSA
              <span className="arr">→</span>
            </button>
          </div>

          <hr className="hr" />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div className="mono" style={{ color: 'var(--mute)' }}>Download</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>CV — English · 2026</div>
            </div>
            <a className="pill" href="uploads/CV ENGLISH.pdf" download>
              ↓ Download CV (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Right — portrait */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="portrait">
          <div className="label">Portrait — replace with hero photo · 4:5 · Monterrey 2026</div>
        </div>

        {/* overlay editorial type */}
        <div style={{ position: 'absolute', top: 24, right: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <span className="chip" style={{ background: 'rgba(255,255,255,0.92)' }}>FILE · sn-2026.001</span>
          <span className="chip" style={{ background: 'rgba(255,255,255,0.92)' }}>04 / 05 · MX</span>
        </div>

        <div style={{ position: 'absolute', left: 24, top: 24, color: '#f4f1ea' }}>
          <div className="mono" style={{ opacity: .8 }}>Roll 01 — Frame 02</div>
        </div>

        <div style={{ position: 'absolute', right: 24, bottom: 24, color: '#f4f1ea', textAlign: 'right' }}>
          <div className="display" style={{ fontSize: 64, lineHeight: 0.9 }}>Brand<br />Voice<span style={{ color: 'var(--accent)' }}>.</span></div>
          <div className="mono" style={{ opacity: .85, marginTop: 6 }}>Naming · Narrative · Concept</div>
        </div>

        {/* contact strip */}
        <div style={{ position: 'absolute', left: 24, bottom: 24, color: '#f4f1ea' }}>
          <div className="mono" style={{ opacity: .8, marginBottom: 4 }}>Contact</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.05em', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span>fcosantiago5@gmail.com</span>
            <span>+52 644 447 9443</span>
          </div>
        </div>
      </div>
    </div>);

}

/* =================== CREATIVE DIRECTOR =================== */
function CreativePage({ go }) {
  return (
    <div className="page-enter" style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto 1fr auto', gap: 0 }}>
      {/* Header band */}
      <div style={{ gridColumn: '1 / -1', padding: '22px 36px 16px', borderBottom: '1px solid var(--hairline)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ color: 'var(--mute)', marginBottom: 8 }}>Section 01 / Creative Direction & Copy</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 4.4vw, 68px)', margin: 0, lineHeight: 0.92 }}>
            'Greatest hits' typa CD<span style={{ color: 'var(--accent)' }}></span><span className="ital" style={{ textTransform: 'none', fontStyle: 'italic', color: 'var(--ink)' }}></span> (cretive director).
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, minWidth: 220 }}>
          <span className="chip">Since 2020</span>
          <span className="chip">ALG · Freelance</span>
          <span className="chip">Brand Voice · Naming · Narrative</span>
        </div>
      </div>

      {/* Left — story + services */}
      <div className="scroll" style={{ padding: '24px 44px', borderRight: '1px solid var(--hairline)' }}>
        <div className="mono" style={{ color: 'var(--mute)', marginBottom: 8 }}>// 01.A — Story</div>
        <p style={{ margin: '0 0 14px', fontSize: 15.5, lineHeight: 1.55, maxWidth: 560 }}>
          I write to make brands sound like themselves. Five years inside agency rooms taught me
          that the cleanest brief is half the work — so I treat <span className="ital" style={{ fontStyle: 'italic' }}>brand voice</span> as
          architecture, not decoration. Benchmarks, narrative systems, naming, slogans, the small line
          that survives the deck. That is the work.
        </p>
        <p style={{ margin: '0 0 22px', fontSize: 15.5, lineHeight: 1.55, maxWidth: 560, color: 'var(--ink-soft)' }}>
          Currently leading creative direction at ALG Digital and writing for two studios on
          retainer. I like editorial constraints, dry humor, names with verbs in them, and decks that
          read out loud.
        </p>

        <div className="mono" style={{ color: 'var(--mute)', marginBottom: 10 }}>// 01.B — Services</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--hairline)', border: '1px solid var(--hairline)', marginBottom: 24 }}>
          {[
          ["Brand Voice & DNA", "Tone systems, do/don't, vocabulary, voice principles."],
          ["Naming", "Brand, product and campaign naming with rationale."],
          ["Narrative Architecture", "Story spine, message map, key claims hierarchy."],
          ["Concept & Slogans", "Big idea, taglines, manifesto-grade copy."],
          ["Web & Editorial Copy", "Sites, blogs, scripts, long-form articles."],
          ["Creative Direction", "Brief, team, deliverables, client room."]].
          map(([t, d]) =>
          <div key={t} style={{ padding: '14px 16px', background: 'var(--canvas)' }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 4 }}>{t}</div>
              <div style={{ fontSize: 12.5, color: 'var(--mute)', lineHeight: 1.45 }}>{d}</div>
            </div>
          )}
        </div>

        <div className="mono" style={{ color: 'var(--mute)', marginBottom: 10 }}>// 01.C — Open to</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
          {["Creative Director", "Senior Copywriter", "Head of Brand Voice", "Verbal Identity Lead", "Freelance Retainer"].map((p) =>
          <span key={p} className="chip" style={{ height: 30, padding: '0 12px' }}>{p}</span>
          )}
        </div>
      </div>

      {/* Right — selected work */}
      <div className="scroll" style={{ padding: '24px 32px' }}>
        <div className="mono" style={{ color: 'var(--mute)', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}>
          <span>// 01.D — Selected work</span><span>03 entries</span>
        </div>

        {[
        { n: '03', tag: 'Narrative · Heritage', title: 'Mezcal Júrame', sub: 'Voz, naming y copy de etiqueta para un mezcal joven.', go: 'case-jurame' },
        { n: '04', tag: 'Voice · Tech', title: 'Protect', sub: 'Voz y naming para producto de protección digital.', go: 'case-protect' },
        { n: '05', tag: 'Editorial · Identity', title: 'Tónico Studio', sub: 'Voz y copy editorial para estudio de diseño.', go: 'case-tonico' },
        { n: '06', tag: 'Corporate · Foundation', title: 'Fundación FEMSA', sub: 'Arquitectura narrativa para informe anual y programas.', go: 'case-femsa' }].
        map((c) =>
        <button key={c.n} onClick={() => go(c.go)} style={{
          display: 'block', width: '100%', textAlign: 'left',
          background: 'var(--canvas)', border: '1px solid var(--hairline)',
          padding: '14px 16px', marginBottom: 10, cursor: 'pointer',
          borderRadius: 0, transition: 'background .2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--cloud)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'var(--canvas)'}>
          
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span className="mono" style={{ color: 'var(--mute)' }}>{c.n} · {c.tag}</span>
              <span style={{ fontSize: 14 }}>↗</span>
            </div>
            <div className="display" style={{ fontSize: 36, marginBottom: 2 }}>{c.title}</div>
            <div style={{ fontSize: 12.5, color: 'var(--mute)' }}>{c.sub}</div>
          </button>
        )}

        <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
          <button className="pill sm" onClick={() => go('home')}>← Back to home</button>
          <button className="pill sm ghost" onClick={() => go('marketing')}>Marketing & PM →</button>
        </div>
      </div>

      {/* Marquee — brand ribbon */}
      <div style={{ gridColumn: '1 / -1' }}>
        <div className="marquee">
          <div className="marquee-track">
            {[...BRANDS, ...BRANDS].map((b, i) =>
            <React.Fragment key={i}>
                <span>{b}</span><span className="sep">✦</span>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>);

}

/* =================== MARKETING / PM =================== */
function MarketingPage({ go }) {
  return (
    <div className="page-enter" style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gridTemplateRows: 'auto 1fr auto', gap: 0, background: 'var(--ink)', color: '#f4f1ea' }}>
      {/* Header */}
      <div style={{ gridColumn: '1 / -1', padding: '22px 36px 16px', borderBottom: '1px solid #2a2a2e', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ color: 'var(--stone)', marginBottom: 8 }}>Section 02 / Marketing & Project Management</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 4.4vw, 68px)', margin: 0, lineHeight: 0.92, color: '#f4f1ea' }}>
            Plans<span style={{ color: 'var(--accent)' }}>,</span> people and <span className="ital" style={{ textTransform: 'none', fontStyle: 'italic' }}>shipped</span> work.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, minWidth: 220 }}>
          <span className="chip" style={{ borderColor: '#3a3a3e', color: '#f4f1ea' }}>2021 — Present</span>
          <span className="chip" style={{ borderColor: '#3a3a3e', color: '#f4f1ea' }}>Scope · Timeline · Delivery</span>
          <span className="chip" style={{ borderColor: '#3a3a3e', color: '#f4f1ea' }}>Cross-functional</span>
        </div>
      </div>

      {/* Left — story + open positions */}
      <div className="scroll" style={{ padding: '24px 36px', borderRight: '1px solid #2a2a2e' }}>
        <div className="mono" style={{ color: 'var(--stone)', marginBottom: 8 }}>// 02.A — Story</div>
        <p style={{ margin: '0 0 14px', fontSize: 15.5, lineHeight: 1.55 }}>
          I run projects the same way I write copy: tight scope, clear hierarchy, no orphaned
          words. End-to-end delivery for branding and digital — scoping, timeline, coordination,
          QA, handover. The deck reads, the file ships, the slogan survives the workshop.
        </p>
        <p style={{ margin: '0 0 22px', fontSize: 15.5, lineHeight: 1.55, color: 'var(--stone)' }}>
          Comfortable in the messy middle: client calls in the morning, naming review at noon,
          launch checklist at six.
        </p>

        <div className="mono" style={{ color: 'var(--stone)', marginBottom: 10 }}>// 02.B — Open to</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {["Marketing Manager", "Digital Marketing Lead", "Project Manager", "Content Lead", "Brand Operations"].map((p) =>
          <span key={p} className="chip" style={{ borderColor: '#3a3a3e', color: '#f4f1ea', height: 30, padding: '0 12px' }}>{p}</span>
          )}
        </div>

        <div className="mono" style={{ color: 'var(--stone)', marginBottom: 10 }}>// 02.C — Numbers (rough)</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#2a2a2e', border: '1px solid #2a2a2e' }}>
          {[
          ["6 yrs", "in agency"],
          ["40+", "brand projects"],
          ["12", "naming systems shipped"],
          ["2", "always-on retainers"]].
          map(([n, l]) =>
          <div key={l} style={{ padding: '18px 16px', background: 'var(--ink)' }}>
              <div className="display" style={{ fontSize: 48, lineHeight: 0.9, color: '#f4f1ea' }}>{n}</div>
              <div className="mono" style={{ color: 'var(--stone)', marginTop: 6 }}>{l}</div>
            </div>
          )}
        </div>
      </div>

      {/* Right — services + highlights */}
      <div className="scroll" style={{ padding: '24px 36px' }}>
        <div className="mono" style={{ color: 'var(--stone)', marginBottom: 10 }}>// 02.D — Services</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#2a2a2e', border: '1px solid #2a2a2e', marginBottom: 22 }}>
          {[
          ["Project Management", "Scope, timeline, status, delivery."],
          ["Digital Marketing", "Editorial calendars, channels, briefs."],
          ["Content Strategy", "Pillars, formats, cadence, KPIs."],
          ["Brand Operations", "Templates, guidelines, governance."],
          ["Vendor Coordination", "Studios, freelancers, illustrators."],
          ["Launch Management", "Pre/post launch, comms checklist."]].
          map(([t, d]) =>
          <div key={t} style={{ padding: '14px 16px', background: 'var(--ink)' }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 4 }}>{t}</div>
              <div style={{ fontSize: 12.5, color: 'var(--stone)', lineHeight: 1.45 }}>{d}</div>
            </div>
          )}
        </div>

        <div className="mono" style={{ color: 'var(--stone)', marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
          <span>// 02.E — Highlights</span><span>03 entries</span>
        </div>

        {[
        { n: '03', tag: 'Launch · Retail', title: 'Mezcal Júrame', sub: 'Plan de lanzamiento y gestión editorial.', go: 'case-jurame' },
        { n: '04', tag: 'Product · Site', title: 'Protect', sub: 'Sitio + onboarding — 8 semanas end-to-end.', go: 'case-protect' },
        { n: '05', tag: 'Always-on · Retainer', title: 'Tónico Studio', sub: 'Editorial calendar + content ops.', go: 'case-tonico' },
        { n: '06', tag: 'Corporate · Annual', title: 'Fundación FEMSA', sub: 'Coordinación editorial del informe anual.', go: 'case-femsa' }].
        map((c) =>
        <button key={c.n} onClick={() => go(c.go)} style={{
          display: 'block', width: '100%', textAlign: 'left',
          background: 'var(--ink)', border: '1px solid #2a2a2e', color: '#f4f1ea',
          padding: '14px 16px', marginBottom: 10, cursor: 'pointer', borderRadius: 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#1a1a1d'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'var(--ink)'}>
          
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span className="mono" style={{ color: 'var(--stone)' }}>{c.n} · {c.tag}</span>
              <span style={{ fontSize: 14 }}>↗</span>
            </div>
            <div className="display" style={{ fontSize: 36, marginBottom: 2, color: '#f4f1ea' }}>{c.title}</div>
            <div style={{ fontSize: 12.5, color: 'var(--stone)' }}>{c.sub}</div>
          </button>
        )}

        <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
          <button className="pill sm soft" onClick={() => go('home')}>← Back to home</button>
          <button className="pill sm" onClick={() => go('creative')}>Creative Director ←</button>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ gridColumn: '1 / -1', borderTop: '1px solid #2a2a2e' }}>
        <div className="marquee" style={{ background: 'var(--ink)', borderColor: '#2a2a2e' }}>
          <div className="marquee-track" style={{ color: '#f4f1ea' }}>
            {[...BRANDS, ...BRANDS].map((b, i) =>
            <React.Fragment key={i}>
                <span>{b}</span><span className="sep">✦</span>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>);

}

Object.assign(window, { HomePage, CreativePage, MarketingPage, BRANDS });
