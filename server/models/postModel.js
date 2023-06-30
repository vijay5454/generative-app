import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
  name: { type: String, require: true },
  prompt: { type: String, require: true },
  photo: { type: String, require: true },
});

const PostSchema = mongoose.model("Post", PostModel);

export default PostSchema;
