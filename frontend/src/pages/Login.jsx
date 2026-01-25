import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Optional: store token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/feed");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Inject keyframes once
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
      <form style={styles.card} onSubmit={handleLogin}>

        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome back</h2>
          <p style={styles.subtitle}>
            Continue your privacy-first social experience
          </p>
        </div>

        {/* Email */}
        <div style={styles.field}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
            onFocus={e => (e.target.nextSibling.style.top = "-6px")}
            onBlur={e => {
              if (!e.target.value) e.target.nextSibling.style.top = "50%";
            }}
          />
          <label style={styles.label}>Email address</label>
        </div>

        {/* Password */}
        <div style={styles.field}>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
            onFocus={e => (e.target.nextSibling.style.top = "-6px")}
            onBlur={e => {
              if (!e.target.value) e.target.nextSibling.style.top = "50%";
            }}
          />
          <label style={styles.label}>Password</label>
        </div>

        {/* Error Message */}
        {error && <p style={styles.error}>{error}</p>}

        {/* Button */}
        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
          onMouseEnter={e => {
            if (!loading) {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
            }
          }}
          onMouseLeave={e => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            New user?{" "}
            <Link to="/signup" style={styles.link}>
              Create an account
            </Link>
          </p>
          <span style={styles.note}>
            No ads · No tracking · Full control
          </span>
        </div>

      </form>
    </div>
  );
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
    maxWidth: "420px",
    padding: "50px 42px",
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(18px)",
    borderRadius: "30px",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 45px 90px rgba(0,0,0,0.1)",
    animation: "fadeUp 1s ease",
  },

  header: {
    textAlign: "center",
    marginBottom: "36px",
  },

  title: {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "0.95rem",
    color: "#555",
  },

  field: {
    position: "relative",
    marginBottom: "26px",
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

  button: {
    width: "100%",
    padding: "14px",
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
    marginTop: "28px",
    textAlign: "center",
  },

  footerText: {
    fontSize: "0.9rem",
    color: "#555",
  },

  link: {
    color: "#000",
    textDecoration: "underline",
  },

  note: {
    display: "block",
    marginTop: "12px",
    fontSize: "0.75rem",
    color: "#999",
  },
};
