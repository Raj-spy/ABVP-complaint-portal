import { Link } from "react-router-dom";

export default function CommunityCard({ name, description }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>

      <Link
        to="/feed"
        className="text-sm underline mt-3 inline-block"
      >
        View posts →
      </Link>
    </div>
  );
}
