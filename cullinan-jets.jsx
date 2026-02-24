import { useState, useEffect, useRef } from "react";

// ── Fleet Data (editable) ──────────────────────────────────────────
const fleetData = [
  {
    slug: "light-jets",
    category: "Light Jets",
    tagline: "Agile. Efficient. Perfect for short hops.",
    overview: "Light jets offer the ideal balance of speed, comfort and economy for flights up to 2,000 nm. Perfect for business day-trips, weekend escapes, or connecting between regional hubs with style.",
    passengers: "6–8",
    range: "1,500–2,100 nm",
    baggage: "45–65 cu ft",
    cabinNotes: "Stand-up cabin in select models, fully enclosed lavatory, refreshment centre, leather club seating.",
    aircraft: [
      { model: "Embraer Phenom 300E", pax: "7–8", range: "2,010 nm" },
      { model: "Cessna Citation CJ3+", pax: "6–7", range: "1,875 nm" },
      { model: "HondaJet Elite S", pax: "5–6", range: "1,437 nm" },
    ],
  },
  {
    slug: "midsize-jets",
    category: "Midsize Jets",
    tagline: "Versatile comfort for transcontinental reach.",
    overview: "Midsize jets combine generous cabin space with impressive range, making them ideal for cross-country travel or international hops. A true sweet spot between economy and luxury.",
    passengers: "7–9",
    range: "2,000–3,000 nm",
    baggage: "70–90 cu ft",
    cabinNotes: "Stand-up cabin, full galley, enclosed lavatory, flat-floor cabin, Wi-Fi connectivity.",
    aircraft: [
      { model: "Cessna Citation XLS+", pax: "8–9", range: "2,100 nm" },
      { model: "Bombardier Learjet 60XR", pax: "7–8", range: "2,405 nm" },
      { model: "Hawker 900XP", pax: "8", range: "2,800 nm" },
    ],
  },
  {
    slug: "super-midsize-jets",
    category: "Super Midsize Jets",
    tagline: "Where performance meets indulgence.",
    overview: "Super midsize jets deliver heavy-jet comfort with midsize efficiency. Wide cabins, coast-to-coast range, and premium amenities make them the discerning traveller's choice.",
    passengers: "8–10",
    range: "3,000–4,000 nm",
    baggage: "90–120 cu ft",
    cabinNotes: "Flat-floor wide cabin, full refreshment centre, berthing seats, advanced entertainment systems.",
    aircraft: [
      { model: "Bombardier Challenger 350", pax: "8–10", range: "3,200 nm" },
      { model: "Cessna Citation Longitude", pax: "8–9", range: "3,500 nm" },
      { model: "Embraer Praetor 600", pax: "8–10", range: "3,900 nm" },
    ],
  },
  {
    slug: "heavy-jets",
    category: "Heavy Jets",
    tagline: "Intercontinental capability. Uncompromised luxury.",
    overview: "Heavy jets are designed for long-haul missions with full-size cabins, sleeping arrangements, and the amenities of a flying office. Ideal for intercontinental corporate or leisure travel.",
    passengers: "10–16",
    range: "4,000–5,500 nm",
    baggage: "120–180 cu ft",
    cabinNotes: "Multiple cabin zones, full galley, shower-capable lavatory, satellite communications, sleeping berths.",
    aircraft: [
      { model: "Gulfstream G450", pax: "12–14", range: "4,350 nm" },
      { model: "Dassault Falcon 900LX", pax: "12", range: "4,750 nm" },
      { model: "Bombardier Challenger 650", pax: "10–12", range: "4,000 nm" },
    ],
  },
  {
    slug: "ultra-long-range",
    category: "Ultra-Long-Range Jets",
    tagline: "No destination is beyond reach.",
    overview: "Ultra-long-range jets represent the pinnacle of private aviation—connecting any two cities on Earth nonstop. Spacious, silent, and supremely comfortable for flights exceeding 12 hours.",
    passengers: "12–19",
    range: "6,000–7,700 nm",
    baggage: "180–250 cu ft",
    cabinNotes: "Four living areas, crew rest quarters, full-size galley, master suite with shower, cinema-grade entertainment.",
    aircraft: [
      { model: "Gulfstream G650ER", pax: "13–16", range: "7,500 nm" },
      { model: "Bombardier Global 7500", pax: "14–19", range: "7,700 nm" },
      { model: "Dassault Falcon 8X", pax: "12–14", range: "6,450 nm" },
    ],
  },
  {
    slug: "vip-airliners",
    category: "VIP Airliners",
    tagline: "A private residence at 41,000 feet.",
    overview: "VIP airliners transform wide-body commercial aircraft into bespoke flying palaces. Designed for heads of state, royal families, and ultra-high-net-worth principals requiring sovereign-level space and privacy.",
    passengers: "20–80+",
    range: "6,000–9,000+ nm",
    baggage: "Unlimited (cargo hold)",
    cabinNotes: "Bespoke interiors: bedrooms, boardrooms, lounges, dining halls, medical suites. Fully customised to principal requirements.",
    aircraft: [
      { model: "Airbus ACJ320neo", pax: "20–40", range: "6,000 nm" },
      { model: "Boeing BBJ 737 MAX", pax: "25–50", range: "6,500 nm" },
      { model: "Boeing BBJ 787-8", pax: "40–80", range: "9,945 nm" },
    ],
  },
];

const testimonials = [
  { quote: "Cullinan Jets arranged our entire European tour in 48 hours. Flawless from wheels-up to touchdown.", author: "M. Al-Rashid", title: "Family Office Principal" },
  { quote: "The level of discretion and professionalism is unmatched. They understand what privacy truly means.", author: "S. Vandermeer", title: "CEO, Private Equity" },
  { quote: "We moved our entire executive travel programme to Cullinan. The consistency is remarkable.", author: "J. Thornton-Clarke", title: "Chief of Staff, FTSE 100" },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We can arrange flights with as little as 4 hours' notice, though 24–48 hours is ideal for optimal aircraft selection and pricing. For peak periods or large-cabin aircraft, we recommend booking 1–2 weeks ahead." },
  { q: "Are empty legs available?", a: "Yes. We regularly publish empty-leg opportunities at significantly reduced rates. Contact your dedicated advisor or check our communications for current availability." },
  { q: "Who operates the aircraft?", a: "All flights are operated by certified, audited third-party carriers holding the necessary Air Operator Certificates. We vet every operator against rigorous safety and compliance standards." },
  { q: "Can I bring pets on board?", a: "Absolutely. Pets travel in the cabin with you. Please inform us at booking so we can prepare the aircraft accordingly." },
  { q: "What is your cancellation policy?", a: "Cancellation terms vary by operator and aircraft type. Generally, cancellations more than 72 hours before departure incur no charge. Your advisor will confirm specific terms at booking." },
  { q: "Do you offer cargo or special mission flights?", a: "Yes. We arrange cargo charters, medevac flights, aerial survey missions, and other special operations. Contact us with your requirements for a tailored solution." },
];

// ── Helpers ─────────────────────────────────────────────────────────
const smoothScroll = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ── Section Separator ───────────────────────────────────────────────
const Separator = () => (
  <div className="flex items-center justify-center py-4 select-none" aria-hidden="true">
    <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #5A0F1A, transparent)" }} />
    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#5A0F1A", margin: "0 8px", opacity: 0.6 }} />
    <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #5A0F1A, transparent)" }} />
  </div>
);

// ── Micro-label ─────────────────────────────────────────────────────
const MicroLabel = ({ children }) => (
  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#5A0F1A", marginBottom: 8, fontWeight: 500 }}>
    {children}
  </p>
);

// ── Icon placeholders ───────────────────────────────────────────────
const icons = {
  concierge: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <circle cx="16" cy="10" r="4" /><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" /><path d="M22 8l4-4M24 4h-4v4" />
    </svg>
  ),
  global: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <circle cx="16" cy="16" r="12" /><ellipse cx="16" cy="16" rx="6" ry="12" /><line x1="4" y1="12" x2="28" y2="12" /><line x1="4" y1="20" x2="28" y2="20" />
    </svg>
  ),
  pricing: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <rect x="4" y="8" width="24" height="16" rx="2" /><line x1="4" y1="14" x2="28" y2="14" /><circle cx="20" cy="20" r="2" />
    </svg>
  ),
  safety: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <path d="M16 3L4 8v8c0 7.18 5.12 13.4 12 15 6.88-1.6 12-7.82 12-15V8L16 3z" /><polyline points="11,16 14,19 21,12" />
    </svg>
  ),
  charter: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <path d="M2 22l14-16 14 16" /><path d="M8 22v-6l8-8 8 8v6" /><rect x="13" y="18" width="6" height="4" />
    </svg>
  ),
  corporate: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <rect x="6" y="4" width="20" height="24" rx="2" /><line x1="12" y1="10" x2="20" y2="10" /><line x1="12" y1="14" x2="20" y2="14" /><line x1="12" y1="18" x2="17" y2="18" />
    </svg>
  ),
  group: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <circle cx="12" cy="10" r="3" /><circle cx="22" cy="10" r="3" /><path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8" /><path d="M18 18c2-1 4-1 6 0 2.5 1.5 4 4 4 8" />
    </svg>
  ),
  cargo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" strokeWidth="1.5">
      <rect x="4" y="8" width="24" height="18" rx="2" /><path d="M4 14h24" /><path d="M12 8V4h8v4" /><line x1="16" y1="14" x2="16" y2="26" />
    </svg>
  ),
};

// ══════════════════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════════════════
export default function CullinanJets() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fleetModal, setFleetModal] = useState(null); // fleet item or null
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quotePreFill, setQuotePreFill] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [openSafety, setOpenSafety] = useState(null);
  const [fleetFilter, setFleetFilter] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const openQuote = (prefill = {}) => {
    setQuotePreFill(prefill);
    setQuoteOpen(true);
    setFormSubmitted(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Fleet", id: "fleet" },
    { label: "Safety", id: "safety" },
    { label: "Membership", id: "membership" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  // ── Styles (CSS-in-JS for artifact) ─────────────────────────────
  const C = {
    bordeaux: "#5A0F1A",
    bordeauxLight: "#7A2030",
    offWhite: "#FAFAF8",
    cream: "#F5F3EF",
    text: "#121212",
    muted: "#8A8378",
    warmGrey: "#C4BEB5",
  };

  const fontHead = "'Cormorant Garamond', 'Georgia', serif";
  const fontBody = "'Montserrat', 'Helvetica Neue', sans-serif";
  const fontLogo = "'Cormorant Garamond', 'Didot', 'Georgia', serif";

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        body { background: ${C.offWhite}; color: ${C.text}; font-family: ${fontBody}; }
        ::selection { background: ${C.bordeaux}; color: #fff; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .fade-in { animation: fadeIn 0.5s ease-out both; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: ${C.bordeaux}; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(90,15,26,0.08); }
        .btn-primary { background: ${C.bordeaux}; color: #fff; border: none; padding: 14px 32px; font-family: ${fontBody}; font-size: 13px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; border-radius: 4px; }
        .btn-primary:hover { background: ${C.bordeauxLight}; transform: translateY(-1px); box-shadow: 0 4px 20px rgba(90,15,26,0.25); }
        .btn-secondary { background: transparent; color: ${C.bordeaux}; border: 1.5px solid ${C.bordeaux}; padding: 13px 32px; font-family: ${fontBody}; font-size: 13px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; border-radius: 4px; }
        .btn-secondary:hover { background: ${C.bordeaux}; color: #fff; }
        input, select, textarea { font-family: ${fontBody}; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1000; display: flex; align-items: center; justify-content: center; animation: fadeIn 0.2s ease; backdrop-filter: blur(4px); }
        .modal-content { background: ${C.offWhite}; border-radius: 8px; max-width: 720px; width: 92%; max-height: 88vh; overflow-y: auto; position: relative; animation: fadeUp 0.35s ease; }
        .modal-content::-webkit-scrollbar { width: 4px; }
        .modal-content::-webkit-scrollbar-thumb { background: ${C.warmGrey}; border-radius: 4px; }
        @media (max-width: 768px) {
          .modal-content { max-width: 100%; width: 100%; max-height: 100vh; border-radius: 0; min-height: 100vh; }
        }
      `}</style>

      {/* ── HEADER / NAV ─────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
          background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid rgba(90,15,26,0.08)` : "1px solid transparent",
          transition: "all 0.4s ease",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div
            style={{ fontFamily: fontLogo, fontSize: 22, fontWeight: 400, letterSpacing: "0.35em", color: C.bordeaux, cursor: "pointer", userSelect: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            CULLINAN JETS
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            <style>{`
              @media (max-width: 900px) { .desktop-nav { display: none !important; } }
              @media (min-width: 901px) { .mobile-burger { display: none !important; } }
            `}</style>
            {navLinks.map((l) => (
              <a
                key={l.id}
                className="nav-link"
                onClick={() => smoothScroll(l.id)}
                style={{ fontFamily: fontBody, fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: C.text, cursor: "pointer", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
            <button className="btn-primary" onClick={() => openQuote()} style={{ padding: "10px 24px", fontSize: 11 }}>
              Request a Quote
            </button>
          </nav>

          {/* Mobile Burger */}
          <button
            className="mobile-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Menu"
          >
            <span style={{ width: 24, height: 1.5, background: C.bordeaux, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ width: 24, height: 1.5, background: C.bordeaux, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 1.5, background: C.bordeaux, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(250,250,248,0.98)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.warmGrey}40`, padding: "24px" }} className="fade-in">
            {navLinks.map((l) => (
              <a
                key={l.id}
                onClick={() => { smoothScroll(l.id); setMenuOpen(false); }}
                style={{ display: "block", padding: "12px 0", fontFamily: fontBody, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: C.text, cursor: "pointer", borderBottom: `1px solid ${C.warmGrey}30` }}
              >
                {l.label}
              </a>
            ))}
            <button className="btn-primary" onClick={() => { openQuote(); setMenuOpen(false); }} style={{ marginTop: 16, width: "100%" }}>
              Request a Quote
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, #1a0a0e 0%, #2d0f18 25%, #3d1520 50%, #1a0a0e 100%)`,
        }}
      >
        {/* Subtle overlay pattern */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(90,15,26,0.3) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)", pointerEvents: "none" }} />

        {/* Decorative line */}
        <div style={{ position: "absolute", top: "15%", left: "8%", width: 1, height: "30%", background: "linear-gradient(180deg, transparent, rgba(250,250,248,0.15), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 1, height: "25%", background: "linear-gradient(180deg, transparent, rgba(250,250,248,0.1), transparent)", pointerEvents: "none" }} />

        <div style={{ textAlign: "center", padding: "0 24px", position: "relative", zIndex: 2, maxWidth: 800 }} className="fade-up">
          <p style={{ fontFamily: fontBody, fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(250,250,248,0.5)", marginBottom: 32, fontWeight: 400 }}>
            Private Aviation
          </p>
          <h1 style={{ fontFamily: fontHead, fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 300, color: C.offWhite, lineHeight: 1.1, marginBottom: 24, fontStyle: "italic" }}>
            Private Aviation,{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>Curated.</span>
          </h1>
          <p style={{ fontFamily: fontBody, fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(250,250,248,0.65)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px", fontWeight: 300 }}>
            On-demand charter and tailored flight solutions — discreet, seamless, global.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => openQuote()} style={{ background: C.offWhite, color: C.bordeaux }}>
              Request a Quote
            </button>
            <button className="btn-secondary" onClick={() => smoothScroll("fleet")} style={{ borderColor: "rgba(250,250,248,0.35)", color: C.offWhite }}>
              Explore Fleet
            </button>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(transparent, ${C.offWhite})`, pointerEvents: "none" }} />
      </section>

      {/* ── TRUST / VALUE PROPS ──────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <MicroLabel>Why Cullinan</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text }}>
            The Standard in Private Aviation
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {[
            { icon: icons.concierge, title: "24/7 Concierge", desc: "Dedicated aviation advisors available around the clock. Your journey begins with a single call." },
            { icon: icons.global, title: "Global Access", desc: "Access to 5,000+ aircraft worldwide. Any airport, any continent, any time." },
            { icon: icons.pricing, title: "Transparent Pricing", desc: "Clear, competitive quotes with no hidden fees. Know exactly what you're paying." },
            { icon: icons.safety, title: "Safety First", desc: "Every operator vetted against the industry's highest safety and compliance standards." },
          ].map((item, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "#fff",
                border: `1px solid ${C.warmGrey}30`,
                borderRadius: 6,
                padding: 32,
                textAlign: "center",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>{item.icon}</div>
              <h3 style={{ fontFamily: fontHead, fontSize: 20, fontWeight: 500, marginBottom: 10, color: C.text }}>{item.title}</h3>
              <p style={{ fontFamily: fontBody, fontSize: 13, color: C.muted, lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto", scrollMarginTop: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <MicroLabel>Services</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text }}>
            Tailored to Your Journey
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { icon: icons.charter, title: "On-Demand Charter", desc: "Bespoke private flights arranged on your schedule. From light jets to VIP airliners, we source the ideal aircraft for every mission." },
            { icon: icons.corporate, title: "Corporate Travel", desc: "Streamlined travel programmes for executive teams. Consistent standards, preferential rates, dedicated account management." },
            { icon: icons.group, title: "Group & VIP Airline", desc: "Large-group charters for corporate events, sports teams, and high-profile tours. Custom cabin configurations available." },
            { icon: icons.cargo, title: "Cargo & Special Missions", desc: "Time-critical freight, medevac, aerial survey, and special operations flights. Discreet and efficient." },
          ].map((item, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "#fff",
                border: `1px solid ${C.warmGrey}25`,
                borderRadius: 6,
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: `linear-gradient(90deg, ${C.bordeaux}, transparent)` }} />
              <div style={{ marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontFamily: fontHead, fontSize: 20, fontWeight: 500, marginBottom: 10, color: C.text }}>{item.title}</h3>
              <p style={{ fontFamily: fontBody, fontSize: 13, color: C.muted, lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── FLEET ─────────────────────────────────────────────────── */}
      <section id="fleet" style={{ padding: "80px 24px", background: C.cream, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <MicroLabel>Fleet Explorer</MicroLabel>
            <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text, marginBottom: 16 }}>
              Aircraft for Every Mission
            </h2>
            <p style={{ fontFamily: fontBody, fontSize: 14, color: C.muted, fontWeight: 300 }}>
              Select a category to explore specifications and available models.
            </p>
          </div>

          {/* Filter */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <input
              type="text"
              placeholder="Filter by passengers, range, or category…"
              value={fleetFilter}
              onChange={(e) => setFleetFilter(e.target.value)}
              style={{
                width: "100%",
                maxWidth: 420,
                padding: "12px 20px",
                border: `1px solid ${C.warmGrey}50`,
                borderRadius: 4,
                fontFamily: fontBody,
                fontSize: 13,
                background: "#fff",
                color: C.text,
                outline: "none",
              }}
            />
          </div>

          {/* Fleet Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {fleetData
              .filter((f) => {
                if (!fleetFilter) return true;
                const q = fleetFilter.toLowerCase();
                return (
                  f.category.toLowerCase().includes(q) ||
                  f.passengers.toLowerCase().includes(q) ||
                  f.range.toLowerCase().includes(q) ||
                  f.aircraft.some((a) => a.model.toLowerCase().includes(q))
                );
              })
              .map((fleet) => (
                <div
                  key={fleet.slug}
                  className="card-hover"
                  onClick={() => setFleetModal(fleet)}
                  style={{
                    background: "#fff",
                    border: `1px solid ${C.warmGrey}25`,
                    borderRadius: 6,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Image placeholder */}
                  <div
                    style={{
                      height: 160,
                      background: `linear-gradient(135deg, ${C.bordeaux}15 0%, ${C.bordeaux}08 50%, ${C.cream} 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke={C.bordeaux} strokeWidth="1" opacity="0.25">
                      <path d="M8 36l24-20 24 20" /><path d="M32 16v-6" /><circle cx="32" cy="8" r="2" /><path d="M18 36l-10 8h48l-10-8" />
                    </svg>
                    <div style={{ position: "absolute", bottom: 12, right: 16 }}>
                      <span style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.bordeaux, fontWeight: 500, background: "rgba(255,255,255,0.85)", padding: "4px 10px", borderRadius: 3 }}>
                        {fleet.passengers} pax
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <h3 style={{ fontFamily: fontHead, fontSize: 22, fontWeight: 500, color: C.text, marginBottom: 6 }}>{fleet.category}</h3>
                    <p style={{ fontFamily: fontBody, fontSize: 12, color: C.muted, fontWeight: 300, marginBottom: 12 }}>{fleet.tagline}</p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: fontBody, fontSize: 11, color: C.bordeaux, fontWeight: 500 }}>Range: {fleet.range}</span>
                      <span style={{ fontFamily: fontBody, fontSize: 11, color: C.muted }}>Baggage: {fleet.baggage}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── FLEET DETAIL MODAL ───────────────────────────────────── */}
      {fleetModal && (
        <div className="modal-overlay" onClick={() => setFleetModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header gradient */}
            <div style={{ height: 140, background: `linear-gradient(135deg, ${C.bordeaux} 0%, #3d1520 100%)`, position: "relative", display: "flex", alignItems: "flex-end", padding: "24px 32px", borderRadius: "8px 8px 0 0" }}>
              <button
                onClick={() => setFleetModal(null)}
                style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 36, height: 36, color: "#fff", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
                aria-label="Close"
              >
                ×
              </button>
              <div>
                <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Fleet Category</p>
                <h2 style={{ fontFamily: fontHead, fontSize: 32, fontWeight: 400, color: "#fff" }}>{fleetModal.category}</h2>
              </div>
            </div>

            <div style={{ padding: "32px" }}>
              {/* Overview */}
              <p style={{ fontFamily: fontBody, fontSize: 14, color: C.muted, lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
                {fleetModal.overview}
              </p>

              {/* Specs row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, marginBottom: 32 }}>
                {[
                  { label: "Passengers", value: fleetModal.passengers },
                  { label: "Range", value: fleetModal.range },
                  { label: "Baggage", value: fleetModal.baggage },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center", padding: 16, background: C.cream, borderRadius: 4 }}>
                    <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted, marginBottom: 4 }}>{s.label}</p>
                    <p style={{ fontFamily: fontHead, fontSize: 18, fontWeight: 500, color: C.bordeaux }}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Cabin notes */}
              <div style={{ padding: 20, border: `1px solid ${C.warmGrey}30`, borderRadius: 4, marginBottom: 32 }}>
                <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted, marginBottom: 8 }}>Cabin Notes</p>
                <p style={{ fontFamily: fontBody, fontSize: 13, color: C.text, lineHeight: 1.7, fontWeight: 300 }}>{fleetModal.cabinNotes}</p>
              </div>

              {/* Aircraft models */}
              <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Available Aircraft</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
                {fleetModal.aircraft.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 20px",
                      background: "#fff",
                      border: `1px solid ${C.warmGrey}20`,
                      borderRadius: 4,
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: fontHead, fontSize: 17, fontWeight: 500, color: C.text }}>{a.model}</p>
                      <p style={{ fontFamily: fontBody, fontSize: 11, color: C.muted, fontWeight: 300 }}>
                        {a.pax} passengers · {a.range} range
                      </p>
                    </div>
                    <button
                      className="btn-primary"
                      style={{ padding: "8px 16px", fontSize: 10 }}
                      onClick={() => {
                        setFleetModal(null);
                        openQuote({ category: fleetModal.category, model: a.model });
                      }}
                    >
                      Request
                    </button>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%" }}
                onClick={() => {
                  setFleetModal(null);
                  openQuote({ category: fleetModal.category });
                }}
              >
                Request This Category
              </button>
            </div>
          </div>
        </div>
      )}

      <Separator />

      {/* ── SAFETY ────────────────────────────────────────────────── */}
      <section id="safety" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", scrollMarginTop: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <MicroLabel>Safety & Standards</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text }}>
            Uncompromising Operational Standards
          </h2>
        </div>
        {[
          { title: "Operator Vetting", content: "Every operator in our network undergoes rigorous due diligence including AOC verification, insurance validation, fleet age analysis, and crew qualification review. We maintain ongoing monitoring and remove operators who fail to meet our standards." },
          { title: "Crew Experience", content: "We mandate minimum flight-hour requirements for all crew members. Captains average 8,000+ hours, with type-specific experience and recurrent training verified annually." },
          { title: "Insurance & Compliance", content: "All aircraft carry comprehensive hull and liability insurance meeting or exceeding regulatory requirements. We verify coverage validity before every flight." },
          { title: "Operational Oversight", content: "Our operations team monitors every flight in real time, providing proactive weather briefings, slot management, and contingency planning for the highest level of operational assurance." },
          { title: "Third-Party Audits", content: "We recognise and prioritise operators holding IS-BAO, ARGUS Platinum, or Wyvern Wingman safety ratings, and conduct periodic independent audits of our network partners." },
        ].map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${C.warmGrey}30` }}>
            <button
              onClick={() => setOpenSafety(openSafety === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: fontHead,
                fontSize: 18,
                fontWeight: 500,
                color: C.text,
                textAlign: "left",
              }}
            >
              {item.title}
              <span style={{ fontSize: 20, color: C.bordeaux, transition: "transform 0.3s", transform: openSafety === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
            </button>
            {openSafety === i && (
              <div className="fade-in" style={{ padding: "0 0 20px 0" }}>
                <p style={{ fontFamily: fontBody, fontSize: 14, color: C.muted, lineHeight: 1.8, fontWeight: 300 }}>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <Separator />

      {/* ── MEMBERSHIP ───────────────────────────────────────────── */}
      <section id="membership" style={{ padding: "80px 24px", background: C.cream, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <MicroLabel>Membership</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text, marginBottom: 16 }}>
            The Cullinan Membership
          </h2>
          <p style={{ fontFamily: fontBody, fontSize: 14, color: C.muted, fontWeight: 300, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Fixed-rate access to our global fleet. Preferential availability, dedicated advisors, and the consistency your schedule demands.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 40 }}>
            {[
              { tier: "Silver", hours: "25 hours", benefits: ["Fixed hourly rates", "48-hour availability guarantee", "Dedicated advisor", "Complimentary catering"] },
              { tier: "Gold", hours: "50 hours", benefits: ["Reduced hourly rates", "24-hour availability guarantee", "Priority aircraft selection", "Wi-Fi & catering included", "Empty-leg alerts"] },
              { tier: "Platinum", hours: "100+ hours", benefits: ["Lowest fixed rates", "4-hour availability guarantee", "Guaranteed aircraft type", "Full concierge service", "Crew continuity programme", "Quarterly account reviews"] },
            ].map((t, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "#fff",
                  border: i === 2 ? `2px solid ${C.bordeaux}` : `1px solid ${C.warmGrey}25`,
                  borderRadius: 6,
                  padding: 32,
                  position: "relative",
                }}
              >
                {i === 2 && (
                  <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: C.bordeaux, color: "#fff", fontFamily: fontBody, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 16px", borderRadius: "0 0 4px 4px" }}>
                    Most Popular
                  </div>
                )}
                <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: C.bordeaux, marginBottom: 4, fontWeight: 500 }}>{t.tier}</p>
                <p style={{ fontFamily: fontHead, fontSize: 28, fontWeight: 400, color: C.text, marginBottom: 20 }}>{t.hours}</p>
                {t.benefits.map((b, j) => (
                  <p key={j} style={{ fontFamily: fontBody, fontSize: 13, color: C.muted, fontWeight: 300, padding: "6px 0", borderBottom: j < t.benefits.length - 1 ? `1px solid ${C.warmGrey}20` : "none" }}>
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <button className="btn-primary" onClick={() => openQuote({ notes: "Interested in Cullinan Membership" })}>
            Talk to an Advisor
          </button>
        </div>
      </section>

      <Separator />

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <MicroLabel>Client Testimonials</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text }}>
            Trusted by Those Who Expect the Best
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: 32, background: "#fff", border: `1px solid ${C.warmGrey}20`, borderRadius: 6, position: "relative" }}>
              <span style={{ fontFamily: fontHead, fontSize: 48, color: C.bordeaux, opacity: 0.2, position: "absolute", top: 12, left: 20, lineHeight: 1 }}>"</span>
              <p style={{ fontFamily: fontBody, fontSize: 14, color: C.text, lineHeight: 1.8, fontWeight: 300, fontStyle: "italic", marginBottom: 20, paddingTop: 16 }}>
                "{t.quote}"
              </p>
              <div style={{ borderTop: `1px solid ${C.warmGrey}25`, paddingTop: 12 }}>
                <p style={{ fontFamily: fontHead, fontSize: 16, fontWeight: 500, color: C.text }}>{t.author}</p>
                <p style={{ fontFamily: fontBody, fontSize: 11, color: C.muted, fontWeight: 300 }}>{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto", scrollMarginTop: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <MicroLabel>Frequently Asked Questions</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text }}>
            Everything You Need to Know
          </h2>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${C.warmGrey}30` }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: fontHead,
                fontSize: 18,
                fontWeight: 500,
                color: C.text,
                textAlign: "left",
                gap: 16,
              }}
            >
              <span>{faq.q}</span>
              <span style={{ fontSize: 20, color: C.bordeaux, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
            </button>
            {openFaq === i && (
              <div className="fade-in" style={{ padding: "0 0 20px 0" }}>
                <p style={{ fontFamily: fontBody, fontSize: 14, color: C.muted, lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <Separator />

      {/* ── CONTACT SECTION ──────────────────────────────────────── */}
      <section id="contact" style={{ padding: "80px 24px", background: C.cream, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <MicroLabel>Contact</MicroLabel>
          <h2 style={{ fontFamily: fontHead, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: C.text, marginBottom: 16 }}>
            Start Your Journey
          </h2>
          <p style={{ fontFamily: fontBody, fontSize: 14, color: C.muted, fontWeight: 300, marginBottom: 40 }}>
            Submit your enquiry and a member of our team will respond within the hour.
          </p>
          <button className="btn-primary" onClick={() => openQuote()}>
            Request a Quote
          </button>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ background: "#1a0a0e", color: "rgba(250,250,248,0.5)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: fontLogo, fontSize: 18, letterSpacing: "0.35em", color: "rgba(250,250,248,0.8)", marginBottom: 12 }}>
                CULLINAN JETS
              </div>
              <p style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 300, maxWidth: 320, lineHeight: 1.7 }}>
                Private aviation, curated. On-demand charter and tailored flight solutions for discerning travellers worldwide.
              </p>
            </div>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,248,0.35)", marginBottom: 12 }}>Company</p>
                {["About", "Careers", "Press"].map((l) => (
                  <p key={l} style={{ fontFamily: fontBody, fontSize: 13, fontWeight: 300, marginBottom: 8, cursor: "pointer" }}>{l}</p>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,248,0.35)", marginBottom: 12 }}>Legal</p>
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                  <p key={l} style={{ fontFamily: fontBody, fontSize: 13, fontWeight: 300, marginBottom: 8, cursor: "pointer" }}>{l}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(250,250,248,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: fontBody, fontSize: 11, fontWeight: 300 }}>
              © 2026 Cullinan Jets. All rights reserved.
            </p>
            <p style={{ fontFamily: fontBody, fontSize: 10, fontWeight: 300, fontStyle: "italic" }}>
              All flights operated by certified third-party carriers.
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING MOBILE CTA ──────────────────────────────────── */}
      <style>{`
        @media (min-width: 769px) { .mobile-fab { display: none !important; } }
      `}</style>
      <button
        className="mobile-fab btn-primary"
        onClick={() => openQuote()}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 800,
          borderRadius: 50,
          padding: "14px 24px",
          fontSize: 11,
          boxShadow: "0 8px 32px rgba(90,15,26,0.35)",
        }}
      >
        Get a Quote
      </button>

      {/* ── QUOTE MODAL ──────────────────────────────────────────── */}
      {quoteOpen && (
        <QuoteModal
          onClose={() => setQuoteOpen(false)}
          preFill={quotePreFill}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
          C={C}
          fontHead={fontHead}
          fontBody={fontBody}
          fleetData={fleetData}
        />
      )}
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════
// QUOTE MODAL COMPONENT
// ══════════════════════════════════════════════════════════════════════
function QuoteModal({ onClose, preFill, formSubmitted, setFormSubmitted, C, fontHead, fontBody, fleetData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    passengers: "",
    category: preFill.category || "",
    notes: preFill.model ? `Interested in: ${preFill.model}` : preFill.notes || "",
  });
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.from.trim()) e.from = "Required";
    if (!form.to.trim()) e.to = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (validate()) setFormSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "12px 16px",
    border: `1px solid ${errors[field] ? "#c0392b" : C.warmGrey + "50"}`,
    borderRadius: 4,
    fontFamily: fontBody,
    fontSize: 13,
    color: C.text,
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    fontFamily: fontBody,
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: C.muted,
    marginBottom: 6,
    display: "block",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560 }}>
        <div style={{ padding: "32px 32px 0 32px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontFamily: fontBody, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.bordeaux, marginBottom: 4 }}>Quote Request</p>
            <h2 style={{ fontFamily: fontHead, fontSize: 28, fontWeight: 400, color: C.text }}>
              {formSubmitted ? "Thank You" : "Plan Your Flight"}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: `1px solid ${C.warmGrey}40`, borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 18, color: C.muted, display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div style={{ padding: 32 }}>
          {formSubmitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }} className="fade-up">
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${C.bordeaux}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={C.bordeaux} strokeWidth="2">
                  <polyline points="6,14 12,20 22,8" />
                </svg>
              </div>
              <p style={{ fontFamily: fontBody, fontSize: 14, color: C.text, lineHeight: 1.7, fontWeight: 300 }}>
                Your enquiry has been received. A dedicated aviation advisor will contact you within the hour.
              </p>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input style={inputStyle("name")} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" />
                  {errors.name && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4, fontFamily: fontBody }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input style={inputStyle("email")} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                  {errors.email && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4, fontFamily: fontBody }}>{errors.email}</p>}
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Phone (optional)</label>
                <input style={inputStyle("phone")} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+44 …" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>From *</label>
                  <input style={inputStyle("from")} value={form.from} onChange={(e) => update("from", e.target.value)} placeholder="Departure city / ICAO" />
                  {errors.from && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4, fontFamily: fontBody }}>{errors.from}</p>}
                </div>
                <div>
                  <label style={labelStyle}>To *</label>
                  <input style={inputStyle("to")} value={form.to} onChange={(e) => update("to", e.target.value)} placeholder="Destination city / ICAO" />
                  {errors.to && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4, fontFamily: fontBody }}>{errors.to}</p>}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Date</label>
                  <input style={inputStyle("date")} type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Passengers</label>
                  <input style={inputStyle("passengers")} type="number" min="1" max="200" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} placeholder="No. of passengers" />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Aircraft Category</label>
                <select style={{ ...inputStyle("category"), appearance: "auto" }} value={form.category} onChange={(e) => update("category", e.target.value)}>
                  <option value="">Any / No preference</option>
                  {fleetData.map((f) => (
                    <option key={f.slug} value={f.category}>{f.category}</option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Notes</label>
                <textarea
                  style={{ ...inputStyle("notes"), minHeight: 80, resize: "vertical" }}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Special requirements, return flight, catering preferences…"
                />
              </div>
              <button className="btn-primary" onClick={submit} style={{ width: "100%" }}>
                Submit Enquiry
              </button>
              <p style={{ fontFamily: fontBody, fontSize: 11, color: C.muted, textAlign: "center", marginTop: 12, fontWeight: 300 }}>
                We typically respond within 60 minutes during business hours.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
