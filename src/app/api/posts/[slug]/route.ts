import { connectDB } from "@/db/client";
import Blog from "@/models/blog";
import { NextRequest } from "next/server";

// getinfo
export async function GET(params: { slug: string }) {
  await connectDB();
  const posts = await Blog.findById(params.slug);
  //   console.log(posts);
  return Response.json(posts);
}
// delete

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();
  console.log(params);
  const posts = await Blog.deleteOne({ _id: params.slug });
  console.log(posts);
  return Response.json(posts);
}
