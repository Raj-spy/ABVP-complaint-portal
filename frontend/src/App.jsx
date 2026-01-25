import { Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main content */}
      <main className="pt-4">
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
        </Routes>
      </main>
    </div>
  );
}
