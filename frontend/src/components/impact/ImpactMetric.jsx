export default function ImpactMetric({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
