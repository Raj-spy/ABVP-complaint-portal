import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFeedStore } from "../context/FeedContext";

 const POSTS = [
  {
    id: 1,
    initials: "MC",
    name: "Maya Chen",
    handle: "@mayachen",
    text: "Just finished a 2-hour deep work session without any notifications. The silence was productive.",
    tag: "Productivity",
    time: "2h ago",
    likes: 127,
    comments: 23,
    media: [],
  },
  {
    id: 2,
    initials: "AR",
    name: "Alex Rivera",
    handle: "@alexr",
    text: "Spent the morning offline. Here’s what calm looks like.",
    tag: "Mindfulness",
    time: "3h ago",
    likes: 89,
    comments: 12,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      },
    ],
  },
  {
    id: 3,
    initials: "JP",
    name: "Jordan Park",
    handle: "@jordanp",
    text: "A short clip from my no-phone evening walk.",
    tag: "Creativity",
    time: "4h ago",
    likes: 245,
    comments: 45,
    media: [
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
  {
    id: 4,
    initials: "NK",
    name: "Neha Kapoor",
    handle: "@nehak",
    text: "Today’s desk. No notifications, just one task.",
    tag: "Deep Work",
    time: "5h ago",
    likes: 312,
    comments: 38,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
    ],
  },
  {
    id: 5,
    initials: "RS",
    name: "Rohan Shah",
    handle: "@rohans",
    text: "Replaced scrolling with a long walk. Brain feels lighter.",
    tag: "Wellbeing",
    time: "6h ago",
    likes: 198,
    comments: 19,
    media: [],
  },
  {
    id: 6,
    initials: "AM",
    name: "Aditi Mehra",
    handle: "@aditimehra",
    text: "Captured this while journaling in silence.",
    tag: "Reflection",
    time: "7h ago",
    likes: 154,
    comments: 14,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
      },
    ],
  },
  {
    id: 7,
    initials: "DV",
    name: "Dev Verma",
    handle: "@devv",
    text: "Trying a 24-hour no social experiment. Logging thoughts instead.",
    tag: "Digital Detox",
    time: "8h ago",
    likes: 401,
    comments: 62,
    media: [],
  },
  {
    id: 8,
    initials: "LS",
    name: "Lina Stone",
    handle: "@linas",
    text: "A quiet moment from today. Nothing to explain.",
    tag: "Stillness",
    time: "9h ago",
    likes: 267,
    comments: 21,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
      },
    ],
  },
  {
    id: 9,
    initials: "TK",
    name: "Tanishq Kumar",
    handle: "@tanishqk",
    text: "This is the only video I recorded today. One take, no edits.",
    tag: "Minimal Video",
    time: "10h ago",
    likes: 178,
    comments: 17,
    media: [
      {
        type: "video",
        url: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
  {
    id: 10,
    initials: "SP",
    name: "Sara Patel",
    handle: "@sarap",
    text: "Evenings without screens feel longer. In a good way.",
    tag: "Life",
    time: "11h ago",
    likes: 522,
    comments: 74,
    media: [],
  },
];


 export default function Feed() {
  const navigate = useNavigate();
  const { posts } = useFeedStore(); // 🔥 context se new posts
  const allPosts = [...posts, ...POSTS];

  const [openComment, setOpenComment] = useState(null);
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-screen flex bg-white text-black">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 border-r-2 border-black p-4 flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <h1 className="text-xl font-bold uppercase">Pause</h1>
            <p className="text-xs uppercase tracking-widest">Public Mode</p>
          </div>

          <div className="space-y-3 text-sm uppercase tracking-wider">
            <p className="font-bold">Trending</p>
            <p>Interests</p>
            <p>Friends</p>
             <p
  className="cursor-pointer hover:underline"
  onClick={() => navigate("/messages")}
>
  Messages
</p>

          </div>

          <div>
            <p className="text-xs uppercase mb-1">Daily Budget</p>
            <div className="border-2 border-black h-2 w-full" />
            <p className="text-xs mt-1">10 / 10 reels</p>
          </div>
        </div>

        <div className="border-2 border-black p-3 text-center text-sm">
          GO PREMIUM <br /> ₹30 / month
        </div>
      </aside>

      {/* MAIN FEED */}
      <main className="flex-1 p-6">
        <h2 className="text-lg font-bold uppercase tracking-widest mb-6">
          Trending
        </h2>

        <div className="space-y-6 max-w-3xl">
          {allPosts.map((post) => (
            <div key={post.id} className="border-2 border-black p-4">
              {/* HEADER */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold">
                  {post.initials}
                </div>

                <div className="flex-1">
                  <p className="font-bold">
                    {post.name}{" "}
                    <span className="font-normal text-sm">
                      {post.handle}
                    </span>
                  </p>

                  <p className="mt-1">{post.text}</p>

                  <div className="flex gap-3 mt-2 text-xs uppercase">
                    {/* TAG → COMMUNITIES REDIRECT */}
                    <button
                      onClick={() =>
                        navigate(
                          `/communities?interest=${encodeURIComponent(
                            post.tag
                          )}`
                        )
                      }
                      className="border-2 border-black px-2 py-0.5 hover:bg-black hover:text-white transition-colors"
                    >
                      {post.tag}
                    </button>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>

               {post.media.length > 0 && (
  <div className="mt-4 flex justify-center">
    <div className="w-full sm:max-w-[520px] border-2 border-black bg-white">
      {post.media.map((m, i) =>
        m.type === "image" ? (
          <img
            key={i}
            src={m.url}
            alt=""
            className="
              w-full
              h-auto
              max-h-[70vh]
              object-contain
              bg-white
            "
          />
        ) : (
          <video
            key={i}
            src={m.url}
            controls
            className="
              w-full
              h-auto
              max-h-[70vh]
              object-contain
              bg-white
            "
          />
        )
      )}
    </div>
  </div>
)}


              {/* ACTIONS */}
              <div className="flex justify-between items-center mt-4 text-sm">
                <div className="flex gap-4">
                  <span>♡ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>

                <button
                  className="border-2 border-black px-4 py-1 uppercase"
                  onClick={() =>
                    setOpenComment(
                      openComment === post.id ? null : post.id
                    )
                  }
                >
                  Watch
                </button>
              </div>

              {/* COMMENT FORM */}
              {openComment === post.id && (
                <div className="mt-4 border-t-2 border-black pt-3">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a thoughtful comment…"
                    className="w-full border-2 border-black p-2 text-sm"
                  />
                  <button
                    className="mt-2 border-2 border-black px-4 py-1 text-sm uppercase"
                    onClick={() => {
                      setComment("");
                      setOpenComment(null);
                    }}
                  >
                    Post Comment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-10 uppercase">
          10 more reels available today
        </p>
      </main>
    </div>
  );
}