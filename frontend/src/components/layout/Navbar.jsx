 import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="font-bold text-xl">
          PrivacySocial
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <Link to="/feed" className="hover:text-black">Feed</Link>
          <Link to="/communities" className="hover:text-black">Communities</Link>
          <Link to="/create" className="hover:text-black">Create</Link>
          <Link to="/impact" className="hover:text-black">Impact</Link>
          <Link to="/settings" className="hover:text-black">Settings</Link>

          {/* Profile */}
          <Link
            to="/profile"
            className="ml-3 px-3 py-1 rounded-full border text-black hover:bg-gray-100"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
