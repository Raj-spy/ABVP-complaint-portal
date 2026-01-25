export default function FeedControls() {
  return (
    <div className="border rounded-lg p-4 mb-6 bg-gray-50">
      <h3 className="text-sm font-semibold mb-3">
        Control Your Feed
      </h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block text-gray-600">Knowledge ↔ Entertainment</label>
          <input type="range" className="w-full" />
        </div>

        <div>
          <label className="block text-gray-600">Friends ↔ Communities</label>
          <input type="range" className="w-full" />
        </div>

        <div>
          <label className="block text-gray-600">Latest ↔ Popular</label>
          <input type="range" className="w-full" />
        </div>

        <div>
          <label className="block text-gray-600">Calm ↔ Trending</label>
          <input type="range" className="w-full" />
        </div>
      </div>
    </div>
  );
}
