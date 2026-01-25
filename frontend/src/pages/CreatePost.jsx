import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFeedStore } from "../context/FeedContext";

/* explainable moderation rules */
const BLOCKED_WORDS = ["hate", "kill", "abuse", "violence"];
const MAX_HASHTAGS = 5;
const MAX_FILE_SIZE_MB = 10;

export default function CreatePost() {
  const navigate = useNavigate();
  const { addPost } = useFeedStore();

  const [content, setContent] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [privacy, setPrivacy] = useState("Community");
  const [warning, setWarning] = useState("");

  function runModeration(text) {
    const lower = text.toLowerCase();

    const found = BLOCKED_WORDS.find((w) => lower.includes(w));
    if (found) {
      return `Restricted word detected (“${found}”). Please revise.`;
    }

    const hashtags = text.match(/#[a-z0-9_]+/gi) || [];
    if (hashtags.length > MAX_HASHTAGS) {
      return "Too many hashtags. Maximum allowed is 5.";
    }

    return "";
  }

  function handleTextChange(e) {
    const text = e.target.value;
    setContent(text);
    setWarning(runModeration(text));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (
      !file.type.startsWith("image/") &&
      !file.type.startsWith("video/")
    ) {
      setWarning("Only image or video files are allowed.");
      return;
    }

    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > MAX_FILE_SIZE_MB) {
      setWarning("File size must be under 10MB.");
      return;
    }

    setWarning("");
    setMediaFile(file);
    setMediaPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const finalWarning = runModeration(content);
    if (finalWarning) {
      setWarning(finalWarning);
      return;
    }

    const newPost = {
      id: Date.now(),
      initials: "YO",
      name: "You",
      handle: "@you",
      text: content,
      tag: "General",
      time: "Just now",
      likes: 0,
      comments: 0,
      media: mediaPreview
        ? [
            {
              type: mediaFile.type.startsWith("image/")
                ? "image"
                : "video",
              url: mediaPreview,
            },
          ]
        : [],
    };

    addPost(newPost);
    navigate("/feed");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white text-black">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full border-2 border-black p-6 space-y-6"
      >
        <h2 className="text-lg font-bold uppercase tracking-widest">
          Create Post
        </h2>

        <textarea
          placeholder="Write something meaningful…"
          value={content}
          onChange={handleTextChange}
          rows="4"
          className="w-full border-2 border-black p-2 text-sm resize-none"
          required
        />

        {/* Upload button */}
        <div className="space-y-2">
          <label className="inline-block border-2 border-black px-4 py-2 text-sm uppercase cursor-pointer hover:bg-black hover:text-white transition-colors">
            Upload Media
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <p className="text-xs">Image / Video · Max 10MB</p>
          {mediaFile && (
            <p className="text-xs uppercase">
              Selected: {mediaFile.name}
            </p>
          )}
        </div>

        {mediaPreview && (
          <div className="border-2 border-black p-2">
            {mediaFile.type.startsWith("image/") ? (
              <img
                src={mediaPreview}
                alt="preview"
                className="w-full max-h-64 object-cover"
              />
            ) : (
              <video
                src={mediaPreview}
                controls
                className="w-full max-h-64 object-cover"
              />
            )}
          </div>
        )}

        <div>
          <label className="text-xs uppercase tracking-wider">
            Visibility
          </label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="w-full border-2 border-black p-2 mt-1 text-sm"
          >
            <option>Public</option>
            <option>Community</option>
            <option>Friends</option>
            <option>Private</option>
          </select>
        </div>

        {warning && (
          <div className="border-2 border-black p-2 text-xs">
            ⚠ {warning}
          </div>
        )}

        <button
          type="submit"
          className="w-full border-2 border-black py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
        >
          Post
        </button>
      </form>
    </div>
  );
}
