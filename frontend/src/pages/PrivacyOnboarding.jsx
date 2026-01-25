import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyOnboarding() {
  const navigate = useNavigate();

  const [privacy, setPrivacy] = useState({
    email: true,
    contacts: false,
    location: false,
    analytics: false,
  });

  const toggle = (key) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white text-black">
      <div className="w-full max-w-md border-2 border-black p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-widest">
            Privacy Receipt
          </h2>
          <p className="text-xs uppercase tracking-wider mt-1">
            Choose what you share
          </p>
        </div>

        {/* Privacy Controls */}
        <ul className="text-sm space-y-4">
          <li className="flex items-center justify-between border-b border-black pb-2">
            <span>Email (required for login)</span>
            <input
              type="checkbox"
              checked={privacy.email}
              disabled
              className="accent-black"
            />
          </li>

          <li className="flex items-center justify-between border-b border-black pb-2">
            <span>Contacts</span>
            <input
              type="checkbox"
              checked={privacy.contacts}
              onChange={() => toggle("contacts")}
              className="accent-black"
            />
          </li>

          <li className="flex items-center justify-between border-b border-black pb-2">
            <span>Location</span>
            <input
              type="checkbox"
              checked={privacy.location}
              onChange={() => toggle("location")}
              className="accent-black"
            />
          </li>

          <li className="flex items-center justify-between">
            <span>Analytics / Usage Data</span>
            <input
              type="checkbox"
              checked={privacy.analytics}
              onChange={() => toggle("analytics")}
              className="accent-black"
            />
          </li>
        </ul>

        {/* Explanation */}
        <p className="text-xs leading-relaxed">
          This receipt updates instantly. We don’t collect anything unless you
          allow it. You can change these settings anytime.
        </p>

        {/* Action */}
        <button
          onClick={() => navigate("/feed")}
          className="w-full border-2 border-black py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
