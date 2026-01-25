import { useState } from "react";

export default function Settings() {
  const [bharatMode, setBharatMode] = useState(false);

  return (
    <div className="min-h-screen p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      <div className="border p-4 rounded space-y-4">
        <div className="flex items-center justify-between">
          <span>Bharat Mode (Low Bandwidth)</span>
          <input
            type="checkbox"
            checked={bharatMode}
            onChange={() => setBharatMode(!bharatMode)}
          />
        </div>

        <p className="text-sm text-gray-500">
          {bharatMode
            ? "Text-only feed enabled"
            : "Images and animations enabled"}
        </p>

        <hr />

        <button className="text-sm underline">
          Download My Data
        </button>

        <button className="text-sm text-red-600 underline">
          Delete My Account
        </button>
      </div>
    </div>
  );
}
