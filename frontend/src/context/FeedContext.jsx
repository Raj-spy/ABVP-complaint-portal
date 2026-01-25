import { createContext, useContext, useEffect, useState } from "react";

const FeedContext = createContext();

const INITIAL_POSTS = [];

export function FeedProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function addPost(post) {
    setPosts((prev) => [post, ...prev]);
  }

  return (
    <FeedContext.Provider value={{ posts, addPost }}>
      {children}
    </FeedContext.Provider>
  );
}

export function useFeedStore() {
  return useContext(FeedContext);
}
