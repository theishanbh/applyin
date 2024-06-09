// import { getAuthSession } from "@/utils/auth";
// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

import { connectDB } from "@/db/client";
import Blog from "@/models/blog";
import User from "@/models/user";

// INSERT BLOG POST
export async function POST(request: Request) {
  const data = await request.json();
  const sessionUser = await User.findOneAndUpdate(
    {
      email: data.email,
    },
    {
      name: data.name,
      email: data.email,
      username: data.username,
    }
  );
  const x = User.findOne({ email: data.email });
  console.log("sessionuser : " + sessionUser);
  console.log("x : " + x);
  return Response.json(data);
}
