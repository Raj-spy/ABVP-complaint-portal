import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Inject animation keyframes once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-16px);
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
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.left}>
          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              style={styles.backBtn}
              onMouseEnter={e => (e.target.style.background = "#f0f0f0")}
              onMouseLeave={e => (e.target.style.background = "transparent")}
            >
              ← Back
            </button>
          )}

          <Link to="/" style={styles.logo}>
            PrivacySocial
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.links}>
          {navLinks.map(link => (
            <NavItem key={link.path} {...link} />
          ))}
        </div>

      </div>
    </nav>
  );
}

/* 🔹 NAV ITEM COMPONENT */
function NavItem({ path, label }) {
  return (
    <Link
      to={path}
      style={styles.link}
      onMouseEnter={e => {
        e.currentTarget.children[1].style.width = "100%";
      }}
      onMouseLeave={e => {
        e.currentTarget.children[1].style.width = "0";
      }}
    >
      <span>{label}</span>
      <span style={styles.underline}></span>
    </Link>
  );
}

/* 🔹 NAV LINKS */
const navLinks = [
  { path: "/feed", label: "Feed" },
  { path: "/communities", label: "Communities" },
  { path: "/create", label: "Create" },
  { path: "/impact", label: "Impact" },
  { path: "/settings", label: "Settings" },
];

const styles = {
  nav: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    animation: "slideDown 0.6s ease",
  },

  container: {
    maxWidth: "1100px", // 🔽 reduced from 1200px
    margin: "0 auto",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px", // 🔽 slightly tighter
  },

  backBtn: {
    border: "1px solid rgba(0,0,0,0.15)",
    borderRadius: "999px",
    padding: "6px 14px",
    background: "transparent",
    cursor: "pointer",
    fontSize: "0.85rem",
    transition: "all 0.25s ease",
  },

  logo: {
    fontSize: "1.2rem", // 🔽 very slight reduction
    fontWeight: 700,
    textDecoration: "none",
    color: "#000",
    letterSpacing: "-0.02em",
  },

  links: {
    display: "flex",
    gap: "20px", // 🔽 reduced from 28px
    alignItems: "center",
  },

  link: {
    position: "relative",
    textDecoration: "none",
    color: "#555",
    fontSize: "0.9rem",
    fontWeight: 500,
    paddingBottom: "4px",
    transition: "color 0.25s ease",
  },

  underline: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "1.5px",
    width: "0",
    background: "#000",
    transition: "width 0.25s ease",
  },
};
