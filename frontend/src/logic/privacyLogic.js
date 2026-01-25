export function canUserSeePost(post, viewer) {
  if (post.privacy === "Public") return true;

  if (
    post.privacy === "Community" &&
    viewer.communities?.includes(post.community)
  ) {
    return true;
  }

  if (
    post.privacy === "Friends" &&
    viewer.friends?.includes(post.userId)
  ) {
    return true;
  }

  return false;
}
