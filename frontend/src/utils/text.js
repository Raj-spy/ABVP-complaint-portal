export function truncate(text, limit = 120) {
  if (!text) return "";
  return text.length > limit
    ? text.slice(0, limit) + "..."
    : text;
}
