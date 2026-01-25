export function formatCount(num) {
  if (num < 1000) return num;
  if (num < 1_000_000) return (num / 1000).toFixed(1) + "K";
  return (num / 1_000_000).toFixed(1) + "M";
}
