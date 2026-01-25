import { Link } from "react-router-dom";

const communities = [
  {
    id: 1,
    name: "Web Development",
    description: "Frontend, backend, full-stack discussions"
  },
  {
    id: 2,
    name: "Mental Health",
    description: "Safe space for mental wellness support"
  },
  {
    id: 3,
    name: "Students Hub",
    description: "Exams, careers, internships"
  }
];

export default function Communities() {
  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Communities</h2>

      <div className="grid gap-4">
        {communities.map(c => (
          <div key={c.id} className="border p-4 rounded">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{c.description}</p>

            <Link
              to="/feed"
              className="inline-block mt-3 text-sm underline"
            >
              View Posts →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
