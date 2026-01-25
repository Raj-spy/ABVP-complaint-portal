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
    <nav className="w-full border-b bg-white sticky top-0 z-50 animate-[slideDown_0.6s_ease]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              className="border rounded-full px-3 py-1 text-sm hover:bg-gray-100 transition"
            >
              ← Back
            </button>
          )}

          <Link to="/" className="font-bold text-xl">
            PrivacySocial
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <NavItem to="/feed" label="Feed" />
          <NavItem to="/communities" label="Communities" />
          <NavItem to="/create" label="Create" />
          <NavItem to="/impact" label="Impact" />
          <NavItem to="/settings" label="Settings" />

          <Link
            to="/profile"
            className="ml-2 px-3 py-1 rounded-full border text-black hover:bg-gray-100"
          >
            Profile
          </Link>
        </div>

      </div>
    </nav>
  );
}

/* 🔹 NAV ITEM */
function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="relative hover:text-black transition"
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-black transition-all group-hover:w-full"></span>
    </Link>
  );
}
