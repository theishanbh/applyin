import { connectDB } from "@/db/client";
import Blog from "@/models/blog";
import { NextRequest } from "next/server";

// gets all blog posts by user
export async function POST(request: Request) {
  console.log("THIS IS THE BODY \n\n");
  const data = await request.json();
  const authorId = data.userId;
  const posts = await Blog.find({ authorId });
  console.log(data);
  return new Response(JSON.stringify(posts), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
