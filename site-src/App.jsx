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
        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="your@email.com" required type="email" style="color:#1d2433;background:#fff;border:2px solid #eadfcd;border-radius:14px;font-size:16px;padding:14px 18px;"/>
      </div>
      <button data-element="submit" class="formkit-submit" style="color:#fff;background:#1d2433;border-radius:14px;font-weight:800;font-size:16px;padding:14px 24px;border:none;cursor:pointer;">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Keep me posted</span>
      </button>
    </div>
  </div>
</form>`;

// Social icon paths (24×24).
const ICONS = {
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
};

const TEAM = [
  {
    name: "Christian Iosif",
    role: "Product Engineer",
    photo: "/christian-profile.jpg",
    bio: (
      <>
        Christian's passion is helping others reach their goals. His other startup,{" "}
        <a href="https://pokito.shop" target="_blank" rel="noopener noreferrer">Pokito</a>, uses physical
        checkpoints to enforce routines that are hard to stick with. With Bitty City he's building more systems
        that make working towards your goals fun.
      </>
    ),
    links: [
      { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/christian-iosif-217015152/" },
      { kind: "instagram", label: "Instagram", href: "https://www.instagram.com/chris.pokito/" },
      { kind: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@chris.pokito?_r=1&_t=ZP-94xhaf641lP" },
    ],
  },
  {
    name: "Chris Crimi",
    role: "Full-stack Engineer",
    photo: "/chris-profile.jpg",
    bio: "Chris works in private credit by day and builds startups at night, combining finance with engineering to solve problems that matter to people.",
    links: [
      { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/christopher-crimi/" },
      { kind: "x", label: "X", href: "https://x.com/chrislikewater?s=21" },
    ],
  },
];

const STEPS = [
  {
    n: 1,
    img: "/art/goals.webp",
    alt: "Picking a daily goal: Body, Mind, Focus or Life",
    title: "Pick one goal together",
    body: "Start a city and choose the daily goal your crew commits to: a workout, 15 minutes of reading, a walk, anything. Then send your friends the invite link.",
    tint: "var(--violet)",
  },
  {
    n: 2,
    img: "/art/checkin.webp",
    alt: "A city screen with the crew's check-ins and the construction site",
    title: "Check in, and the city grows",
    body: "Every check-in lays a block on your city's construction site. Add a photo if you like, or let Apple Health check you in. When the site fills, a new building goes up.",
    tint: "var(--sky)",
  },
  {
    n: 3,
    img: "/art/streak.webp",
    alt: "A 24-day streak with the week's check-ins",
    title: "Keep your streak alive",
    body: "Your streak follows you across every city. Hit 7, 30, 100 and 365 days for milestone chests, and a streak freeze covers the odd day off.",
    tint: "var(--sun)",
  },
];

const FEATURES = [
  { icon: "💎", title: "Earn charms, decorate your city", body: "Every check-in earns charms. Spend them on parks, landmarks, seasons, and a walker, pet and car that are you." },
  { icon: "🔥", title: "A streak that's yours", body: "Chests at 7, 30, 100 and 365 days. Missed a day? A streak freeze, or a crewmate's gift, keeps it alive." },
  { icon: "❤️", title: "Apple Health checks you in", body: "Hit your steps, workout, sleep or water goal and Bitty City checks you in by itself. Or snap a photo." },
];

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, shown] = useReveal();
  return (
    <Tag ref={ref} className={`reveal${shown ? " in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </Tag>
  );
}

function KitForm() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
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

function AppleGlyph({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0, marginTop: -2 }}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// QR code pointing at the App Store listing (inline SVG so it ships with the source tree).
function AppStoreQR({ size = 112 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 37 37" shapeRendering="crispEdges" role="img" aria-label="QR code linking to Bitty City on the App Store">
      <path stroke="#1d2433" strokeWidth="1" d={APP_STORE_QR_PATH} />
    </svg>
  );
}

function StoreButton({ large = false }) {
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={`store-btn${large ? " large" : ""}`}>
      <AppleGlyph size={large ? 22 : 16} />
      <span>
        {large && <small>Download free on the</small>}
        App Store
      </span>
    </a>
  );
}

function QrCard() {
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="qr-card">
      <AppStoreQR size={92} />
      <span>
        <strong>On your laptop?</strong>
        Scan with your iPhone camera to open the App Store.
      </span>
    </a>
  );
}

export default function BittyCity() {
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const end = document.getElementById("download");
      const nearEnd = end ? end.getBoundingClientRect().top < window.innerHeight : false;
      setShowSticky(window.scrollY > 640 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      <style>{CSS}</style>

      {/* === NAVBAR === */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="brand">
          <img src={LOGO_SRC} alt="" width={36} height={36} />
          <span>Bitty City</span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
          <AppleGlyph size={14} /> Download
        </a>
      </nav>

      {/* === HERO === */}
      <header id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="pill">Free habit game for iPhone</p>
            <h1>
              Complete your goal every day. <span className="accent">Build a city with friends.</span>
            </h1>
            <p className="lede">
              Pick one daily goal with up to 7 friends. Every check-in grows your shared city. Skip a whole week and an
              asteroid hits it.
            </p>
            <div className="hero-ctas">
              <StoreButton large />
              <QrCard />
            </div>
            <p className="fine">iPhone only for now · Android coming soon</p>
          </div>
          <div className="hero-visual">
            <div className="phone-clip">
            <img
              className="hero-phone"
              src="/art/hero-phone.webp"
              alt="A city in Bitty City: the crew's check-ins today and the next building going up"
              width={555}
              height={1178}
              fetchpriority="high"
            />
            </div>
            <div className="hero-mayor" aria-hidden="true">
              <div className="bubble">2 of 4 in. Your turn!</div>
              <img src="/art/mayor.webp" alt="" width={160} height={160} />
            </div>
          </div>
        </div>
        <div className="hero-city">
          <img src="/art/city.webp" alt="" width={1800} height={1200} decoding="async" />
        </div>
      </header>

      {/* === AS SEEN ON CODETV === */}
      <section className="codetv">
        <img
          src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,c_lfill/ar_2.1735849056603773,c_fill/web-dev-challenge-s3.e2-render-banner"
          alt="Web Dev Challenge set"
          className="codetv-bg"
          loading="lazy"
          decoding="async"
        />
        <div className="codetv-shade" />
        <div className="codetv-row">
          <div className="codetv-block">
            <p className="eyebrow light">As seen on</p>
            <a href="https://codetv.dev/series/web-dev-challenge/s3" target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/jlengstorf/image/upload/w_600,q_auto,f_auto/web-dev-challenge-word-mark"
                alt="Web Dev Challenge — A CodeTV Production"
                className="codetv-mark"
              />
            </a>
            <a href="https://www.youtube.com/watch?v=Qt3sbBbVnbs" target="_blank" rel="noopener noreferrer" className="btn btn-sun">
              ▶ Watch on YouTube
            </a>
            <a href="https://codetv.dev" target="_blank" rel="noopener noreferrer" className="codetv-link">
              Check out CodeTV
            </a>
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section id="how" className="section">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>How a city grows.</h2>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="step">
              <div className="step-art" style={{ "--tint": s.tint }}>
                <img src={s.img} alt={s.alt} width={645} height={1398} loading="lazy" decoding="async" />
              </div>
              <div className="step-copy">
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === THE ASTEROID RULE === */}
      <section className="asteroid">
        <Reveal className="asteroid-inner">
          <div className="asteroid-copy">
            <p className="eyebrow light">The asteroid rule</p>
            <h2>Ghost your city for a week and it gets hit.</h2>
            <p>
              Seven days with no check-ins from anyone and an asteroid levels part of your city. Your friends will
              notice. That little bit of pressure is the point: it's easier to show up when the whole crew has
              something to lose.
            </p>
          </div>
          <div className="asteroid-art">
            <img src="/art/asteroid.webp" alt="An asteroid strike destroying 10 buildings" width={645} height={1398} loading="lazy" decoding="async" />
          </div>
        </Reveal>
      </section>

      {/* === FEATURES === */}
      <section id="features" className="section">
        <Reveal className="section-head">
          <p className="eyebrow">Inside the app</p>
          <h2>More reasons to show up.</h2>
        </Reveal>
        <div className="features">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06} className="feature">
              <span className="feature-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === TEAM === */}
      <section id="team" className="section team-section">
        <Reveal className="section-head">
          <p className="eyebrow">Meet the team</p>
          <h2>Two friends making consistency more fun.</h2>
        </Reveal>
        <div className="team">
          {TEAM.map((p) => (
            <Reveal key={p.name} className="person">
              <img src={p.photo} alt={p.name} width={88} height={88} loading="lazy" decoding="async" />
              <div>
                <h3>{p.name}</h3>
                <p className="role">{p.role}</p>
                <p className="bio">{p.bio}</p>
                <div className="socials">
                  {p.links.map((l) => (
                    <a key={l.kind} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on ${l.label}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d={ICONS[l.kind]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === DOWNLOAD === */}
      <section id="download" className="download">
        <Reveal className="download-inner">
          <img src={LOGO_SRC} alt="" width={84} height={84} className="download-icon" />
          <h2>Start building your city.</h2>
          <p>Pick a goal, invite up to 7 friends, and lay your first block today.</p>
          <div className="hero-ctas center">
            <StoreButton large />
            <QrCard />
          </div>
          <div className="android">
            <p>
              <strong>On Android?</strong> Leave your email and we'll tell you when Bitty City lands there, plus
              the occasional new-feature drop. No spam.
            </p>
            <KitForm />
          </div>
        </Reveal>
      </section>

      {/* Phones: one download button that stays in reach after the hero */}
      <div className={`sticky-cta${showSticky ? " on" : ""}`} aria-hidden={!showSticky}>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" tabIndex={showSticky ? 0 : -1}>
          <AppleGlyph size={18} /> Download free on the App Store
        </a>
      </div>

      {/* === FOOTER === */}
      <footer className="footer">
        <div className="brand small">
          <img src={LOGO_SRC} alt="" width={24} height={24} />
          <span>© 2026 SideJawn Inc.</span>
        </div>
        <div className="footer-links">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/support.html">Support</a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">App Store</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
  :root {
    --ink: #1d2433;
    --ink-2: #4a5468;
    --ink-3: #7b8496;
    --cream: #fff8ee;
    --paper: #ffffff;
    --line: #efe4d2;
    --sun: #f5a623;
    --sun-deep: #e8860c;
    --sky: #2bb8e0;
    --violet: #6d6af0;
    --grass: #34a265;
    --night: #12172b;
    --radius: 24px;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: var(--cream); }
  .site { font-family: 'DM Sans', system-ui, sans-serif; color: var(--ink); background: var(--cream); overflow-x: hidden; }
  h1, h2, h3, .brand, .btn, .store-btn, .nav-cta, .eyebrow, .pill, .step-n { font-family: 'Nunito', system-ui, sans-serif; }
  a { color: inherit; }
  img { display: block; max-width: 100%; height: auto; }

  /* Reveal on scroll */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.in { opacity: 1; transform: none; }
  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; transition: none; }
    html { scroll-behavior: auto; }
  }

  /* Nav */
  .nav { position: fixed; inset: 0 0 auto 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px clamp(16px, 4vw, 40px); transition: background .25s ease, box-shadow .25s ease; }
  .nav.scrolled { background: rgba(255,248,238,.88); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); box-shadow: 0 1px 0 var(--line); }
  .brand { display: flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 900; font-size: 20px; letter-spacing: -.02em; }
  .brand img { border-radius: 10px; }
  .brand.small { font-family: 'DM Sans'; font-weight: 500; font-size: 13px; letter-spacing: 0; color: var(--ink-3); }
  .brand.small img { border-radius: 6px; }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a { text-decoration: none; font-weight: 600; font-size: 15px; color: var(--ink-2); }
  .nav-links a:hover { color: var(--ink); }
  .nav-cta { display: inline-flex; align-items: center; gap: 7px; background: var(--ink); color: #fff; text-decoration: none; font-weight: 800; font-size: 14px; padding: 10px 18px; border-radius: 999px; transition: transform .2s ease; }
  .nav-cta:hover { transform: translateY(-1px); }

  /* Buttons */
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-weight: 800; font-size: 16px; padding: 14px 26px; border-radius: 999px; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }
  .btn-sun { background: var(--sun); color: var(--ink); box-shadow: 0 8px 24px rgba(245,166,35,.35); }
  .btn:hover { transform: translateY(-2px); }
  .store-btn { display: inline-flex; align-items: center; gap: 12px; background: var(--ink); color: #fff; text-decoration: none; font-weight: 800; font-size: 17px; padding: 12px 22px; border-radius: 16px; min-height: 52px; transition: transform .2s ease, box-shadow .2s ease; box-shadow: 0 10px 28px rgba(29,36,51,.22); }
  .store-btn.large { font-size: 21px; padding: 12px 26px 12px 22px; min-height: 64px; }
  .store-btn span { display: flex; flex-direction: column; line-height: 1.05; }
  .store-btn small { font-family: 'DM Sans'; font-weight: 500; font-size: 12px; opacity: .8; margin-bottom: 2px; }
  .store-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(29,36,51,.28); }
  .qr-card { display: flex; align-items: center; gap: 14px; background: var(--paper); border: 2px solid var(--line); border-radius: 18px; padding: 10px 16px 10px 10px; text-decoration: none; max-width: 300px; }
  .qr-card span { font-size: 13px; line-height: 1.45; color: var(--ink-2); }
  .qr-card strong { display: block; font-family: 'Nunito'; font-size: 15px; color: var(--ink); margin-bottom: 2px; }

  /* Type */
  .eyebrow { font-size: 13px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; color: var(--sun-deep); margin-bottom: 12px; }
  .eyebrow.light { color: rgba(255,255,255,.7); }
  h2 { font-weight: 900; font-size: clamp(32px, 4.4vw, 52px); line-height: 1.08; letter-spacing: -.025em; }
  h3 { font-weight: 800; font-size: 21px; letter-spacing: -.01em; }

  /* Hero */
  .hero { position: relative; padding-top: 96px; background: linear-gradient(180deg, #dff2ff 0%, #eef8f1 60%, var(--cream) 100%); overflow: hidden; }
  .hero-inner { position: relative; z-index: 2; max-width: 1160px; margin: 0 auto; padding: 32px clamp(16px, 4vw, 40px) 0; display: grid; grid-template-columns: 1.2fr .8fr; gap: 40px; align-items: center; }
  .pill { display: inline-block; font-weight: 800; font-size: 13px; letter-spacing: .04em; color: var(--grass); background: #fff; border: 2px solid #cdeedb; padding: 6px 14px; border-radius: 999px; margin-bottom: 18px; }
  .hero h1 { font-weight: 900; font-size: clamp(36px, 5vw, 64px); line-height: 1.05; letter-spacing: -.03em; max-width: 16ch; }
  .accent { color: var(--sun-deep); }
  .lede { font-size: clamp(17px, 1.6vw, 20px); line-height: 1.6; color: var(--ink-2); max-width: 32em; margin: 20px 0 28px; }
  .hero-ctas { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; }
  .hero-ctas.center { justify-content: center; }
  .fine { margin-top: 14px; font-size: 13px; color: var(--ink-3); }
  .hero-visual { position: relative; justify-self: center; width: min(320px, 70vw); align-self: end; }
  .phone-clip { height: clamp(460px, 44vw, 560px); overflow: hidden; border-radius: 40px 40px 0 0; }
  .hero-phone { width: 100%; filter: drop-shadow(0 24px 40px rgba(29,36,51,.25)); }
  .hero-mayor { position: absolute; left: -104px; bottom: -6px; width: 130px; z-index: 3; }
  .hero-mayor img { width: 130px; filter: drop-shadow(0 12px 18px rgba(29,36,51,.25)); animation: bob 4.5s ease-in-out infinite; }
  .bubble { position: absolute; bottom: 100%; left: -20px; white-space: nowrap; background: #fff; border: 2px solid var(--line); border-radius: 16px 16px 16px 4px; padding: 8px 12px; font-family: 'Nunito'; font-weight: 800; font-size: 14px; box-shadow: 0 10px 24px rgba(29,36,51,.12); }
  @keyframes bob { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
  @media (prefers-reduced-motion: reduce) { .hero-mayor img { animation: none; } }
  .hero-city { position: relative; z-index: 1; margin-top: -60px; height: clamp(200px, 26vw, 360px); overflow: hidden; -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 30%, #000 75%, transparent 100%); mask-image: linear-gradient(180deg, transparent 0%, #000 30%, #000 75%, transparent 100%); }
  .hero-city img { width: 100%; height: 100%; object-fit: cover; object-position: center 45%; }

  /* Sticky download (phones) */
  .sticky-cta { display: none; }
  @media (max-width: 760px) {
    .sticky-cta { display: block; position: fixed; left: 12px; right: 12px; bottom: calc(12px + env(safe-area-inset-bottom)); z-index: 60; transform: translateY(140%); transition: transform .3s ease; }
    .sticky-cta.on { transform: none; }
    .sticky-cta a { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; border-radius: 18px; background: var(--ink); color: #fff; text-decoration: none; font-family: 'Nunito'; font-weight: 800; font-size: 17px; box-shadow: 0 12px 30px rgba(29,36,51,.35); }
  }

  /* CodeTV (kept from the original site) */
  .codetv { position: relative; min-height: 440px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--night); }
  .codetv-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
  .codetv-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(18,23,43,.94) 0%, rgba(18,23,43,.72) 38%, rgba(18,23,43,.15) 72%, rgba(18,23,43,.05) 100%); }
  .codetv-row { position: relative; z-index: 1; width: 100%; max-width: 1160px; padding: 72px clamp(16px, 4vw, 40px); }
  .codetv-block { display: flex; flex-direction: column; align-items: center; gap: 14px; max-width: 320px; text-align: center; color: #fff; }
  .codetv-mark { width: min(280px, 70vw); }
  .codetv-link { font-size: 14px; color: rgba(255,255,255,.6); text-underline-offset: 3px; }

  /* Sections */
  .section { max-width: 1160px; margin: 0 auto; padding: clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px); }
  .section-head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px, 6vw, 72px); }

  /* Steps */
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(20px, 3vw, 36px); }
  .step { display: flex; flex-direction: column; align-items: center; text-align: center; }
  .step-art { width: min(250px, 100%); padding: 14px; border-radius: 32px; background: color-mix(in srgb, var(--tint) 18%, #fff); margin-bottom: 22px; }
  .step-art img { border-radius: 22px; box-shadow: 0 18px 36px rgba(29,36,51,.16); }
  .step-copy { max-width: 320px; }
  .step-n { display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: 12px; background: var(--ink); color: #fff; font-weight: 900; font-size: 17px; margin-bottom: 12px; }
  .step-copy h3 { font-size: 23px; font-weight: 900; line-height: 1.15; letter-spacing: -.015em; margin-bottom: 8px; }
  .step-copy p { font-size: 16px; line-height: 1.6; color: var(--ink-2); }

  /* Asteroid */
  .asteroid { background: linear-gradient(160deg, #3a1210 0%, #1d0b0a 100%); color: #fff; padding: clamp(72px, 9vw, 112px) clamp(16px, 4vw, 40px); overflow: hidden; }
  .asteroid-inner { max-width: 1060px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr .9fr; gap: clamp(32px, 6vw, 80px); align-items: center; }
  .asteroid h2 { margin-bottom: 18px; }
  .asteroid p { font-size: 18px; line-height: 1.65; color: rgba(255,255,255,.75); max-width: 30em; }
  .asteroid .eyebrow { color: #ff9a5c; }
  .asteroid-art { justify-self: center; width: min(300px, 74vw); }
  .asteroid-art img { border-radius: 28px; box-shadow: 0 30px 60px rgba(0,0,0,.5); }

  /* Features */
  .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .feature { background: var(--paper); border: 2px solid var(--line); border-radius: var(--radius); padding: 28px 26px; }
  .feature-icon { display: inline-grid; place-items: center; width: 52px; height: 52px; border-radius: 16px; background: var(--cream); font-size: 26px; margin-bottom: 16px; }
  .feature h3 { margin-bottom: 8px; }
  .feature p { font-size: 16px; line-height: 1.6; color: var(--ink-2); }

  /* Team */
  .team-section { padding-top: 0; }
  .team { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; max-width: 980px; margin: 0 auto; }
  .person { display: flex; gap: 20px; align-items: flex-start; background: var(--paper); border: 2px solid var(--line); border-radius: var(--radius); padding: 26px; }
  .person > img { width: 88px; height: 88px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .role { font-size: 14px; color: var(--ink-3); margin: 2px 0 10px; }
  .bio { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
  .bio a { text-underline-offset: 2px; }
  .socials { display: flex; gap: 8px; margin-top: 14px; }
  .socials a { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 12px; background: var(--cream); color: var(--ink); transition: background .2s ease, color .2s ease; }
  .socials a:hover { background: var(--ink); color: #fff; }

  /* Download */
  .download { background: linear-gradient(180deg, var(--cream) 0%, #ffe6bf 100%); padding: clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px); }
  .download-inner { max-width: 640px; margin: 0 auto; text-align: center; }
  .download-icon { margin: 0 auto 24px; border-radius: 22px; box-shadow: 0 16px 36px rgba(29,36,51,.2); }
  .download h2 { margin-bottom: 12px; }
  .download-inner > p { font-size: 18px; line-height: 1.6; color: var(--ink-2); margin-bottom: 28px; }
  .android { margin-top: 44px; background: rgba(255,255,255,.7); border: 2px solid var(--line); border-radius: var(--radius); padding: 24px; text-align: left; }
  .android p { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin-bottom: 14px; }
  .kit-form-wrapper form { max-width: 100% !important; }
  .kit-form-wrapper .formkit-fields { display: flex !important; flex-wrap: wrap !important; gap: 10px !important; }
  .kit-form-wrapper .formkit-field { flex: 1 1 220px !important; margin: 0 !important; }
  .kit-form-wrapper .formkit-field input { width: 100% !important; }
  .kit-form-wrapper .formkit-submit { flex: 0 0 auto !important; margin: 0 !important; }
  .kit-form-wrapper .formkit-powered-by-convertkit-container { display: none !important; }
  .kit-form-wrapper .formkit-alert { margin: 10px 0 0 !important; }

  /* Footer */
  .footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; padding: 28px clamp(16px, 4vw, 40px); background: #ffe6bf; border-top: 1px solid rgba(29,36,51,.08); }
  .footer-links { display: flex; gap: 22px; }
  .footer-links a { font-size: 13px; color: var(--ink-3); text-decoration: none; }
  .footer-links a:hover { color: var(--ink); }

  /* Tablet */
  @media (max-width: 960px) {
    .features { gap: 12px; }
    .team { grid-template-columns: 1fr; }
  }

  /* Phone */
  @media (max-width: 760px) {
    .nav-links { display: none; }
    .hero { padding-top: 84px; }
    .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 8px; }
    .hero h1 { margin: 0 auto; }
    .lede { margin-left: auto; margin-right: auto; }
    .hero-ctas { justify-content: center; }
    .qr-card { display: none; }
    .hero-visual { width: min(250px, 66vw); margin-top: 48px; }
    .phone-clip { height: 400px; }
    .hero-mayor { left: -64px; }
    .hero-mayor, .hero-mayor img { width: 96px; }
    .bubble { left: -4px; font-size: 13px; }
    .hero-city { margin-top: -40px; }
    .asteroid-inner { grid-template-columns: 1fr; text-align: center; }
    .steps { grid-template-columns: none; grid-auto-flow: column; grid-auto-columns: 64%; overflow-x: auto; scroll-snap-type: x mandatory; margin: 0 -16px; padding: 0 16px 8px; scrollbar-width: none; }
    .steps::-webkit-scrollbar { display: none; }
    .step { scroll-snap-align: center; }
    .step-art { width: 190px; padding: 10px; border-radius: 26px; }
    .step-art img { border-radius: 18px; }
    .footer { padding-bottom: 96px; }
    .codetv-row { display: flex; justify-content: center; padding: 64px 16px; }
    .codetv-shade { background: rgba(18,23,43,.72); }
    .asteroid p { margin: 0 auto; }
    .features { grid-template-columns: 1fr; }
    .person { flex-direction: column; align-items: center; text-align: center; }
    .socials { justify-content: center; }
    .footer { justify-content: center; text-align: center; }
  }
`;
