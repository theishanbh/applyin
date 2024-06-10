import mongoose, { model, models } from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    authorId: String,
    author: String,
    title: String,
    versions: [String],
    tags: [String],
    categories: [String],
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
