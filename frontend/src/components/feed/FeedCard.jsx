import PrivacyBadge from "./PrivacyBadge";

export default function FeedCard({ post }) {
  return (
    <div className="border rounded-lg p-4 bg-white space-y-2">
      <h3 className="font-semibold">{post.title}</h3>

      <p className="text-sm text-gray-700">
        {post.content}
      </p>

      <p className="text-xs text-gray-500">
        You’re seeing this because you follow <b>{post.community}</b>
      </p>

      <div className="flex justify-between items-center pt-2">
        <span className="text-xs text-gray-500">
          {post.community}
        </span>

        <PrivacyBadge type={post.privacy} />
      </div>
    </div>
  );
}
