export default function FeatureCard({ title, description }) {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
