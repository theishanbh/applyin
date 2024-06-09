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
  const blog = await request.json();
}
