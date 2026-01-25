export function applyFeedLogic(posts, controls) {
  let result = [...posts];

  // knowledge vs calm
  if (controls.mode === "knowledge") {
    result = result.filter(
      (post) => post.category === "knowledge"
    );
  }

  if (controls.mode === "calm") {
    result = result.filter(
      (post) => post.category === "calm"
    );
  }

  // friends vs communities (future-ready)
  if (controls.source === "communities") {
    result = result.filter(
      (post) => post.community !== "Friends"
    );
  }

  return result;
}
