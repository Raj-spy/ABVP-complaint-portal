export function shouldHidePost(post) {
  if (post.reports >= 3) {
    return true;
  }

  return false;
}
