export default function SettingsSection({ title, children }) {
  return (
    <div className="border rounded-lg p-5 bg-white mb-4">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
