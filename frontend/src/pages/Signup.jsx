import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // Optional: store token if returned
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/privacy");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Inject animation keyframes once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
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
      <form style={styles.card} onSubmit={handleSignup}>

        {/* HEADER */}
        <div style={styles.header}>
          <h2 style={styles.title}>Create your account</h2>
          <p style={styles.subtitle}>
            A calm, privacy-first social space built for meaningful connections.
          </p>
        </div>

        {/* BASIC INFO */}
        <div style={styles.section}>
          <span style={styles.sectionLabel}>Basic information</span>

          <div style={styles.field}>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              style={styles.input}
              onFocus={floatLabel}
              onBlur={resetLabel}
            />
            <label style={styles.label}>Full name</label>
          </div>

          <div style={styles.field}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={styles.input}
              onFocus={floatLabel}
              onBlur={resetLabel}
            />
            <label style={styles.label}>Email address</label>
          </div>
        </div>

        {/* SECURITY */}
        <div style={styles.section}>
          <span style={styles.sectionLabel}>Security</span>

          <div style={styles.field}>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
              onFocus={floatLabel}
              onBlur={resetLabel}
            />
            <label style={styles.label}>Password</label>
          </div>
        </div>

        {/* ERROR */}
        {error && <p style={styles.error}>{error}</p>}

        {/* PRIVACY NOTE */}
        <div style={styles.infoBox}>
          <h4 style={styles.infoTitle}>Your privacy matters</h4>
          <p style={styles.infoText}>
            Your information is used only for account security and identity.
            We never sell data, track behavior, or run ads.
          </p>
        </div>

        {/* CTA */}
        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
          onMouseEnter={hoverUp}
          onMouseLeave={hoverDown}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        {/* FOOTER */}
        <div style={styles.footer}>
          <span style={styles.footerNote}>
            No ads · No tracking · Full control
          </span>
        </div>

      </form>
    </div>
  );
}

/* 🔹 FLOAT LABEL HELPERS */
function floatLabel(e) {
  e.target.nextSibling.style.top = "-6px";
}

function resetLabel(e) {
  if (!e.target.value) {
    e.target.nextSibling.style.top = "50%";
  }
}

function hoverUp(e) {
  if (!e.target.disabled) {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
  }
}

function hoverDown(e) {
  e.target.style.transform = "translateY(0)";
  e.target.style.boxShadow = "none";
}

/* 🎨 INLINE STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #ffffff, #f4f4f4)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "480px",
    padding: "54px 46px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(18px)",
    borderRadius: "32px",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 45px 90px rgba(0,0,0,0.1)",
    animation: "fadeUp 1s ease",
  },

  header: {
    textAlign: "center",
    marginBottom: "42px",
  },

  title: {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.6",
  },

  section: {
    marginBottom: "30px",
  },

  sectionLabel: {
    display: "block",
    fontSize: "0.72rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#888",
    marginBottom: "14px",
  },

  field: {
    position: "relative",
    marginBottom: "22px",
  },

  input: {
    width: "100%",
    padding: "16px 14px",
    fontSize: "0.95rem",
    borderRadius: "16px",
    border: "1px solid #ccc",
    outline: "none",
    background: "transparent",
  },

  label: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "0.85rem",
    color: "#777",
    background: "#fff",
    padding: "0 6px",
    pointerEvents: "none",
    transition: "all 0.25s ease",
  },

  infoBox: {
    background: "#f7f7f7",
    borderRadius: "16px",
    padding: "18px",
    marginBottom: "30px",
  },

  infoTitle: {
    fontSize: "0.9rem",
    fontWeight: 600,
    marginBottom: "6px",
  },

  infoText: {
    fontSize: "0.85rem",
    color: "#555",
    lineHeight: "1.6",
  },

  button: {
    width: "100%",
    padding: "15px",
    borderRadius: "999px",
    border: "none",
    background: "#000",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.35s ease",
  },

  error: {
    color: "#d32f2f",
    fontSize: "0.85rem",
    marginBottom: "14px",
    textAlign: "center",
  },

  footer: {
    marginTop: "30px",
    textAlign: "center",
  },

  footerNote: {
    fontSize: "0.75rem",
    color: "#999",
  },
};
