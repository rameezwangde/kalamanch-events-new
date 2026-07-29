import { useEffect, useRef, useState } from "react";

const navigation = ["Home", "About Us", "School Events", "Our Work", "Contact"];

function KalamanchLogo() {
  return (
    <img
      className="kalamanch-logo"
      src="/images/kalamanch-logo.jpeg"
      alt="Kalamanch Theatre Production Company"
    />
  );
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kalamanch home">
        <KalamanchLogo />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <MenuIcon open={menuOpen} />
      </button>

      <nav className={menuOpen ? "is-open" : ""} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Spotlight() {
  return (
    <svg viewBox="0 0 170 170">
      <g transform="rotate(25 80 80)">
        <path d="M55 28h48v56H55z M62 20v-14 M78 20V4 M93 20V9" />
        <ellipse cx="79" cy="84" rx="31" ry="15" />
        <path className="cyan" d="M58 111l-15 21 M78 116v31 M98 110l18 23 M111 94l29 8" />
      </g>
    </svg>
  );
}

function Trophy() {
  return (
    <svg viewBox="0 0 180 190">
      <path d="M56 30h70l-8 74c-3 26-50 26-54 0z M53 42H32c0 35 16 51 35 50 M129 42h20c0 35-15 51-34 50 M91 124v27 M61 170h61 M72 151h39v19" />
      <path d="M91 50l8 17 18 2-14 12 5 19-17-10-17 10 5-19-14-12 18-2z" />
      <path className="cyan" d="M38 111l-13 8 M43 124l-9 15 M146 108l13 8" />
    </svg>
  );
}

function Mask() {
  return (
    <svg viewBox="0 0 150 150">
      <path d="M29 29c31 13 64 14 94 0l-9 69c-5 31-37 42-39 42S42 129 38 98z M51 66c8-8 17-7 23 2 M93 68c7-8 16-8 22-1 M56 104c12 12 28 13 41 0" />
      <path className="cyan" d="M127 79l13 5 M126 91l10 10" />
    </svg>
  );
}

function Megaphone() {
  return (
    <svg viewBox="0 0 180 140">
      <path d="M25 72l83-38v72L25 79z M25 58v28c-14 0-17-28 0-28z M45 84l4 39h26l-10-47" />
      <path className="cyan" d="M120 48l23-16 M126 70h31 M120 92l23 16" />
    </svg>
  );
}

function Plane() {
  return (
    <svg viewBox="0 0 175 155">
      <path className="cyan" d="M67 43l88-27-45 81-19-36z M67 43l53 11 M91 61l19 36 2-31" />
      <path className="flight-path" d="M4 139c48 8 27-46 64-52" />
    </svg>
  );
}

function Bunting() {
  return (
    <svg viewBox="0 0 350 130">
      <path d="M5 31c110 32 225 24 340-13" />
      <path d="M42 40l12 48 30-38 M102 52l23 47 20-48 M169 49l27 45 15-51 M236 38l26 44 12-55 M301 22l30 36 5-50" />
      <path className="cyan" d="M169 49l27 45 15-51 M301 22l30 36 5-50" />
    </svg>
  );
}

function MusicNotes() {
  return (
    <svg viewBox="0 0 130 120">
      <path className="cyan" d="M46 87V29l45-10v58 M46 45l45-10" />
      <ellipse className="cyan-fill" cx="34" cy="90" rx="15" ry="10" transform="rotate(-20 34 90)" />
      <ellipse className="cyan-fill" cx="80" cy="79" rx="15" ry="10" transform="rotate(-20 80 79)" />
    </svg>
  );
}

function Podium() {
  return (
    <svg viewBox="0 0 230 240">
      <path d="M50 51h135l20 19v17H31V70z M49 88h138v130H49z M36 218h166v15H36z M150 48c1-22 12-31 30-37 M180 11c8 0 10 12 1 14-8 1-11-11-1-14z" />
      <circle cx="117" cy="142" r="31" />
      <circle cx="117" cy="142" r="23" />
      <path className="cyan" d="M58 97v110 M177 97v110" />
    </svg>
  );
}

function Stars({ cyan = false }) {
  return (
    <svg viewBox="0 0 110 110">
      <path className={cyan ? "cyan" : ""} d="M52 8l7 19 20 4-16 12 3 21-14-11-16 11 4-21-17-12 21-4z" />
      <path className="cyan" d="M89 70l3 10 10 3-10 4-3 10-4-10-10-4 10-3z" />
    </svg>
  );
}

function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <div className="doodle spotlight"><Spotlight /></div>
      <div className="doodle trophy"><Trophy /></div>
      <div className="doodle mask"><Mask /></div>
      <div className="doodle megaphone"><Megaphone /></div>
      <div className="doodle plane"><Plane /></div>
      <div className="doodle star-left"><Stars /></div>
      <div className="doodle bunting"><Bunting /></div>
      <div className="doodle music"><MusicNotes /></div>
      <div className="doodle podium"><Podium /></div>
      <div className="doodle star-right"><Stars cyan /></div>
    </div>
  );
}

function Hero() {
  return (
    <main className="hero" id="home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />

      <div className="hero-copy" style={{ marginTop: '12vh' }}>
        <h1 style={{ textAlign: 'center' }}>Every School Event Deserves a Standing Ovation</h1>
      </div>

      <div className="hero-video-wrap" style={{ position: 'relative', left: 'auto', bottom: 'auto', transform: 'none', margin: '60px auto', width: '80%', maxWidth: '1000px' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          src="/hero video.mp4"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </div>
    </main>
  );
}

function WhoWeAre() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const updatePointer = (event) => {
      const bounds = section.getBoundingClientRect();
      const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;

      section.style.setProperty("--pointer-x", pointerX.toFixed(3));
      section.style.setProperty("--pointer-y", pointerY.toFixed(3));
    };

    const resetPointer = () => {
      section.style.setProperty("--pointer-x", "0");
      section.style.setProperty("--pointer-y", "0");
    };

    section.addEventListener("pointermove", updatePointer);
    section.addEventListener("pointerleave", resetPointer);

    return () => {
      section.removeEventListener("pointermove", updatePointer);
      section.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <section className="who-we-are" id="about-us" ref={sectionRef}>
      {/* Removed about-photo-field as requested */}

      <div className="about-inner">
        <div className="about-divider" />
        <p className="about-label">Who We Are</p>

        <h2>
          Every stage has a story.
          <br />
          We make sure your school&apos;s is unforgettable.
        </h2>

        <div className="about-copy">
          <p>
            For over two decades, Kalamanch has partnered with schools across
            India to create Annual Days, Founders&apos; Days, Investiture
            Ceremonies, Graduation Celebrations, Cultural Festivals, and student
            showcases that leave lasting impressions.
          </p>
          <p>
            From concept creation and stage production to choreography,
            lighting, sound, artist coordination, and complete event execution,
            we transform school celebrations into experiences students,
            parents, and educators never forget.
          </p>
        </div>

        <a className="about-cta" href="#our-work">
          <span>Explore Our Work</span>
        </a>
      </div>
    </section>
  );
}

function PortfolioShowcase() {
  const projectRef = useRef(null);

  useEffect(() => {
    const section = projectRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="project-showcase" id="our-work" ref={projectRef}>
      <div className="project-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', maxWidth: '1000px', margin: '100px auto', gap: '30px' }}>
        <div className="project-video" style={{ width: '100%' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/2nd section.mp4"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>

        <div className="project-content" style={{ width: '100%', textAlign: 'left' }}>
          <p className="project-category" style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#888', marginBottom: '8px', opacity: 1, transform: 'none' }}>Branding</p>
          <h2 style={{ fontSize: '32px', margin: '0 0 16px 0', opacity: 1, transform: 'none' }}>Kalamanch – Where School Events Come Alive</h2>

          <div className="project-description" style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc', maxWidth: '800px', opacity: 1, transform: 'none' }}>
            <p>
              Kalamanch is a passionate team of creators, planners, and
              production specialists dedicated to crafting extraordinary school
              events that inspire students, engage audiences, and celebrate
              every milestone.
            </p>
            <p style={{ marginTop: '12px' }}>
              From Annual Days and Founders&apos; Days to Investiture Ceremonies,
              Graduation Celebrations, Cultural Festivals, Award Nights, and
              School Showcases, we combine creativity, storytelling,
              choreography, stage production, lighting, sound, and flawless
              execution to deliver unforgettable experiences for every school
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreativeProcessShowcase() {
  const processRef = useRef(null);

  useEffect(() => {
    const section = processRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-showcase" id="process" ref={processRef}>
      <div className="process-inner">
        <div className="process-image">
          {/* Replace with the final Kalamanch school event image. */}
          <img
            src="/images/kalamanch-stage-story.png"
            alt="Students performing beneath the Kalamanch stage title"
          />
        </div>

        <div className="process-content">
          <p className="process-category">Our Creative Process</p>
          <h2>
            From First Bell to
            <br />
            Final Applause
          </h2>

          <div className="process-description">
            <p>
              Every memorable school event begins with an idea. We shape that
              idea into a complete creative direction through thoughtful themes,
              original scripts, music, choreography, visual storytelling, and
              immersive stage design.
            </p>
            <p>
              Our team then brings every element together&mdash;from student
              rehearsals and artist coordination to lighting, sound, multimedia,
              costumes, and show-day production&mdash;ensuring the final
              performance feels seamless, meaningful, and uniquely connected to
              the school.
            </p>
          </div>

          <a className="process-link" href="#process">
            Explore How We Create <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-column footer-left">
            <div>
              <p className="footer-heading">Mumbai</p>
              <a href="mailto:hello@kalamanch.in">hello@kalamanch.in</a>
            </div>
            <p className="footer-copyright">Kalamanch &copy;2026</p>
          </div>

          <div className="footer-column footer-center">
            <div>
              <p className="footer-heading">New Delhi</p>
              <a href="mailto:delhi@kalamanch.in">delhi@kalamanch.in</a>
            </div>
            <p className="footer-address">Creating unforgettable school events across India</p>
          </div>

          <div className="footer-column footer-right">
            <div>
              <p className="footer-heading">Careers</p>
              <a href="mailto:careers@kalamanch.in">careers@kalamanch.in</a>
            </div>
            <nav className="footer-socials" aria-label="Social media">
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0
        ? Math.min(window.scrollY / scrollableHeight, 1)
        : 0;

      setProgress(nextProgress);
      frameId = undefined;
    };

    const requestUpdate = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <WhoWeAre />
      <PortfolioShowcase />
      <CreativeProcessShowcase />
      <Footer />
    </>
  );
}
