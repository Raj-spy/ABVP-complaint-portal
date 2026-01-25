export default function PostEditor({ value, onChange }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={4}
        placeholder="Write something meaningful…"
        className="w-full border rounded p-3"
      />
      <p className="text-xs text-gray-500 mt-1">
        Be respectful. Quality over quantity.
      </p>
    </div>
  );
}
