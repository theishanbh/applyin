import { connectDB } from "@/db/client";
import Blog from "@/models/blog";

export async function GET(params: { slug: string }) {
  await connectDB();
  const posts = await Blog.findById(params.slug);
  //   console.log(posts);
  return Response.json(posts);
}
