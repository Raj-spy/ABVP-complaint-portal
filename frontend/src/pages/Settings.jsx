import { useState } from "react";

export default function Settings() {
  const [bharatMode, setBharatMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto">

        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Settings
        </h2>

        {/* Card */}
        <div className="bg-white border rounded-xl shadow-sm divide-y">

          {/* Bharat Mode */}
          <div className="p-5 flex items-start justify-between gap-4">
            <div>
              <p className="font-medium text-gray-900">
                Bharat Mode
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Optimize experience for low bandwidth and slower networks
              </p>
            </div>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={bharatMode}
                onChange={() => setBharatMode(!bharatMode)}
                className="sr-only"
              />
              <span
                className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
                  bharatMode ? "bg-black" : "bg-gray-300"
                }`}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                    bharatMode ? "translate-x-5" : ""
                  }`}
                />
              </span>
            </label>
          </div>

          {/* Mode Status */}
          <div className="px-5 py-3 text-sm text-gray-600">
            {bharatMode
              ? "Text-only feed enabled for faster loading."
              : "Images and animations are enabled."}
          </div>

          {/* Actions */}
          <div className="p-5 space-y-3">
            <button className="w-full text-left text-sm text-gray-700 hover:text-black transition">
              Download my data
            </button>

            <button className="w-full text-left text-sm text-red-600 hover:text-red-700 transition">
              Delete my account
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
