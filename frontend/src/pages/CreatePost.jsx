import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreatePost() {
  const navigate = useNavigate();
  const [privacy, setPrivacy] = useState("Community");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/feed");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full border p-6 rounded space-y-4"
      >
        <h2 className="text-xl font-semibold">Create Post</h2>

        <textarea
          placeholder="Write something meaningful…"
          className="w-full border p-2 rounded"
          rows="4"
          required
        />

        <div>
          <label className="text-sm font-medium">
            Who can see this post?
          </label>

          <select
            value={privacy}
            onChange={e => setPrivacy(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          >
            <option>Public</option>
            <option>Community</option>
            <option>Friends</option>
            <option>Private</option>
          </select>
        </div>

        <p className="text-xs text-gray-500">
          Privacy selected: <strong>{privacy}</strong>
        </p>

        <button className="w-full bg-black text-white py-2 rounded">
          Post
        </button>
      </form>
    </div>
  );
}
