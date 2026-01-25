export default function ImpactScoreCard() {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h3 className="font-semibold mb-4">Your Impact Score</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Helpful posts</span>
          <span>+40</span>
        </div>

        <div className="flex justify-between">
          <span>Community support</span>
          <span>+25</span>
        </div>

        <div className="flex justify-between">
          <span>Reported abuse</span>
          <span>+15</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>80</span>
        </div>
      </div>
    </div>
  );
}
