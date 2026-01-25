import { useState } from "react";
import { FRIENDS } from "../data/friends";

export default function Messages() {
  const [activeFriend, setActiveFriend] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState({});

  function sendMessage() {
    if (!message.trim()) return;

    setChats((prev) => ({
      ...prev,
      [activeFriend.id]: [
        ...(prev[activeFriend.id] || []),
        { from: "me", text: message },
      ],
    }));

    setMessage("");
  }

  return (
    <div className="min-h-screen flex bg-white text-black">
      {/* FRIEND LIST */}
      <aside className="w-64 border-r-2 border-black p-4">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-4">
          Messages
        </h2>

        <div className="space-y-2">
          {FRIENDS.map((friend) => (
            <div
              key={friend.id}
              onClick={() => setActiveFriend(friend)}
              className={`cursor-pointer border-2 border-black p-3 ${
                activeFriend?.id === friend.id
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              <p className="font-bold">{friend.name}</p>
              <p className="text-xs uppercase">{friend.handle}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* CHAT AREA */}
      <main className="flex-1 p-6 flex flex-col">
        {!activeFriend ? (
          <p className="text-sm uppercase tracking-widest">
            Select a friend to start chatting
          </p>
        ) : (
          <>
            {/* HEADER */}
            <div className="border-b-2 border-black pb-2 mb-4">
              <h3 className="font-bold">
                {activeFriend.name}{" "}
                <span className="text-sm font-normal">
                  {activeFriend.handle}
                </span>
              </h3>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 space-y-2 overflow-y-auto mb-4">
              {(chats[activeFriend.id] || []).map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-xs border-2 border-black p-2 text-sm ${
                    msg.from === "me"
                      ? "ml-auto bg-black text-white"
                      : ""
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message…"
                className="flex-1 border-2 border-black p-2 text-sm"
              />
              <button
                onClick={sendMessage}
                className="border-2 border-black px-4 uppercase text-sm hover:bg-black hover:text-white transition-colors"
              >
                Send
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
