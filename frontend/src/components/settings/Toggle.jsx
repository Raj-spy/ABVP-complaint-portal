export default function Toggle({ label, value, onChange }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm">{label}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}
