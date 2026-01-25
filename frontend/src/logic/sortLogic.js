export function sortPosts(posts, sortBy) {
  if (sortBy === "latest") {
    return [...posts].reverse();
  }

  if (sortBy === "popular") {
    return [...posts].sort(
      (a, b) => (b.likes || 0) - (a.likes || 0)
    );
  }

  return posts;
}
