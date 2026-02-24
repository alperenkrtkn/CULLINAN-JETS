[Uploading index-2.html…]()
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cullinan Jets — Private Aviation, Curated.</title>
  <meta name="description" content="On-demand private jet charter and tailored flight solutions. Discreet, seamless, global." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    /* ══════════════════════════════════════════════════════════════
       CULLINAN JETS — Complete Styles
       ══════════════════════════════════════════════════════════════ */
    :root {
      --bordeaux: #5A0F1A;
      --bordeaux-light: #7A2030;
      --bordeaux-dark: #3D0F15;
      --offwhite: #FAFAF8;
      --cream: #F5F3EF;
      --text: #121212;
      --muted: #8A8378;
      --warmgrey: #C4BEB5;
      --font-head: 'Cormorant Garamond', 'Georgia', serif;
      --font-body: 'Montserrat', 'Helvetica Neue', sans-serif;
      --font-logo: 'Cormorant Garamond', 'Didot', 'Georgia', serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

    body { background: var(--offwhite); color: var(--text); font-family: var(--font-body); line-height: 1.6; }

    ::selection { background: var(--bordeaux); color: #fff; }

    img { max-width: 100%; display: block; }
    button { font-family: var(--font-body); }
    input, select, textarea { font-family: var(--font-body); }

    /* ── Animations ──────────────────────────────────────────── */
    @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .fade-up { animation: fadeUp 0.7s ease-out both; }
    .fade-in { animation: fadeIn 0.5s ease-out both; }

    /* ── Buttons ──────────────────────────────────────────────── */
    .btn-primary {
      display: inline-block; background: var(--bordeaux); color: #fff; border: none;
      padding: 14px 32px; font-size: 13px; font-weight: 500; letter-spacing: 0.15em;
      text-transform: uppercase; cursor: pointer; transition: all 0.3s ease;
      border-radius: 4px; text-decoration: none; text-align: center;
    }
    .btn-primary:hover { background: var(--bordeaux-light); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(90,15,26,0.25); }

    .btn-secondary {
      display: inline-block; background: transparent; color: var(--bordeaux);
      border: 1.5px solid var(--bordeaux); padding: 13px 32px; font-size: 13px;
      font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase;
      cursor: pointer; transition: all 0.3s ease; border-radius: 4px;
      text-decoration: none; text-align: center;
    }
    .btn-secondary:hover { background: var(--bordeaux); color: #fff; }

    /* ── Micro Label ─────────────────────────────────────────── */
    .micro-label {
      font-family: var(--font-body); font-size: 11px; letter-spacing: 0.25em;
      text-transform: uppercase; color: var(--bordeaux); margin-bottom: 8px; font-weight: 500;
    }

    /* ── Section Heading ─────────────────────────────────────── */
    .section-heading {
      font-family: var(--font-head); font-size: clamp(28px, 4vw, 40px);
      font-weight: 300; color: var(--text);
    }

    /* ── Separator ───────────────────────────────────────────── */
    .separator { display: flex; align-items: center; justify-content: center; padding: 16px 0; }
    .separator-line { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, var(--bordeaux), transparent); }
    .separator-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--bordeaux); margin: 0 8px; opacity: 0.6; }

    /* ── Card Hover ───────────────────────────────────────────── */
    .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(90,15,26,0.08); }

    /* ── Container ────────────────────────────────────────────── */
    .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    .container-sm { max-width: 900px; margin: 0 auto; padding: 0 24px; }
    .container-xs { max-width: 800px; margin: 0 auto; padding: 0 24px; }

    /* ══════════════════════════════════════════════════════════════
       HEADER
       ══════════════════════════════════════════════════════════════ */
    .header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 900;
      transition: all 0.4s ease; padding: 20px 0;
      border-bottom: 1px solid transparent;
    }
    .header.scrolled {
      background: rgba(250,250,248,0.95); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(90,15,26,0.08); padding: 12px 0;
    }
    .header-inner { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 0 24px; }

    .logo {
      font-family: var(--font-logo); font-size: 22px; font-weight: 400;
      letter-spacing: 0.35em; color: var(--bordeaux); cursor: pointer;
      user-select: none; background: none; border: none; text-decoration: none;
    }

    .nav-desktop { display: flex; align-items: center; gap: 32px; }
    .nav-link {
      position: relative; font-size: 11px; font-weight: 500;
      letter-spacing: 0.18em; text-transform: uppercase; color: var(--text);
      cursor: pointer; text-decoration: none; background: none; border: none; padding: 0;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -2px; left: 0; width: 0;
      height: 1px; background: var(--bordeaux); transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }

    .nav-cta { padding: 10px 24px !important; font-size: 11px !important; }

    /* Mobile menu */
    .burger { display: none; background: none; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 5px; }
    .burger span { display: block; width: 24px; height: 1.5px; background: var(--bordeaux); transition: all 0.3s; }
    .burger.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
    .burger.open span:nth-child(2) { opacity: 0; }
    .burger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

    .mobile-menu {
      display: none; position: absolute; top: 100%; left: 0; right: 0;
      background: rgba(250,250,248,0.98); backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(196,190,181,0.4); padding: 24px;
    }
    .mobile-menu.open { display: block; }
    .mobile-menu a {
      display: block; padding: 12px 0; font-size: 13px; letter-spacing: 0.15em;
      text-transform: uppercase; color: var(--text); text-decoration: none;
      border-bottom: 1px solid rgba(196,190,181,0.3);
    }
    .mobile-menu .btn-primary { margin-top: 16px; width: 100%; }

    @media (max-width: 900px) {
      .nav-desktop { display: none; }
      .burger { display: flex; }
    }

    /* ══════════════════════════════════════════════════════════════
       HERO
       ══════════════════════════════════════════════════════════════ */
    .hero {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      background: linear-gradient(135deg, #1a0a0e 0%, #2d0f18 25%, #3d1520 50%, #1a0a0e 100%);
    }
    .hero-overlay1 { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(90,15,26,0.3) 0%, transparent 60%); pointer-events: none; }
    .hero-overlay2 { position: absolute; inset: 0; background: radial-gradient(ellipse at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 50%); pointer-events: none; }
    .hero-line-l { position: absolute; top: 15%; left: 8%; width: 1px; height: 30%; background: linear-gradient(180deg, transparent, rgba(250,250,248,0.15), transparent); pointer-events: none; }
    .hero-line-r { position: absolute; bottom: 15%; right: 8%; width: 1px; height: 25%; background: linear-gradient(180deg, transparent, rgba(250,250,248,0.1), transparent); pointer-events: none; }
    .hero-content { text-align: center; padding: 0 24px; position: relative; z-index: 2; max-width: 800px; }
    .hero-micro { font-family: var(--font-body); font-size: 11px; letter-spacing: 0.4em; text-transform: uppercase; color: rgba(250,250,248,0.5); margin-bottom: 32px; font-weight: 400; }
    .hero h1 { font-family: var(--font-head); font-size: clamp(40px, 7vw, 72px); font-weight: 300; color: var(--offwhite); line-height: 1.1; margin-bottom: 24px; font-style: italic; }
    .hero h1 span { font-style: italic; font-weight: 400; }
    .hero-sub { font-family: var(--font-body); font-size: clamp(14px, 2vw, 17px); color: rgba(250,250,248,0.65); line-height: 1.7; max-width: 560px; margin: 0 auto 48px; font-weight: 300; }
    .hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .hero-btns .btn-primary { background: var(--offwhite); color: var(--bordeaux); }
    .hero-btns .btn-primary:hover { background: #fff; }
    .hero-btns .btn-secondary { border-color: rgba(250,250,248,0.35); color: var(--offwhite); }
    .hero-btns .btn-secondary:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.5); }
    .hero-fade { position: absolute; bottom: 0; left: 0; right: 0; height: 120px; background: linear-gradient(transparent, var(--offwhite)); pointer-events: none; }

    /* ══════════════════════════════════════════════════════════════
       SECTIONS
       ══════════════════════════════════════════════════════════════ */
    .section { padding: 80px 24px; }
    .section-cream { background: var(--cream); }
    .section-center { text-align: center; }

    /* ── Value Props ──────────────────────────────────────────── */
    .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }

    .value-card {
      background: #fff; border: 1px solid rgba(196,190,181,0.18);
      border-radius: 6px; padding: 32px; text-align: center;
    }
    .value-card svg { margin: 0 auto 16px; }
    .value-card h3 { font-family: var(--font-head); font-size: 20px; font-weight: 500; margin-bottom: 10px; }
    .value-card p { font-size: 13px; color: var(--muted); line-height: 1.7; font-weight: 300; }

    /* ── Services ─────────────────────────────────────────────── */
    .service-card {
      background: #fff; border: 1px solid rgba(196,190,181,0.15);
      border-radius: 6px; padding: 32px; position: relative; overflow: hidden;
    }
    .service-card::before {
      content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px;
      background: linear-gradient(90deg, var(--bordeaux), transparent);
    }
    .service-card svg { margin-bottom: 16px; }
    .service-card h3 { font-family: var(--font-head); font-size: 20px; font-weight: 500; margin-bottom: 10px; }
    .service-card p { font-size: 13px; color: var(--muted); line-height: 1.7; font-weight: 300; }

    /* ── Fleet ────────────────────────────────────────────────── */
    .fleet-filter { display: flex; justify-content: center; margin-bottom: 32px; }
    .fleet-filter input {
      width: 100%; max-width: 420px; padding: 12px 20px;
      border: 1px solid rgba(196,190,181,0.3); border-radius: 4px;
      font-size: 13px; background: #fff; color: var(--text); outline: none;
      transition: border-color 0.2s;
    }
    .fleet-filter input:focus { border-color: rgba(90,15,26,0.4); }

    .fleet-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }

    .fleet-card {
      background: #fff; border: 1px solid rgba(196,190,181,0.15);
      border-radius: 6px; overflow: hidden; cursor: pointer; text-align: left;
      display: block; width: 100%; font-family: var(--font-body);
      -webkit-appearance: none; appearance: none;
    }
    .fleet-card-img {
      height: 160px; display: flex; align-items: center; justify-content: center; position: relative;
      background: linear-gradient(135deg, rgba(90,15,26,0.08) 0%, rgba(90,15,26,0.03) 50%, var(--cream) 100%);
    }
    .fleet-card-pax {
      position: absolute; bottom: 12px; right: 16px; font-size: 10px;
      letter-spacing: 0.2em; text-transform: uppercase; color: var(--bordeaux);
      font-weight: 500; background: rgba(255,255,255,0.85); padding: 4px 10px; border-radius: 3px;
    }
    .fleet-card-body { padding: 20px 24px; }
    .fleet-card-body h3 { font-family: var(--font-head); font-size: 22px; font-weight: 500; margin-bottom: 6px; }
    .fleet-card-body .tagline { font-size: 12px; color: var(--muted); font-weight: 300; margin-bottom: 12px; }
    .fleet-card-meta { display: flex; gap: 16px; flex-wrap: wrap; }
    .fleet-card-meta .range { font-size: 11px; color: var(--bordeaux); font-weight: 500; }
    .fleet-card-meta .baggage { font-size: 11px; color: var(--muted); }

    /* ── Accordion ────────────────────────────────────────────── */
    .accordion-item { border-bottom: 1px solid rgba(196,190,181,0.18); }
    .accordion-btn {
      width: 100%; display: flex; align-items: center; justify-content: space-between;
      padding: 20px 0; background: none; border: none; cursor: pointer;
      font-family: var(--font-head); font-size: 18px; font-weight: 500;
      color: var(--text); text-align: left; gap: 16px;
    }
    .accordion-icon { font-size: 20px; color: var(--bordeaux); transition: transform 0.3s; flex-shrink: 0; }
    .accordion-icon.open { transform: rotate(45deg); }
    .accordion-content { padding: 0 0 20px 0; font-size: 14px; color: var(--muted); line-height: 1.8; font-weight: 300; display: none; }
    .accordion-content.open { display: block; }

    /* ── Membership ───────────────────────────────────────────── */
    .tier-card {
      background: #fff; border: 1px solid rgba(196,190,181,0.15);
      border-radius: 6px; padding: 32px; position: relative;
    }
    .tier-card.popular { border: 2px solid var(--bordeaux); }
    .tier-badge {
      position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
      background: var(--bordeaux); color: #fff; font-size: 9px;
      letter-spacing: 0.2em; text-transform: uppercase; padding: 4px 16px;
      border-radius: 0 0 4px 4px;
    }
    .tier-card .tier-name { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--bordeaux); font-weight: 500; margin-bottom: 4px; }
    .tier-card .tier-hours { font-family: var(--font-head); font-size: 28px; font-weight: 400; margin-bottom: 20px; }
    .tier-card .tier-benefit { font-size: 13px; color: var(--muted); font-weight: 300; padding: 6px 0; border-bottom: 1px solid rgba(196,190,181,0.12); }
    .tier-card .tier-benefit:last-child { border-bottom: none; }

    /* ── Testimonials ────────────────────────────────────────── */
    .testimonial-card {
      padding: 32px; background: #fff; border: 1px solid rgba(196,190,181,0.12);
      border-radius: 6px; position: relative;
    }
    .testimonial-card .quote-mark {
      font-family: var(--font-head); font-size: 48px; color: var(--bordeaux);
      opacity: 0.2; position: absolute; top: 12px; left: 20px; line-height: 1;
    }
    .testimonial-card .quote-text {
      font-size: 14px; line-height: 1.8; font-weight: 300; font-style: italic;
      margin-bottom: 20px; padding-top: 16px;
    }
    .testimonial-card .author-block { border-top: 1px solid rgba(196,190,181,0.15); padding-top: 12px; }
    .testimonial-card .author-name { font-family: var(--font-head); font-size: 16px; font-weight: 500; }
    .testimonial-card .author-title { font-size: 11px; color: var(--muted); font-weight: 300; }

    /* ══════════════════════════════════════════════════════════════
       MODAL
       ══════════════════════════════════════════════════════════════ */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1000;
      display: none; align-items: center; justify-content: center;
      backdrop-filter: blur(4px);
    }
    .modal-overlay.open { display: flex; animation: fadeIn 0.2s ease; }
    .modal-content {
      background: var(--offwhite); border-radius: 8px; max-width: 720px;
      width: 92%; max-height: 88vh; overflow-y: auto; position: relative;
      animation: fadeUp 0.35s ease;
    }
    .modal-content::-webkit-scrollbar { width: 4px; }
    .modal-content::-webkit-scrollbar-thumb { background: var(--warmgrey); border-radius: 4px; }
    .modal-close {
      position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.15);
      border: none; border-radius: 50%; width: 36px; height: 36px; color: #fff;
      cursor: pointer; font-size: 18px; display: flex; align-items: center;
      justify-content: center; transition: background 0.2s;
    }
    .modal-close:hover { background: rgba(255,255,255,0.25); }
    .modal-close.dark { background: transparent; border: 1px solid rgba(196,190,181,0.25); color: var(--muted); }
    .modal-close.dark:hover { border-color: rgba(90,15,26,0.4); }

    .modal-header {
      height: 140px; background: linear-gradient(135deg, var(--bordeaux) 0%, #3d1520 100%);
      position: relative; display: flex; align-items: flex-end; padding: 24px 32px;
      border-radius: 8px 8px 0 0;
    }
    .modal-header .label { font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-bottom: 4px; }
    .modal-header h2 { font-family: var(--font-head); font-size: 32px; font-weight: 400; color: #fff; }

    .modal-body { padding: 32px; }

    /* Specs row */
    .specs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; margin-bottom: 32px; }
    .spec-box { text-align: center; padding: 16px; background: var(--cream); border-radius: 4px; }
    .spec-box .spec-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 4px; }
    .spec-box .spec-value { font-family: var(--font-head); font-size: 18px; font-weight: 500; color: var(--bordeaux); }

    .cabin-notes { padding: 20px; border: 1px solid rgba(196,190,181,0.18); border-radius: 4px; margin-bottom: 32px; }
    .cabin-notes .cn-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
    .cabin-notes p { font-size: 13px; line-height: 1.7; font-weight: 300; }

    .aircraft-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 32px; }
    .aircraft-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 20px; background: #fff; border: 1px solid rgba(196,190,181,0.12);
      border-radius: 4px; flex-wrap: wrap; gap: 8px;
    }
    .aircraft-row h4 { font-family: var(--font-head); font-size: 17px; font-weight: 500; }
    .aircraft-row .meta { font-size: 11px; color: var(--muted); font-weight: 300; }
    .aircraft-row .btn-primary { padding: 8px 16px; font-size: 10px; }

    /* ── Quote Form ──────────────────────────────────────────── */
    .quote-modal .modal-content { max-width: 560px; }
    .quote-header { padding: 32px 32px 0 32px; display: flex; justify-content: space-between; align-items: flex-start; }
    .quote-header .micro-label { margin-bottom: 4px; }
    .quote-header h2 { font-family: var(--font-head); font-size: 28px; font-weight: 400; }

    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    .form-group { margin-bottom: 16px; }
    .form-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; display: block; }
    .form-input {
      width: 100%; padding: 12px 16px; border: 1px solid rgba(196,190,181,0.3);
      border-radius: 4px; font-size: 13px; color: var(--text); background: #fff;
      outline: none; transition: border-color 0.2s;
    }
    .form-input:focus { border-color: rgba(90,15,26,0.4); }
    .form-input.error { border-color: #c0392b; }
    .form-error { color: #c0392b; font-size: 11px; margin-top: 4px; }
    .form-note { font-size: 11px; color: var(--muted); text-align: center; margin-top: 12px; font-weight: 300; }

    .success-msg { text-align: center; padding: 24px 0; }
    .success-icon {
      width: 64px; height: 64px; border-radius: 50%;
      background: rgba(90,15,26,0.08); display: flex; align-items: center;
      justify-content: center; margin: 0 auto 20px;
    }
    .success-msg p { font-size: 14px; line-height: 1.7; font-weight: 300; }

    /* ══════════════════════════════════════════════════════════════
       FOOTER
       ══════════════════════════════════════════════════════════════ */
    .footer { background: #1a0a0e; color: rgba(250,250,248,0.5); padding: 48px 24px; }
    .footer-inner { max-width: 1100px; margin: 0 auto; }
    .footer-top { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 32px; margin-bottom: 32px; }
    .footer-logo { font-family: var(--font-logo); font-size: 18px; letter-spacing: 0.35em; color: rgba(250,250,248,0.8); margin-bottom: 12px; }
    .footer-desc { font-size: 12px; font-weight: 300; max-width: 320px; line-height: 1.7; }
    .footer-links { display: flex; gap: 40px; flex-wrap: wrap; }
    .footer-col-title { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(250,250,248,0.35); margin-bottom: 12px; }
    .footer-col a { display: block; font-size: 13px; font-weight: 300; margin-bottom: 8px; color: rgba(250,250,248,0.5); text-decoration: none; cursor: pointer; transition: color 0.2s; }
    .footer-col a:hover { color: rgba(250,250,248,0.8); }
    .footer-bottom { border-top: 1px solid rgba(250,250,248,0.08); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
    .footer-bottom p { font-size: 11px; font-weight: 300; }
    .footer-bottom .italic { font-style: italic; font-size: 10px; }

    /* ── Floating CTA ────────────────────────────────────────── */
    .floating-cta {
      position: fixed; bottom: 24px; right: 24px; z-index: 800;
      border-radius: 50px; padding: 14px 24px; font-size: 11px;
      box-shadow: 0 8px 32px rgba(90,15,26,0.35); display: none;
    }
    @media (max-width: 768px) {
      .floating-cta { display: inline-block; }
      .modal-content { max-width: 100% !important; width: 100% !important; border-radius: 0 !important; min-height: 100vh; max-height: 100vh; }
      .modal-header { border-radius: 0 !important; }
      .form-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- ══════════════ HEADER ══════════════ -->
  <header class="header" id="header">
    <div class="header-inner">
      <a class="logo" onclick="window.scrollTo({top:0,behavior:'smooth'})">CULLINAN JETS</a>
      <nav class="nav-desktop">
        <a class="nav-link" onclick="scrollTo_('services')">Services</a>
        <a class="nav-link" onclick="scrollTo_('fleet')">Fleet</a>
        <a class="nav-link" onclick="scrollTo_('safety')">Safety</a>
        <a class="nav-link" onclick="scrollTo_('membership')">Membership</a>
        <a class="nav-link" onclick="scrollTo_('faq')">FAQ</a>
        <a class="nav-link" onclick="scrollTo_('contact')">Contact</a>
        <button class="btn-primary nav-cta" onclick="openQuote()">Request a Quote</button>
      </nav>
      <button class="burger" id="burger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a onclick="scrollTo_('services');closeMenu()">Services</a>
      <a onclick="scrollTo_('fleet');closeMenu()">Fleet</a>
      <a onclick="scrollTo_('safety');closeMenu()">Safety</a>
      <a onclick="scrollTo_('membership');closeMenu()">Membership</a>
      <a onclick="scrollTo_('faq');closeMenu()">FAQ</a>
      <a onclick="scrollTo_('contact');closeMenu()">Contact</a>
      <button class="btn-primary" onclick="openQuote();closeMenu()" style="margin-top:16px;width:100%">Request a Quote</button>
    </div>
  </header>

  <!-- ══════════════ HERO ══════════════ -->
  <section class="hero">
    <div class="hero-overlay1"></div>
    <div class="hero-overlay2"></div>
    <div class="hero-line-l"></div>
    <div class="hero-line-r"></div>
    <div class="hero-content fade-up">
      <p class="hero-micro">Private Aviation</p>
      <h1>Private Aviation, <span>Curated.</span></h1>
      <p class="hero-sub">On-demand charter and tailored flight solutions — discreet, seamless, global.</p>
      <div class="hero-btns">
        <button class="btn-primary" onclick="openQuote()">Request a Quote</button>
        <button class="btn-secondary" onclick="scrollTo_('fleet')">Explore Fleet</button>
      </div>
    </div>
    <div class="hero-fade"></div>
  </section>

  <!-- ══════════════ VALUE PROPS ══════════════ -->
  <section class="section">
    <div class="container section-center">
      <p class="micro-label">Why Cullinan</p>
      <h2 class="section-heading" style="margin-bottom:48px">The Standard in Private Aviation</h2>
      <div class="grid-4">
        <div class="value-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><circle cx="16" cy="10" r="4"/><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10"/><path d="M22 8l4-4M24 4h-4v4"/></svg>
          <h3>24/7 Concierge</h3>
          <p>Dedicated aviation advisors available around the clock. Your journey begins with a single call.</p>
        </div>
        <div class="value-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><circle cx="16" cy="16" r="12"/><ellipse cx="16" cy="16" rx="6" ry="12"/><line x1="4" y1="12" x2="28" y2="12"/><line x1="4" y1="20" x2="28" y2="20"/></svg>
          <h3>Global Access</h3>
          <p>Access to 5,000+ aircraft worldwide. Any airport, any continent, any time.</p>
        </div>
        <div class="value-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><rect x="4" y="8" width="24" height="16" rx="2"/><line x1="4" y1="14" x2="28" y2="14"/><circle cx="20" cy="20" r="2"/></svg>
          <h3>Transparent Pricing</h3>
          <p>Clear, competitive quotes with no hidden fees. Know exactly what you're paying.</p>
        </div>
        <div class="value-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><path d="M16 3L4 8v8c0 7.18 5.12 13.4 12 15 6.88-1.6 12-7.82 12-15V8L16 3z"/><polyline points="11,16 14,19 21,12"/></svg>
          <h3>Safety First</h3>
          <p>Every operator vetted against the industry's highest safety and compliance standards.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ SERVICES ══════════════ -->
  <section class="section" id="services">
    <div class="container section-center">
      <p class="micro-label">Services</p>
      <h2 class="section-heading" style="margin-bottom:48px">Tailored to Your Journey</h2>
      <div class="grid-2">
        <div class="service-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><path d="M2 22l14-16 14 16"/><path d="M8 22v-6l8-8 8 8v6"/><rect x="13" y="18" width="6" height="4"/></svg>
          <h3>On-Demand Charter</h3>
          <p>Bespoke private flights arranged on your schedule. From light jets to VIP airliners, we source the ideal aircraft for every mission.</p>
        </div>
        <div class="service-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><rect x="6" y="4" width="20" height="24" rx="2"/><line x1="12" y1="10" x2="20" y2="10"/><line x1="12" y1="14" x2="20" y2="14"/><line x1="12" y1="18" x2="17" y2="18"/></svg>
          <h3>Corporate Travel</h3>
          <p>Streamlined travel programmes for executive teams. Consistent standards, preferential rates, dedicated account management.</p>
        </div>
        <div class="service-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><circle cx="12" cy="10" r="3"/><circle cx="22" cy="10" r="3"/><path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8"/><path d="M18 18c2-1 4-1 6 0 2.5 1.5 4 4 4 8"/></svg>
          <h3>Group & VIP Airline</h3>
          <p>Large-group charters for corporate events, sports teams, and high-profile tours. Custom cabin configurations available.</p>
        </div>
        <div class="service-card card-hover">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#5A0F1A" stroke-width="1.5"><rect x="4" y="8" width="24" height="18" rx="2"/><path d="M4 14h24"/><path d="M12 8V4h8v4"/><line x1="16" y1="14" x2="16" y2="26"/></svg>
          <h3>Cargo & Special Missions</h3>
          <p>Time-critical freight, medevac, aerial survey, and special operations flights. Discreet and efficient.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ FLEET ══════════════ -->
  <section class="section section-cream" id="fleet">
    <div class="container section-center">
      <p class="micro-label">Fleet Explorer</p>
      <h2 class="section-heading" style="margin-bottom:16px">Aircraft for Every Mission</h2>
      <p style="font-size:14px;color:var(--muted);font-weight:300;margin-bottom:32px">Select a category to explore specifications and available models.</p>
      <div class="fleet-filter">
        <input type="text" id="fleetSearch" placeholder="Filter by passengers, range, or category…" oninput="filterFleet()" />
      </div>
      <div class="fleet-grid" id="fleetGrid"></div>
    </div>
  </section>

  <!-- ══════════════ FLEET MODAL ══════════════ -->
  <div class="modal-overlay" id="fleetModal">
    <div class="modal-content" onclick="event.stopPropagation()">
      <div class="modal-header">
        <button class="modal-close" onclick="closeFleetModal()">×</button>
        <div>
          <p class="label">Fleet Category</p>
          <h2 id="fleetModalTitle"></h2>
        </div>
      </div>
      <div class="modal-body" id="fleetModalBody"></div>
    </div>
  </div>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ SAFETY ══════════════ -->
  <section class="section" id="safety">
    <div class="container-sm section-center">
      <p class="micro-label">Safety & Standards</p>
      <h2 class="section-heading" style="margin-bottom:48px">Uncompromising Operational Standards</h2>
      <div id="safetyAccordion" style="text-align:left"></div>
    </div>
  </section>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ MEMBERSHIP ══════════════ -->
  <section class="section section-cream" id="membership">
    <div class="container-sm section-center">
      <p class="micro-label">Membership</p>
      <h2 class="section-heading" style="margin-bottom:16px">The Cullinan Membership</h2>
      <p style="font-size:14px;color:var(--muted);font-weight:300;max-width:560px;margin:0 auto 48px;line-height:1.7">Fixed-rate access to our global fleet. Preferential availability, dedicated advisors, and the consistency your schedule demands.</p>
      <div class="grid-3" id="tierCards"></div>
      <div style="margin-top:40px">
        <button class="btn-primary" onclick="openQuote({notes:'Interested in Cullinan Membership'})">Talk to an Advisor</button>
      </div>
    </div>
  </section>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ TESTIMONIALS ══════════════ -->
  <section class="section">
    <div class="container section-center">
      <p class="micro-label">Client Testimonials</p>
      <h2 class="section-heading" style="margin-bottom:48px">Trusted by Those Who Expect the Best</h2>
      <div class="grid-3" id="testimonialCards"></div>
    </div>
  </section>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ FAQ ══════════════ -->
  <section class="section" id="faq">
    <div class="container-xs section-center">
      <p class="micro-label">Frequently Asked Questions</p>
      <h2 class="section-heading" style="margin-bottom:48px">Everything You Need to Know</h2>
      <div id="faqAccordion" style="text-align:left"></div>
    </div>
  </section>

  <div class="separator"><div class="separator-line"></div><div class="separator-dot"></div><div class="separator-line"></div></div>

  <!-- ══════════════ CONTACT ══════════════ -->
  <section class="section section-cream" id="contact">
    <div style="max-width:600px;margin:0 auto;text-align:center">
      <p class="micro-label">Contact</p>
      <h2 class="section-heading" style="margin-bottom:16px">Start Your Journey</h2>
      <p style="font-size:14px;color:var(--muted);font-weight:300;margin-bottom:40px">Submit your enquiry and a member of our team will respond within the hour.</p>
      <button class="btn-primary" onclick="openQuote()">Request a Quote</button>
    </div>
  </section>

  <!-- ══════════════ FOOTER ══════════════ -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-logo">CULLINAN JETS</div>
          <p class="footer-desc">Private aviation, curated. On-demand charter and tailored flight solutions for discerning travellers worldwide.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <p class="footer-col-title">Company</p>
            <a>About</a><a>Careers</a><a>Press</a>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Legal</p>
            <a>Privacy Policy</a><a>Terms of Service</a><a>Cookie Policy</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Cullinan Jets. All rights reserved.</p>
        <p class="italic">All flights operated by certified third-party carriers.</p>
      </div>
    </div>
  </footer>

  <!-- ══════════════ FLOATING CTA ══════════════ -->
  <button class="btn-primary floating-cta" onclick="openQuote()">Get a Quote</button>

  <!-- ══════════════ QUOTE MODAL ══════════════ -->
  <div class="modal-overlay quote-modal" id="quoteModal" onclick="closeQuote()">
    <div class="modal-content" onclick="event.stopPropagation()" style="max-width:560px">
      <div class="quote-header">
        <div>
          <p class="micro-label">Quote Request</p>
          <h2 id="quoteTitle">Plan Your Flight</h2>
        </div>
        <button class="modal-close dark" onclick="closeQuote()">×</button>
      </div>
      <div class="modal-body" id="quoteBody"></div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════════
       JAVASCRIPT
       ══════════════════════════════════════════════════════════════ -->
  <script>
    // ── FLEET DATA (edit this to change aircraft/specs) ─────────
    const fleetData = [
      { slug:"light-jets", category:"Light Jets", tagline:"Agile. Efficient. Perfect for short hops.", overview:"Light jets offer the ideal balance of speed, comfort and economy for flights up to 2,000 nm. Perfect for business day-trips, weekend escapes, or connecting between regional hubs with style.", passengers:"6–8", range:"1,500–2,100 nm", baggage:"45–65 cu ft", cabinNotes:"Stand-up cabin in select models, fully enclosed lavatory, refreshment centre, leather club seating.", aircraft:[{model:"Embraer Phenom 300E",pax:"7–8",range:"2,010 nm"},{model:"Cessna Citation CJ3+",pax:"6–7",range:"1,875 nm"},{model:"HondaJet Elite S",pax:"5–6",range:"1,437 nm"}] },
      { slug:"midsize-jets", category:"Midsize Jets", tagline:"Versatile comfort for transcontinental reach.", overview:"Midsize jets combine generous cabin space with impressive range, making them ideal for cross-country travel or international hops.", passengers:"7–9", range:"2,000–3,000 nm", baggage:"70–90 cu ft", cabinNotes:"Stand-up cabin, full galley, enclosed lavatory, flat-floor cabin, Wi-Fi connectivity.", aircraft:[{model:"Cessna Citation XLS+",pax:"8–9",range:"2,100 nm"},{model:"Bombardier Learjet 60XR",pax:"7–8",range:"2,405 nm"},{model:"Hawker 900XP",pax:"8",range:"2,800 nm"}] },
      { slug:"super-midsize-jets", category:"Super Midsize Jets", tagline:"Where performance meets indulgence.", overview:"Super midsize jets deliver heavy-jet comfort with midsize efficiency. Wide cabins, coast-to-coast range, and premium amenities.", passengers:"8–10", range:"3,000–4,000 nm", baggage:"90–120 cu ft", cabinNotes:"Flat-floor wide cabin, full refreshment centre, berthing seats, advanced entertainment systems.", aircraft:[{model:"Bombardier Challenger 350",pax:"8–10",range:"3,200 nm"},{model:"Cessna Citation Longitude",pax:"8–9",range:"3,500 nm"},{model:"Embraer Praetor 600",pax:"8–10",range:"3,900 nm"}] },
      { slug:"heavy-jets", category:"Heavy Jets", tagline:"Intercontinental capability. Uncompromised luxury.", overview:"Heavy jets are designed for long-haul missions with full-size cabins, sleeping arrangements, and the amenities of a flying office.", passengers:"10–16", range:"4,000–5,500 nm", baggage:"120–180 cu ft", cabinNotes:"Multiple cabin zones, full galley, shower-capable lavatory, satellite communications, sleeping berths.", aircraft:[{model:"Gulfstream G450",pax:"12–14",range:"4,350 nm"},{model:"Dassault Falcon 900LX",pax:"12",range:"4,750 nm"},{model:"Bombardier Challenger 650",pax:"10–12",range:"4,000 nm"}] },
      { slug:"ultra-long-range", category:"Ultra-Long-Range Jets", tagline:"No destination is beyond reach.", overview:"Ultra-long-range jets represent the pinnacle of private aviation—connecting any two cities on Earth nonstop.", passengers:"12–19", range:"6,000–7,700 nm", baggage:"180–250 cu ft", cabinNotes:"Four living areas, crew rest quarters, full-size galley, master suite with shower, cinema-grade entertainment.", aircraft:[{model:"Gulfstream G650ER",pax:"13–16",range:"7,500 nm"},{model:"Bombardier Global 7500",pax:"14–19",range:"7,700 nm"},{model:"Dassault Falcon 8X",pax:"12–14",range:"6,450 nm"}] },
      { slug:"vip-airliners", category:"VIP Airliners", tagline:"A private residence at 41,000 feet.", overview:"VIP airliners transform wide-body commercial aircraft into bespoke flying palaces for heads of state and UHNW principals.", passengers:"20–80+", range:"6,000–9,000+ nm", baggage:"Unlimited (cargo hold)", cabinNotes:"Bespoke interiors: bedrooms, boardrooms, lounges, dining halls, medical suites. Fully customised.", aircraft:[{model:"Airbus ACJ320neo",pax:"20–40",range:"6,000 nm"},{model:"Boeing BBJ 737 MAX",pax:"25–50",range:"6,500 nm"},{model:"Boeing BBJ 787-8",pax:"40–80",range:"9,945 nm"}] }
    ];

    const safetyData = [
      {title:"Operator Vetting",content:"Every operator in our network undergoes rigorous due diligence including AOC verification, insurance validation, fleet age analysis, and crew qualification review."},
      {title:"Crew Experience",content:"We mandate minimum flight-hour requirements for all crew members. Captains average 8,000+ hours, with type-specific experience and recurrent training verified annually."},
      {title:"Insurance & Compliance",content:"All aircraft carry comprehensive hull and liability insurance meeting or exceeding regulatory requirements. We verify coverage validity before every flight."},
      {title:"Operational Oversight",content:"Our operations team monitors every flight in real time, providing proactive weather briefings, slot management, and contingency planning."},
      {title:"Third-Party Audits",content:"We recognise and prioritise operators holding IS-BAO, ARGUS Platinum, or Wyvern Wingman safety ratings."}
    ];

    const faqData = [
      {q:"How far in advance should I book?",a:"We can arrange flights with as little as 4 hours' notice, though 24–48 hours is ideal for optimal aircraft selection and pricing."},
      {q:"Are empty legs available?",a:"Yes. We regularly publish empty-leg opportunities at significantly reduced rates. Contact your advisor for current availability."},
      {q:"Who operates the aircraft?",a:"All flights are operated by certified, audited third-party carriers holding the necessary Air Operator Certificates."},
      {q:"Can I bring pets on board?",a:"Absolutely. Pets travel in the cabin with you. Please inform us at booking so we can prepare accordingly."},
      {q:"What is your cancellation policy?",a:"Cancellation terms vary by operator. Generally, cancellations 72+ hours before departure incur no charge."},
      {q:"Do you offer cargo or special mission flights?",a:"Yes. We arrange cargo charters, medevac flights, aerial survey missions, and other special operations."}
    ];

    const testimonialData = [
      {quote:"Cullinan Jets arranged our entire European tour in 48 hours. Flawless from wheels-up to touchdown.",author:"M. Al-Rashid",title:"Family Office Principal"},
      {quote:"The level of discretion and professionalism is unmatched. They understand what privacy truly means.",author:"S. Vandermeer",title:"CEO, Private Equity"},
      {quote:"We moved our entire executive travel programme to Cullinan. The consistency is remarkable.",author:"J. Thornton-Clarke",title:"Chief of Staff, FTSE 100"}
    ];

    const tierData = [
      {tier:"Silver",hours:"25 hours",benefits:["Fixed hourly rates","48-hour availability guarantee","Dedicated advisor","Complimentary catering"]},
      {tier:"Gold",hours:"50 hours",benefits:["Reduced hourly rates","24-hour availability guarantee","Priority aircraft selection","Wi-Fi & catering included","Empty-leg alerts"]},
      {tier:"Platinum",hours:"100+ hours",popular:true,benefits:["Lowest fixed rates","4-hour availability guarantee","Guaranteed aircraft type","Full concierge service","Crew continuity programme","Quarterly account reviews"]}
    ];

    // ── HELPERS ──────────────────────────────────────────────────
    function scrollTo_(id) { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }

    function toggleMenu() {
      const b = document.getElementById('burger');
      const m = document.getElementById('mobileMenu');
      b.classList.toggle('open');
      m.classList.toggle('open');
    }
    function closeMenu() {
      document.getElementById('burger').classList.remove('open');
      document.getElementById('mobileMenu').classList.remove('open');
    }

    // Header scroll
    window.addEventListener('scroll', () => {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
    }, {passive:true});

    // ── FLEET GRID ──────────────────────────────────────────────
    function renderFleet(data) {
      const g = document.getElementById('fleetGrid');
      g.innerHTML = data.map(f => `
        <button class="fleet-card card-hover" onclick="openFleetModal('${f.slug}')">
          <div class="fleet-card-img">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#5A0F1A" stroke-width="1" opacity="0.2"><path d="M8 36l24-20 24 20"/><path d="M32 16v-6"/><circle cx="32" cy="8" r="2"/><path d="M18 36l-10 8h48l-10-8"/></svg>
            <span class="fleet-card-pax">${f.passengers} pax</span>
          </div>
          <div class="fleet-card-body">
            <h3>${f.category}</h3>
            <p class="tagline">${f.tagline}</p>
            <div class="fleet-card-meta">
              <span class="range">Range: ${f.range}</span>
              <span class="baggage">Baggage: ${f.baggage}</span>
            </div>
          </div>
        </button>
      `).join('');
    }

    function filterFleet() {
      const q = document.getElementById('fleetSearch').value.toLowerCase();
      const filtered = fleetData.filter(f =>
        f.category.toLowerCase().includes(q) ||
        f.passengers.toLowerCase().includes(q) ||
        f.range.toLowerCase().includes(q) ||
        f.aircraft.some(a => a.model.toLowerCase().includes(q))
      );
      renderFleet(filtered);
    }

    // ── FLEET MODAL ─────────────────────────────────────────────
    function openFleetModal(slug) {
      const f = fleetData.find(x => x.slug === slug);
      if (!f) return;
      document.getElementById('fleetModalTitle').textContent = f.category;
      document.getElementById('fleetModalBody').innerHTML = `
        <p style="font-size:14px;color:var(--muted);line-height:1.8;font-weight:300;margin-bottom:24px">${f.overview}</p>
        <div class="specs-grid">
          <div class="spec-box"><p class="spec-label">Passengers</p><p class="spec-value">${f.passengers}</p></div>
          <div class="spec-box"><p class="spec-label">Range</p><p class="spec-value">${f.range}</p></div>
          <div class="spec-box"><p class="spec-label">Baggage</p><p class="spec-value">${f.baggage}</p></div>
        </div>
        <div class="cabin-notes"><p class="cn-label">Cabin Notes</p><p>${f.cabinNotes}</p></div>
        <p style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);margin-bottom:12px">Available Aircraft</p>
        <div class="aircraft-list">
          ${f.aircraft.map(a => `
            <div class="aircraft-row">
              <div><h4>${a.model}</h4><p class="meta">${a.pax} passengers · ${a.range} range</p></div>
              <button class="btn-primary" style="padding:8px 16px;font-size:10px" onclick="closeFleetModal();openQuote({category:'${f.category}',model:'${a.model}'})">Request</button>
            </div>
          `).join('')}
        </div>
        <button class="btn-primary" style="width:100%" onclick="closeFleetModal();openQuote({category:'${f.category}'})">Request This Category</button>
      `;
      const m = document.getElementById('fleetModal');
      m.classList.add('open');
      m.onclick = (e) => { if (e.target === m) closeFleetModal(); };
    }
    function closeFleetModal() { document.getElementById('fleetModal').classList.remove('open'); }

    // ── ACCORDION BUILDER ───────────────────────────────────────
    function buildAccordion(containerId, items) {
      const c = document.getElementById(containerId);
      c.innerHTML = items.map((item, i) => `
        <div class="accordion-item">
          <button class="accordion-btn" onclick="toggleAccordion('${containerId}',${i})">
            <span>${item.q || item.title}</span>
            <span class="accordion-icon" id="${containerId}-icon-${i}">+</span>
          </button>
          <div class="accordion-content" id="${containerId}-content-${i}">
            <p>${item.a || item.content}</p>
          </div>
        </div>
      `).join('');
    }
    function toggleAccordion(cid, idx) {
      const content = document.getElementById(`${cid}-content-${idx}`);
      const icon = document.getElementById(`${cid}-icon-${idx}`);
      const isOpen = content.classList.contains('open');
      // close all in this group
      document.querySelectorAll(`#${cid} .accordion-content`).forEach(el => el.classList.remove('open'));
      document.querySelectorAll(`#${cid} .accordion-icon`).forEach(el => el.classList.remove('open'));
      if (!isOpen) { content.classList.add('open'); icon.classList.add('open'); }
    }

    // ── TESTIMONIALS ────────────────────────────────────────────
    function renderTestimonials() {
      document.getElementById('testimonialCards').innerHTML = testimonialData.map(t => `
        <div class="testimonial-card">
          <span class="quote-mark">&ldquo;</span>
          <p class="quote-text">&ldquo;${t.quote}&rdquo;</p>
          <div class="author-block">
            <p class="author-name">${t.author}</p>
            <p class="author-title">${t.title}</p>
          </div>
        </div>
      `).join('');
    }

    // ── TIERS ───────────────────────────────────────────────────
    function renderTiers() {
      document.getElementById('tierCards').innerHTML = tierData.map(t => `
        <div class="tier-card card-hover ${t.popular ? 'popular' : ''}">
          ${t.popular ? '<div class="tier-badge">Most Popular</div>' : ''}
          <p class="tier-name">${t.tier}</p>
          <p class="tier-hours">${t.hours}</p>
          ${t.benefits.map((b, i) => `<p class="tier-benefit">${b}</p>`).join('')}
        </div>
      `).join('');
    }

    // ── QUOTE MODAL ─────────────────────────────────────────────
    let quotePreFill = {};
    function openQuote(pf) {
      quotePreFill = pf || {};
      renderQuoteForm();
      const m = document.getElementById('quoteModal');
      m.classList.add('open');
      m.onclick = (e) => { if (e.target === m) closeQuote(); };
      document.getElementById('quoteTitle').textContent = 'Plan Your Flight';
    }
    function closeQuote() { document.getElementById('quoteModal').classList.remove('open'); }

    function renderQuoteForm() {
      const notesVal = quotePreFill.model ? `Interested in: ${quotePreFill.model}` : (quotePreFill.notes || '');
      const catVal = quotePreFill.category || '';
      const catOptions = fleetData.map(f => `<option value="${f.category}" ${f.category===catVal?'selected':''}>${f.category}</option>`).join('');

      document.getElementById('quoteBody').innerHTML = `
        <div class="form-grid">
          <div><label class="form-label">Name *</label><input class="form-input" id="qName" placeholder="Full name" /></div>
          <div><label class="form-label">Email *</label><input class="form-input" id="qEmail" type="email" placeholder="you@example.com" /></div>
        </div>
        <div class="form-group"><label class="form-label">Phone (optional)</label><input class="form-input" id="qPhone" placeholder="+44 …" /></div>
        <div class="form-grid">
          <div><label class="form-label">From *</label><input class="form-input" id="qFrom" placeholder="Departure city / ICAO" /></div>
          <div><label class="form-label">To *</label><input class="form-input" id="qTo" placeholder="Destination city / ICAO" /></div>
        </div>
        <div class="form-grid">
          <div><label class="form-label">Date</label><input class="form-input" id="qDate" type="date" /></div>
          <div><label class="form-label">Passengers</label><input class="form-input" id="qPax" type="number" min="1" max="200" placeholder="No. of passengers" /></div>
        </div>
        <div class="form-group">
          <label class="form-label">Aircraft Category</label>
          <select class="form-input" id="qCat"><option value="">Any / No preference</option>${catOptions}</select>
        </div>
        <div class="form-group">
          <label class="form-label">Notes</label>
          <textarea class="form-input" id="qNotes" style="min-height:80px;resize:vertical" placeholder="Special requirements, return flight, catering…">${notesVal}</textarea>
        </div>
        <button class="btn-primary" style="width:100%" onclick="submitQuote()">Submit Enquiry</button>
        <p class="form-note">We typically respond within 60 minutes during business hours.</p>
      `;
    }

    function submitQuote() {
      let ok = true;
      ['qName','qEmail','qFrom','qTo'].forEach(id => {
        const el = document.getElementById(id);
        const v = el.value.trim();
        const isEmail = id === 'qEmail';
        const valid = isEmail ? /\S+@\S+\.\S+/.test(v) : v.length > 0;
        el.classList.toggle('error', !valid);
        if (!valid) ok = false;
      });
      if (!ok) return;

      document.getElementById('quoteTitle').textContent = 'Thank You';
      document.getElementById('quoteBody').innerHTML = `
        <div class="success-msg fade-up">
          <div class="success-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#5A0F1A" stroke-width="2"><polyline points="6,14 12,20 22,8"/></svg>
          </div>
          <p>Your enquiry has been received. A dedicated aviation advisor will contact you within the hour.</p>
        </div>
      `;
    }

    // ── INIT ────────────────────────────────────────────────────
    renderFleet(fleetData);
    buildAccordion('safetyAccordion', safetyData);
    buildAccordion('faqAccordion', faqData);
    renderTestimonials();
    renderTiers();
  </script>
</body>
</html>
