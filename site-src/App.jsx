import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/logo.webp";
const APP_STORE_URL = "https://apps.apple.com/us/app/bitty-city-habit-builder/id6788958958";
const APP_STORE_QR_PATH = "M0 0.5h7m1 0h1m2 0h2m2 0h3m1 0h7m2 0h1m1 0h7m-37 1h1m5 0h1m1 0h2m1 0h1m3 0h1m3 0h1m1 0h1m2 0h3m3 0h1m5 0h1m-37 1h1m1 0h3m1 0h1m1 0h1m1 0h4m2 0h1m1 0h2m1 0h1m2 0h2m4 0h1m1 0h3m1 0h1m-37 1h1m1 0h3m1 0h1m2 0h1m1 0h2m1 0h4m3 0h3m1 0h1m4 0h1m1 0h3m1 0h1m-37 1h1m1 0h3m1 0h1m1 0h1m5 0h2m3 0h1m1 0h1m4 0h1m1 0h1m1 0h1m1 0h3m1 0h1m-37 1h1m5 0h1m2 0h3m1 0h1m8 0h2m1 0h2m1 0h1m1 0h1m5 0h1m-37 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-26 1h1m2 0h1m2 0h3m5 0h1m-26 1h1m2 0h7m4 0h2m3 0h1m1 0h2m4 0h1m1 0h1m2 0h1m1 0h3m-37 1h1m4 0h1m2 0h1m1 0h3m3 0h3m2 0h5m1 0h2m2 0h2m2 0h1m-34 1h3m1 0h1m5 0h1m1 0h7m1 0h2m3 0h1m1 0h2m1 0h1m3 0h1m-37 1h1m1 0h1m7 0h3m1 0h1m1 0h2m1 0h2m2 0h1m6 0h7m-37 1h1m1 0h2m2 0h2m1 0h1m1 0h1m3 0h2m1 0h1m4 0h1m3 0h1m2 0h2m4 0h1m-37 1h1m7 0h4m1 0h1m1 0h2m1 0h1m2 0h1m1 0h1m2 0h4m2 0h2m-34 1h2m1 0h1m2 0h2m2 0h1m2 0h1m1 0h1m2 0h3m4 0h1m1 0h1m1 0h2m1 0h5m-35 1h4m2 0h2m1 0h2m1 0h1m5 0h4m2 0h1m1 0h1m1 0h2m1 0h2m-34 1h1m3 0h5m1 0h4m2 0h3m1 0h2m2 0h3m2 0h1m3 0h3m-37 1h1m1 0h1m1 0h1m3 0h1m1 0h5m7 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h2m-29 1h1m1 0h6m2 0h2m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h3m1 0h1m-37 1h3m1 0h2m1 0h1m2 0h3m2 0h2m2 0h2m1 0h1m1 0h2m4 0h2m4 0h1m-36 1h1m1 0h4m2 0h1m3 0h2m1 0h2m1 0h1m3 0h2m3 0h6m-34 1h3m2 0h1m2 0h2m1 0h2m2 0h5m3 0h5m1 0h1m2 0h1m1 0h1m-34 1h1m4 0h3m1 0h2m3 0h2m3 0h2m1 0h1m2 0h2m2 0h2m1 0h1m2 0h1m-35 1h4m2 0h2m2 0h1m1 0h1m1 0h1m1 0h2m3 0h1m3 0h1m2 0h5m1 0h1m-37 1h3m1 0h1m1 0h4m1 0h3m3 0h1m1 0h4m3 0h1m1 0h1m1 0h2m3 0h2m-37 1h1m3 0h1m5 0h2m6 0h2m2 0h3m2 0h3m2 0h3m-35 1h3m1 0h5m1 0h2m1 0h1m1 0h1m1 0h2m2 0h2m1 0h1m1 0h2m2 0h1m3 0h3m-37 1h1m1 0h1m1 0h2m1 0h1m5 0h1m2 0h1m2 0h1m2 0h1m1 0h1m1 0h2m2 0h6m-36 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m2 0h2m1 0h1m1 0h2m2 0h9m-29 1h1m6 0h1m1 0h5m3 0h1m2 0h1m3 0h1m1 0h2m-36 1h7m1 0h4m1 0h1m1 0h5m3 0h1m1 0h2m1 0h1m1 0h1m1 0h1m3 0h1m-37 1h1m5 0h1m1 0h2m3 0h1m2 0h1m4 0h1m1 0h1m1 0h1m2 0h1m3 0h1m3 0h1m-37 1h1m1 0h3m1 0h1m1 0h1m5 0h3m1 0h1m1 0h2m1 0h1m3 0h6m-33 1h1m1 0h3m1 0h1m1 0h2m2 0h2m3 0h1m2 0h1m1 0h3m2 0h1m1 0h2m3 0h1m1 0h1m-37 1h1m1 0h3m1 0h1m2 0h2m1 0h1m1 0h1m2 0h2m2 0h1m1 0h1m1 0h3m4 0h3m1 0h1m-37 1h1m5 0h1m3 0h1m1 0h2m1 0h1m1 0h1m4 0h2m2 0h1m2 0h2m1 0h5m-37 1h7m1 0h3m2 0h1m5 0h2m1 0h3m2 0h3m1 0h1m4 0h1";

const KIT_FORM_HTML = `<script src="https://f.convertkit.com/ckjs/ck.5.js"><\/script>
<form action="https://app.kit.com/forms/9219257/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9219257" data-uid="ec1775c127" data-format="inline" data-version="5" min-width="400 500 600 700 800">
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
      <div class="formkit-field">
        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="your@email.com" required type="email" style="color:#fff;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.25);border-radius:8px;font-size:16px;padding:14px 18px;"/>
      </div>
      <button data-element="submit" class="formkit-submit" style="color:#0a0f1e;background:#f5a623;border-radius:8px;font-weight:700;font-size:16px;padding:14px 24px;border:none;cursor:pointer;">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Keep Me Posted</span>
      </button>
    </div>
  </div>
</form>`;

// Floating pixel/star particle
function Particle({ style }) {
  return <div className="particle" style={style} />;
}

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function KitForm() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    // Remove old scripts
    const old = document.querySelector('script[src*="convertkit"]');
    if (old) old.remove();
    ref.current.innerHTML = KIT_FORM_HTML;
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return <div ref={ref} className="kit-form-wrapper" />;
}

function AppleGlyph({ size = 16, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0, ...style }}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// QR code pointing at the App Store listing (inline SVG so it ships with the source tree).
function AppStoreQR({ size = 132 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 37 37" shapeRendering="crispEdges" role="img" aria-label="QR code linking to Bitty City on the App Store">
      <path stroke="#0a0f1e" strokeWidth="1" d={APP_STORE_QR_PATH} />
    </svg>
  );
}

function PhoneFrame({ src, alt, rotate = 0, scale = 1, zIndex = 1 }) {
  return (
    <div style={{
      transform: `rotate(${rotate}deg) scale(${scale})`,
      zIndex,
      filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.6))",
      transition: "transform 0.4s ease",
      flexShrink: 0,
    }}>
      <div style={{
        width: 286,
        height: 572,
        background: "#0d0d1a",
        borderRadius: 36,
        border: "3px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        position: "relative",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
      }}>
        {/* Notch */}
        <div style={{
          position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
          width: 91, height: 23, background: "#0d0d1a",
          borderRadius: 10, zIndex: 2, border: "2px solid rgba(255,255,255,0.08)"
        }} />
        <img src={src} alt={alt} width={572} height={1243} decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>
    </div>
  );
}

export default function BittyCity() {
  const [particles] = useState(() =>
    Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 3,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  );

  const [activeScreen, setActiveScreen] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const screens = [
    { src: "/screens/city.webp", label: "Your City" },
    { src: "/screens/build.webp", label: "Build Together" },
    { src: "/screens/home.webp", label: "Your Cities" },
    { src: "/screens/asteroid.webp", label: "Miss a Week?" },
  ];

  const startAutoAdvance = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setActiveScreen(s => (s + 1) % screens.length),
      3200
    );
  };

  useEffect(() => {
    startAutoAdvance();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Nunito', 'DM Sans', sans-serif", background: "#080c1a", minHeight: "100vh", color: "#fff", overflowX: "hidden", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080c1a; }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: #f5a623;
          animation: twinkle var(--dur, 4s) var(--delay, 0s) infinite ease-in-out alternate;
          pointer-events: none;
        }
        @keyframes twinkle {
          0% { opacity: var(--min-op, 0.05); transform: scale(0.8); }
          100% { opacity: var(--max-op, 0.5); transform: scale(1.4); }
        }
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes city-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes asteroid-drift {
          0% { transform: translate(0,0) rotate(0deg); }
          100% { transform: translate(-6px, 6px) rotate(8deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes slide-phones {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .hero-logo {
          animation: city-bob 4s ease-in-out infinite;
        }
        .asteroid-icon {
          animation: asteroid-drift 2.5s ease-in-out infinite alternate;
        }
        .hero-title {
          animation: float-up 0.9s ease 0.1s both;
        }
        .hero-sub {
          animation: float-up 0.9s ease 0.3s both;
        }
        .hero-cta {
          animation: float-up 0.9s ease 0.5s both;
        }
        .phone-showcase {
          animation: slide-phones 1s ease 0.4s both;
        }
        .feature-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px 28px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
        }
        .feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(245,166,35,0.35);
          background: rgba(245,166,35,0.06);
        }
        .screen-tab {
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Nunito', sans-serif;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.45);
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }
        .screen-tab.active {
          background: #f5a623;
          color: #0a0f1e;
          border-color: #f5a623;
        }
        .kit-form-wrapper form {
          max-width: 100% !important;
        }
        .kit-form-wrapper .formkit-fields {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
        }
        .kit-form-wrapper .formkit-field { flex: 1 1 auto !important; margin: 0 !important; width: 100% !important; }
        .kit-form-wrapper .formkit-field input { width: 100% !important; box-sizing: border-box !important; }
        .kit-form-wrapper .formkit-submit { width: 100% !important; margin: 0 !important; }
        .kit-form-wrapper .formkit-powered-by-convertkit-container { display: none !important; }
        .kit-form-wrapper .formkit-alert { margin: 10px 0 0 !important; }
        .cta-btn {
          display: inline-block;
          background: #f5a623;
          color: #0a0f1e;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 17px;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 32px rgba(245,166,35,0.35);
          letter-spacing: 0.01em;
        }
        .cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 40px rgba(245,166,35,0.5);
        }
        .store-badge {
          display: block;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .store-badge:hover { transform: translateY(-2px) scale(1.04); filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5)); }
        .qr-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fff;
          color: #0a0f1e;
          border-radius: 20px;
          padding: 18px 24px 18px 18px;
          text-align: left;
          text-decoration: none;
          box-shadow: 0 16px 48px rgba(0,0,0,0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .qr-card:hover { transform: translateY(-2px); box-shadow: 0 20px 56px rgba(245,166,35,0.25); }
        .download-cta-row { display: flex; align-items: center; justify-content: center; gap: 28px; flex-wrap: wrap; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,166,35,0.12);
          border: 1px solid rgba(245,166,35,0.3);
          border-radius: 20px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 700;
          color: #f5a623;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          pointer-events: none;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-section { height: 100vh; }
        .phones-mobile { display: none; }
        .features-grid { align-items: stretch; }
        .features-grid > * { height: 100%; display: flex; flex-direction: column; }
        @media (max-width: 768px) {
          .hero-section { height: auto !important; min-height: 100vh; }
          .hero-flex { flex: none !important; flex-direction: column !important; text-align: center; align-items: center !important; padding: 80px 20px 16px !important; }
          .hero-title { font-size: 52px !important; }
          .phone-showcase { justify-content: center !important; }
          .hero-cta { justify-content: center !important; align-items: center !important; }
          .streak-cards { justify-content: center !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .kit-form-wrapper .formkit-field { margin-bottom: 0 !important; }
          .phones-side { display: none !important; }
          .phones-mobile { display: block !important; }
          .codetv-row { align-items: center !important; padding: 60px 24px !important; }
          .codetv-bg { object-position: calc(50% - 50px) 20% !important; }
          .accountability-card { flex-direction: column !important; align-items: center !important; gap: 16px !important; text-align: center !important; }
          .accountability-card-text { text-align: center !important; }
          .accountability-icon { flex-shrink: 0; }
          #download { padding: 60px 20px 80px !important; text-align: center !important; }
          #download h2, #download p { text-align: center !important; }
          .qr-card { display: none !important; }
        }
      `}</style>

      {/* === NAVBAR === */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 40px",
        background: "rgba(8,12,26,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO_SRC} alt="Bitty City" style={{ width: 38, height: 38, borderRadius: 10 }} />
          <span style={{ fontFamily: "'Nunito'", fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em" }}>
            Bitty City
          </span>
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ padding: "10px 22px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 7 }}>
          <AppleGlyph size={15} style={{ marginTop: -2 }} /> Download
        </a>
      </nav>

      {/* === HERO === */}
      <section className="hero-section" style={{
        position: "relative",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Background effects */}
        <div className="grid-bg" />
        <div className="glow-orb" style={{ width: 600, height: 600, top: "10%", left: "-15%", background: "rgba(94,120,220,0.18)" }} />
        <div className="glow-orb" style={{ width: 400, height: 400, bottom: "0%", right: "5%", background: "rgba(245,166,35,0.12)" }} />

        {/* Particles */}
        {particles.map(p => (
          <Particle key={p.id} style={{
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            "--dur": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            "--min-op": p.opacity * 0.3,
            "--max-op": p.opacity,
          }} />
        ))}

        <div className="hero-flex" style={{
          flex: 1, position: "relative", zIndex: 1,
          display: "flex", alignItems: "center",
          gap: 64, maxWidth: 1200, margin: "0 auto", width: "100%",
          padding: "120px 40px 0",
        }}>
          {/* Left: Text */}
          <div style={{ flex: "1 1 480px", minWidth: 0 }}>
            <div className="hero-title" style={{ marginBottom: 16 }}>
              <div className="badge" style={{ marginBottom: 20 }}>
                <span>🏙️</span> Now on the App Store
              </div>
            </div>

            <h1 className="hero-title" style={{
              fontFamily: "'Nunito'", fontWeight: 900,
              fontSize: "clamp(48px, 6vw, 82px)",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              marginBottom: 8,
            }}>
              Build cities &amp;<br />
              <span style={{
                background: "linear-gradient(135deg, #f5a623 0%, #f76b1c 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>consistent habits</span><br />
              with friends.
            </h1>

            <p className="hero-sub" style={{
              fontSize: 18, color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7, marginBottom: 36, maxWidth: 460,
              fontFamily: "'DM Sans'", fontWeight: 400,
            }}>
              Complete daily goals with your crew.<br />
              Check in every day and watch it grow.<br />
              Miss a week, hello asteroid.
            </p>

            <div className="hero-cta" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <AppleGlyph size={18} style={{ marginTop: -2 }} /> Download on the App Store
              </a>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans'", margin: 0, display: "flex", alignItems: "center", gap: 6 }}>
                Free on iPhone &nbsp;·&nbsp; Android coming soon
              </p>
            </div>

            <div className="streak-cards" style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { icon: "🏠", label: "House", sub: "1-day streak" },
                { icon: "🏢", label: "Apartment", sub: "3-day streak" },
                { icon: "🏙️", label: "Skyscraper", sub: "7-day streak" },
              ].map(b => (
                <div key={b.label} style={{
                  display: "flex", flexDirection: "column", gap: 6,
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  minWidth: 110,
                }}>
                  <span style={{ fontSize: 36 }}>{b.icon}</span>
                  <span style={{ fontWeight: 800, fontSize: 15, fontFamily: "'Nunito'" }}>{b.label}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans'" }}>{b.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phones */}
          <div className="phones-side" style={{ flex: "0 0 420px", position: "relative", height: 520 }}>
            <div className="phone-showcase" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {screens.map((s, i) => (
                <div key={i} style={{
                  position: "absolute",
                  transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                  opacity: i === activeScreen ? 1 : i === (activeScreen + 1) % screens.length ? 0.35 : 0,
                  transform: i === activeScreen
                    ? "scale(1) translateX(0) rotate(-3deg)"
                    : i === (activeScreen + 1) % screens.length
                      ? "scale(0.82) translateX(120px) rotate(6deg)"
                      : "scale(0.7) translateX(-80px) rotate(-8deg)",
                  zIndex: i === activeScreen ? 3 : i === (activeScreen + 1) % screens.length ? 2 : 1,
                }}>
                  <PhoneFrame src={s.src} alt={s.label} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs — desktop: bottom of hero viewport; mobile: above phone animation */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 8,
          padding: "20px 20px 24px", flexWrap: "wrap",
          position: "relative", zIndex: 1, flexShrink: 0,
        }}>
          {screens.map((s, i) => (
            <button key={i} className={`screen-tab${i === activeScreen ? " active" : ""}`} onClick={() => {
              setActiveScreen(i);
              clearInterval(intervalRef.current);
              clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(startAutoAdvance, 6400);
            }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile phone animation — same stacking effect as desktop, hidden on desktop */}
        <div className="phones-mobile" style={{ position: "relative", height: 440, flexShrink: 0, zIndex: 1, marginBottom: 40 }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {screens.map((s, i) => (
              <div key={i} style={{
                position: "absolute",
                transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                opacity: i === activeScreen ? 1 : i === (activeScreen + 1) % screens.length ? 0.35 : 0,
                transform: i === activeScreen
                  ? "scale(0.75) translateX(0) rotate(-3deg)"
                  : i === (activeScreen + 1) % screens.length
                    ? "scale(0.62) translateX(90px) rotate(6deg)"
                    : "scale(0.55) translateX(-60px) rotate(-8deg)",
                zIndex: i === activeScreen ? 3 : i === (activeScreen + 1) % screens.length ? 2 : 1,
              }}>
                <PhoneFrame src={s.src} alt={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === AS SEEN ON CODETV === */}
      <section style={{ position: "relative", width: "100%", minHeight: 480, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* Background photo */}
        <img
          src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,c_lfill/ar_2.1735849056603773,c_fill/web-dev-challenge-s3.e2-render-banner"
          alt="Web Dev Challenge set"
          className="codetv-bg"
          loading="lazy"
          decoding="async"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
        />
        {/* Gradient overlay — dark on left for readability, open on right to show image */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,12,26,0.92) 0%, rgba(8,12,26,0.7) 35%, rgba(8,12,26,0.15) 70%, rgba(8,12,26,0.1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,12,26,0.5) 0%, rgba(8,12,26,0.05) 30%, rgba(8,12,26,0.05) 70%, rgba(8,12,26,0.6) 100%)" }} />
        {/* Outer row: full-width hero-aligned container, children left on desktop */}
        <div className="codetv-row" style={{
          position: "relative", zIndex: 1,
          width: "100%", maxWidth: 1200,
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
          {/* Inner block: all elements centered to each other */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontFamily: "'Nunito'", margin: 0 }}>As seen on</p>
              <a href="https://codetv.dev/series/web-dev-challenge/s3" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/jlengstorf/image/upload/w_600,q_auto,f_auto/web-dev-challenge-word-mark"
                  alt="Web Dev Challenge — A CodeTV Production"
                  style={{ width: "min(280px, 40vw)", height: "auto", display: "block" }}
                />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <a
                href="https://www.youtube.com/watch?v=Qt3sbBbVnbs"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                ▶ Watch on YouTube
              </a>
              <a
                href="https://codetv.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans'", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Check out CodeTV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.12em", color: "#f5a623", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Nunito'" }}>How It Works</p>
            <h2 style={{ fontFamily: "'Nunito'", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Consistency keeps<br />cities thriving.
            </h2>
          </div>
        </RevealSection>

        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            {
              icon: "🏗️",
              title: "Set your goal",
              desc: "Create a city, invite your friends, and commit to a shared daily goal like running a mile, reading for 15 minutes, or hitting the gym.",
              accent: "#5e78dc",
            },
            {
              icon: "⚡",
              title: "Complete & build",
              desc: "Every check-in fills your city's construction site, and when it's full a new building goes up. Keep your streak going and earn charms along the way.",
              accent: "#f5a623",
            },
            {
              icon: "☄️",
              title: "The asteroid rule",
              desc: "Ghost your city for 7+ days and an asteroid strikes, causing random destruction. Your friends will NOT be happy.",
              accent: "#e05252",
              iconClass: "asteroid-icon",
            },
          ].map((f, i) => (
            <RevealSection key={i} delay={i * 0.12}>
              <div className="feature-card">
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${f.accent}22`, border: `1px solid ${f.accent}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, marginBottom: 20,
                }}>
                  <span className={f.iconClass || ""}>{f.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Nunito'", fontWeight: 800, fontSize: 20, marginBottom: 10, letterSpacing: "-0.01em" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "'DM Sans'", fontSize: 15 }}>{f.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* === SOCIAL PRESSURE SECTION === */}
      <section style={{ padding: "80px 40px", position: "relative", overflow: "hidden" }}>
        <div className="glow-orb" style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(94,120,220,0.1)" }} />
        <RevealSection>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 56, marginBottom: 24 }}>🤝</div>
            <h2 style={{ fontFamily: "'Nunito'", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.15 }}>
              Accountability through<br />shared responsibility.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "'DM Sans'", maxWidth: 460, margin: "0 auto 40px" }}>
              Friendly peer pressure works, but building something with friends adds responsibility.
            </p>
          </div>
        </RevealSection>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16, position: "relative", zIndex: 1 }}>
          {[
            {
              icon: "🔥",
              title: "Streaks that build cities",
              desc: "Your streak is yours, across every city you're in. Hit 7, 30, 100 and 365 days for milestone chests, and a streak freeze covers the odd missed day.",
              accent: "#f5a623",
            },
            {
              icon: "👥",
              title: "Your squad is on the line",
              desc: "Your crew sees every check-in, and the city only grows when people show up. Slip up and a crewmate can gift you a streak freeze, but they'll know.",
              accent: "#5e78dc",
            },
            {
              icon: "🏛️",
              title: "Make the city yours",
              desc: "Spend the charms you earn on parks, landmarks, seasons and neon nights, plus a walker, pet and car that are you in every city. Mayor Bitty cheers the whole crew on.",
              accent: "#3cb878",
            },
            {
              icon: "☄️",
              title: "Real consequences",
              desc: "Ghost your city for 7+ days and an asteroid strikes, causing random destruction. The social pressure is designed into the game so there's always something to lose.",
              accent: "#e05252",
            },
          ].map((card, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="accountability-card" style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${card.accent}44`,
                borderRadius: 20, padding: "28px 32px",
                display: "flex", gap: 24, alignItems: "flex-start",
              }}>
                <div className="accountability-icon" style={{
                  fontSize: 36, flexShrink: 0,
                  width: 76, height: 76, borderRadius: 16,
                  background: `${card.accent}18`,
                  border: `1px solid ${card.accent}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  whiteSpace: "nowrap",
                }}>
                  {card.icon}
                </div>
                <div className="accountability-card-text">
                  <h3 style={{ fontFamily: "'Nunito'", fontWeight: 800, fontSize: 20, marginBottom: 8, letterSpacing: "-0.01em" }}>{card.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "'DM Sans'", fontSize: 15, margin: 0 }}>{card.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* === DOWNLOAD SECTION === */}
      <section id="download" style={{ padding: "80px 40px 120px", position: "relative", overflow: "hidden" }}>
        <div className="glow-orb" style={{ width: 700, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(245,166,35,0.08)" }} />
        <RevealSection>
          <div style={{
            maxWidth: 640, margin: "0 auto", textAlign: "center",
            position: "relative", zIndex: 1,
          }}>
            <img src={LOGO_SRC} alt="Bitty City" className="hero-logo" style={{ width: 80, height: 80, borderRadius: 20, marginBottom: 24, boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }} />
            <h2 style={{ fontFamily: "'Nunito'", fontWeight: 900, fontSize: "clamp(30px, 4vw, 50px)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.1 }}>
              Start building<br />
              <span style={{ background: "linear-gradient(135deg, #f5a623, #f76b1c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                your city.
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 36, fontFamily: "'DM Sans'", lineHeight: 1.7 }}>
              Bitty City is live on the App Store. Pick a goal, invite up to 7 friends, and start your first building today.
            </p>

            {/* Store badges + QR */}
            <div className="download-cta-row" style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Download Bitty City on the App Store">
                  <img src="/badge-app-store.svg" alt="Download on the App Store" style={{ height: 52, display: "block" }} />
                </a>
                <div title="Android coming soon" style={{ cursor: "not-allowed", opacity: 0.4, filter: "grayscale(0.3)" }}>
                  <img src="/badge-google-play.png" alt="Get it on Google Play (coming soon)" style={{ height: 52, display: "block" }} />
                </div>
              </div>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="qr-card">
                <AppStoreQR size={112} />
                <div style={{ fontFamily: "'DM Sans'" }}>
                  <div style={{ fontFamily: "'Nunito'", fontWeight: 800, fontSize: 15, marginBottom: 4, letterSpacing: "-0.01em" }}>On your laptop?</div>
                  <div style={{ fontSize: 13, color: "rgba(10,15,30,0.6)", lineHeight: 1.5, maxWidth: 170 }}>Scan with your iPhone camera to open the App Store.</div>
                </div>
              </a>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans'", marginBottom: 40 }}>
              Free on iPhone &nbsp;·&nbsp; Android coming soon
            </p>

            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, padding: "28px 32px",
            }}>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 16, fontFamily: "'DM Sans'", lineHeight: 1.6 }}>
                Not on iPhone yet? Leave your email and we'll tell you the moment Android lands, plus new-feature drops.
              </p>
              <KitForm />
              <p style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans'" }}>
                No spam. Just release news. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* === ABOUT US === */}
      <section style={{ padding: "80px 40px", position: "relative", overflow: "hidden" }}>
        <div className="glow-orb" style={{ width: 600, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(94,120,220,0.08)" }} />
        <RevealSection>
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Nunito'", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.15, textAlign: "center" }}>
              Meet the team
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontFamily: "'DM Sans'", textAlign: "center", maxWidth: 460, margin: "0 auto 48px" }}>
              Two friends making consistency more fun
            </p>
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Christian Iosif */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24, padding: "36px 32px",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              }}>
                <img
                  src="/christian-profile.jpg" loading="lazy" decoding="async"
                  alt="Christian Iosif"
                  style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", marginBottom: 20, border: "2px solid rgba(255,255,255,0.1)" }}
                />
                <h3 style={{ fontFamily: "'Nunito'", fontWeight: 800, fontSize: 20, marginBottom: 4, letterSpacing: "-0.01em" }}>Christian Iosif</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans'", marginBottom: 16 }}>Product Engineer</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "'DM Sans'", marginBottom: 0, flexGrow: 1 }}>
                  Christian's passion is to help others reach their goals, and his latest startup <a href="https://pokito.shop" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "underline" }}>Pokito</a> uses physical checkpoints to enforce routines that are hard to stick with. With Bitty City, he hopes to continue building systems that make it fun for others to work towards their own goals.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/christian-iosif-217015152/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#0A66C2",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/chris.pokito/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@chris.pokito?_r=1&_t=ZP-94xhaf641lP" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#010101",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </a>
                </div>
              </div>

              {/* Chris Crimi */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24, padding: "36px 32px",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              }}>
                <img
                  src="/chris-profile.jpg" loading="lazy" decoding="async"
                  alt="Chris Crimi"
                  style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", marginBottom: 20, border: "2px solid rgba(255,255,255,0.1)" }}
                />
                <h3 style={{ fontFamily: "'Nunito'", fontWeight: 800, fontSize: 20, marginBottom: 4, letterSpacing: "-0.01em" }}>Chris Crimi</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans'", marginBottom: 16 }}>Full-stack Engineer</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontFamily: "'DM Sans'", marginBottom: 0, flexGrow: 1 }}>
                  Chris works in Private Credit by day, and builds startups at night. He combines his knowledge in finance with his technical capabilities to help solve problems that are important to others.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/christopher-crimi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#0A66C2",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  {/* X / Twitter */}
                  <a href="https://x.com/chrislikewater?s=21" target="_blank" rel="noopener noreferrer" aria-label="X" style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#000000",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
        <style>{`
          @media (max-width: 600px) {
            .about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* === FOOTER === */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "32px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
        color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: "'DM Sans'",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={LOGO_SRC} alt="" style={{ width: 24, height: 24, borderRadius: 6 }} />
          <span>© 2026 SideJawn Inc. All rights reserved.</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="/privacy.html" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/support.html" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Support</a>
        </div>
      </footer>
    </div>
  );
}