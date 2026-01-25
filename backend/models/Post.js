import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  type: String,   // image / video
  url: String
});

const postSchema = new mongoose.Schema({
  initials: String,
  name: String,
  handle: String,
  text: String,
  tag: String,
  time: String,
  likes: Number,
  comments: Number,
  media: [mediaSchema]
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;
