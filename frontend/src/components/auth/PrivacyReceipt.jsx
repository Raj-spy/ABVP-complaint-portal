export default function PrivacyReceipt() {
  return (
    <div className="border rounded-lg p-6 bg-white space-y-3">
      <h2 className="text-lg font-semibold">Your Privacy Receipt</h2>

      <ul className="text-sm space-y-1">
        <li>✅ Email used only for login</li>
        <li>❌ No location tracking</li>
        <li>❌ No contact access</li>
        <li>❌ No ads or third-party trackers</li>
      </ul>

      <p className="text-xs text-gray-500">
        You can delete your data anytime.
      </p>
    </div>
  );
}
