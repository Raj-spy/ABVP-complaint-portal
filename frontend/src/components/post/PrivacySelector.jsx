export default function PrivacySelector({ value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium">
        Who can see this post?
      </label>

      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded p-2 mt-1"
      >
        <option>Public</option>
        <option>Community</option>
        <option>Friends</option>
        <option>Private</option>
      </select>
    </div>
  );
}
