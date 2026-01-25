export default function ReportButton() {
  return (
    <button
      className="text-xs text-red-600 underline"
      onClick={() => alert("Content reported for review")}
    >
      Report
    </button>
  );
}
