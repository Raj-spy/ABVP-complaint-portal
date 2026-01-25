export function filterFeed(posts, controls) {
  let filtered = [...posts];

  if (controls.mode === "knowledge") {
    filtered = filtered.filter(p => p.category === "knowledge");
  }

  if (controls.mode === "calm") {
    filtered = filtered.filter(p => p.category === "calm");
  }

  return filtered;
}
