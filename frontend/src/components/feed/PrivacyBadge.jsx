export default function PrivacyBadge({ type }) {
  const colors = {
    Public: "bg-green-100 text-green-700",
    Community: "bg-blue-100 text-blue-700",
    Private: "bg-gray-200 text-gray-700",
    Friends: "bg-purple-100 text-purple-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${colors[type]}`}>
      {type}
    </span>
  );
}
