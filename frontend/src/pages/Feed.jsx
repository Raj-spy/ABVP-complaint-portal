import PageContainer from "../components/layout/PageContainer";
import FeedControls from "../components/feed/FeedControls";
import PrivacyBadge from "../components/feed/PrivacyBadge";

const posts = [
  {
    id: 1,
    user: "rahul_dev",
    avatar: "https://i.pravatar.cc/150?img=3",
    type: "image",
    media: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    caption: "Learning React properly > chasing frameworks 🚀",
    community: "Web Development",
    privacy: "Community",
  },
  {
    id: 2,
    user: "mental.space",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "video",
    media: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Reminder: it’s okay to slow down 🌱",
    community: "Mental Health",
    privacy: "Public",
  },
  {
    id: 3,
    user: "design.daily",
    avatar: "https://i.pravatar.cc/150?img=8",
    type: "image",
    media: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    caption: "Good UI is invisible. Bad UI is unforgettable.",
    community: "UI/UX",
    privacy: "Public",
  },
  {
    id: 4,
    user: "student.hub",
    avatar: "https://i.pravatar.cc/150?img=11",
    type: "image",
    media: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    caption: "Consistency > motivation. Keep going 📚",
    community: "Students",
    privacy: "Community",
  },
  {
    id: 5,
    user: "fit.mind",
    avatar: "https://i.pravatar.cc/150?img=12",
    type: "image",
    media: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    caption: "Morning walks clear more than just your head ☀️",
    community: "Wellness",
    privacy: "Public",
  },
  {
    id: 6,
    user: "code.bytes",
    avatar: "https://i.pravatar.cc/150?img=15",
    type: "image",
    media: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    caption: "Debugging is where real learning happens 💻",
    community: "Web Development",
    privacy: "Community",
  },
];

export default function Feed() {
  return (
    <PageContainer>
      {/* Explainable Feed Controls */}
      <FeedControls />

      {/* Long Feed */}
      <div className="space-y-10 max-w-md mx-auto">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white border rounded-xl overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
              <img
                src={post.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{post.user}</p>
                <p className="text-xs text-gray-500">
                  {post.community}
                </p>
              </div>
              <PrivacyBadge type={post.privacy} />
            </div>

            {/* Media */}
            {post.type === "image" && (
              <img
                src={post.media}
                alt=""
                className="w-full max-h-[450px] object-cover"
              />
            )}

            {post.type === "video" && (
              <video
                src={post.media}
                controls
                className="w-full max-h-[450px] object-cover"
              />
            )}

            {/* Actions */}
            <div className="flex gap-4 px-4 pt-3 text-xl text-gray-600">
              ❤️ 💬 🔖
            </div>

            {/* Caption */}
            <div className="px-4 py-3">
              <p className="text-sm">
                <span className="font-semibold mr-1">
                  {post.user}
                </span>
                {post.caption}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                You’re seeing this because you follow{" "}
                <b>{post.community}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
