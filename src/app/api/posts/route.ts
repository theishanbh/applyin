// import { getAuthSession } from "@/utils/auth";
// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

import { connectDB } from "@/db/client";
import Blog from "@/models/blog";

// gets all blog posts
export async function GET() {
  await connectDB();
  const posts = await Blog.find({});
  return Response.json(posts);
}

// INSERT BLOG POST
export async function POST(request: Request) {
  await connectDB();
  const data = await request.json();
  console.log(data);
  const post = await Blog.create({
    authorId: data?.authorId,
    author: data?.author,
    title: data.title,
    versions: data.content,
    tags: data.tags,
    categories: data.categories,
  });
  console.log(post);
  return new Response(JSON.stringify(post), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
