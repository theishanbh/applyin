import mongoose, { model, models } from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    authorId: String,
    author: String,
    title: String,
    content: String,
    versions: [{ version_number: Number, content: String }],
    tags: [String],
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
