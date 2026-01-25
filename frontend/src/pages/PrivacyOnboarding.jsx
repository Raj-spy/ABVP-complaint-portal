import { useNavigate } from "react-router-dom";

export default function PrivacyOnboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md border p-6 rounded space-y-4">
        <h2 className="text-xl font-semibold">Your Privacy Receipt</h2>

        <ul className="text-sm space-y-2">
          <li>✅ Email stored for login</li>
          <li>❌ No contacts access</li>
          <li>❌ No location tracking</li>
          <li>❌ No ads or trackers</li>
        </ul>

        <button
          onClick={() => navigate("/feed")}
          className="w-full bg-black text-white py-2 rounded"
        >
          Accept & Continue
        </button>
      </div>
    </div>
  );
}
