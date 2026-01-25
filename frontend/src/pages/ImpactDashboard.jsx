export default function ImpactDashboard() {
  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Impact Score</h2>

      <div className="border rounded p-6 space-y-4">
        <div className="flex justify-between">
          <span>Helpful Posts</span>
          <span>+40</span>
        </div>

        <div className="flex justify-between">
          <span>Community Support</span>
          <span>+25</span>
        </div>

        <div className="flex justify-between">
          <span>Reported Abuse</span>
          <span>+15</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total Impact Score</span>
          <span>80</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Impact Score rewards contribution, not popularity.
      </p>
    </div>
  );
}
