import Post from "../models/Post.js";

// CREATE POST (save to DB)
export const createPost = async (req, res) => {
  try {
    const postData = req.body;   // 👈 yahi tumhara newPost aata hai

    const post = await Post.create(postData);

    res.status(201).json({
      message: "Post saved to database",
      post
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL POSTS (send to React feed)
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
