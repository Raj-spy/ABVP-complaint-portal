import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Landing() {

  // animation
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBox}>
          <span style={styles.badge}>PRIVACY FIRST · USER CONTROLLED</span>

          <h1 style={styles.heading}>
            A Social Network <br /> Designed for Humans
          </h1>

          <p style={styles.subtitle}>
            A calm, intentional space built around privacy,
            control, and meaningful interaction — not addiction.
          </p>

          <div style={styles.buttonGroup}>
            <Link to="/signup" style={{ ...styles.button, ...styles.primary }}>
              Get Started
            </Link>
            <Link to="/login" style={{ ...styles.button, ...styles.secondary }}>
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={styles.trustStrip}>
        <span>NO ADS</span>
        <span>NO TRACKING</span>
        <span>NO DARK PATTERNS</span>
        <span>ETHICAL ALGORITHMS</span>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Built With Intention</h2>

        <div style={styles.features}>
          <Feature title="Ethical Personalization" text="Your feed is shaped by your interests, not engagement tricks or surveillance." />
          <Feature title="Privacy Controls" text="Granular visibility and data-sharing settings that are readable and reversible." />
          <Feature title="Communities & Messaging" text="Interest-based groups, private messaging, forums, and secure video calls." />
          <Feature title="Low-Bandwidth Optimized" text="Fast and responsive even on slower networks and entry-level devices." />
          <Feature title="Automated Safety" text="AI-assisted moderation and abuse detection without invasive monitoring." />
          <Feature title="Healthy Gamification" text="Encourages contribution and learning — not endless scrolling." />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={styles.philosophy}>
        <h2 style={styles.sectionTitleLight}>Our Philosophy</h2>
        <p style={styles.philosophyText}>
          Social technology should respect human attention,
          protect personal data, and encourage thoughtful connection.
          This platform is built to serve users — not advertisers.
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaBox}>
          <span style={styles.ctaBadge}>YOUR SPACE · YOUR RULES</span>

          <h2 style={styles.ctaTitle}>Take Back Control</h2>

          <p style={styles.ctaText}>
            Join a social network that respects your attention,
            protects your data, and values thoughtful connection.
          </p>

          <Link
            to="/signup"
            style={{ ...styles.button, ...styles.primary }}
            onMouseEnter={e => (e.target.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.target.style.transform = "translateY(0)")}
          >
            Create Your Account
          </Link>
        </div>
      </section>

    </div>
  );
}

/* FEATURE CARD */
function Feature({ title, text }) {
  return (
    <div
      style={styles.feature}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureText}>{text}</p>
    </div>
  );
}

/* 🎨 MONOCHROME · SHARP · EDITORIAL STYLES */
const styles = {
  page: {
    background: "#fff",
    color: "#000",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
  },

  heroBox: {
    maxWidth: "900px",
    width: "100%",
    padding: "64px 48px",
    textAlign: "center",
    border: "2px solid #000",
    animation: "fadeUp 1s ease",
  },

  badge: {
    display: "inline-block",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    marginBottom: "24px",
    borderBottom: "2px solid #000",
    paddingBottom: "6px",
  },

  heading: {
    fontSize: "3.2rem",
    fontWeight: 700,
    lineHeight: "1.15",
    marginBottom: "24px",
  },

  subtitle: {
    fontSize: "1.05rem",
    maxWidth: "640px",
    margin: "0 auto 40px",
    lineHeight: "1.7",
    color: "#222",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
  },

  button: {
    padding: "14px 34px",
    fontSize: "1rem",
    fontWeight: 500,
    textDecoration: "none",
    border: "2px solid #000",
    transition: "all 0.25s ease",
  },

  primary: {
    background: "#000",
    color: "#fff",
  },

  secondary: {
    background: "#fff",
    color: "#000",
  },

  trustStrip: {
    display: "flex",
    justifyContent: "space-around",
    padding: "28px",
    borderTop: "2px solid #000",
    borderBottom: "2px solid #000",
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
  },

  section: {
    padding: "120px 32px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "2.4rem",
    textAlign: "center",
    marginBottom: "64px",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
  },

  feature: {
    padding: "32px",
    border: "2px solid #000",
    transition: "all 0.25s ease",
  },

  featureTitle: {
    fontSize: "1.1rem",
    marginBottom: "12px",
  },

  featureText: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: "#333",
  },

  philosophy: {
    padding: "140px 32px",
    background: "#000",
    color: "#fff",
    textAlign: "center",
  },

  sectionTitleLight: {
    fontSize: "2.4rem",
    marginBottom: "32px",
  },

  philosophyText: {
    maxWidth: "720px",
    margin: "0 auto",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#ddd",
  },

  cta: {
    padding: "160px 32px",
    display: "flex",
    justifyContent: "center",
    borderTop: "2px solid #000",
  },

  ctaBox: {
    maxWidth: "900px",
    width: "100%",
    padding: "64px 48px",
    textAlign: "center",
    border: "2px solid #000",
  },

  ctaBadge: {
    display: "inline-block",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    marginBottom: "24px",
    borderBottom: "2px solid #000",
    paddingBottom: "6px",
  },

  ctaTitle: {
    fontSize: "2.6rem",
    marginBottom: "20px",
    fontWeight: 700,
  },

  ctaText: {
    maxWidth: "600px",
    margin: "0 auto 40px",
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#222",
  },
};
