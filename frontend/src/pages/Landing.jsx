import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        A Social Network You Control
      </h1>

      <p style={{ maxWidth: "500px", marginTop: "16px", color: "#555" }}>
        No addictive algorithms. No hidden tracking.
        <br />
        You decide what you see, what you share, and how you engage.
      </p>

      <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
        <Link
          to="/signup"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Get Started
        </Link>

        <Link
          to="/login"
          style={{
            border: "1px solid #000",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
