export default function AuthCard({ title, children }) {
  return (
    <div className="max-w-sm mx-auto border rounded-lg p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
