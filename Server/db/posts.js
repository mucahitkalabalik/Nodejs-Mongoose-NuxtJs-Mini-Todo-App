import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  created_at: {
       type: Date, required: true, default: Date.now 
  },
});

const Post = mongoose.model("post", postsSchema);

export default Post;
