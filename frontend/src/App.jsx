import { Routes, Route, useLocation } from "react-router-dom";

/* Layout */
import Navbar from "./components/layout/Navbar";

/* Pages */
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import PrivacyOnboarding from "./pages/PrivacyOnboarding.jsx";
import Feed from "./pages/Feed.jsx";
import Communities from "./pages/Communities.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import ImpactDashboard from "./pages/ImpactDashboard.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Messages from "./pages/Messages.jsx";

export default function App() {
  const location = useLocation();

  // Navbar hidden on auth & landing pages
  const hideNavbar = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideNavbar && <Navbar />}

      <main className={!hideNavbar ? "pt-4" : ""}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<PrivacyOnboarding />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/impact" element={<ImpactDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </main>
    </div>
  );
}
