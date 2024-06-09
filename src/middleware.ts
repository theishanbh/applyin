import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log(request);
  // const session = await getServerSession();
  // if (request.url === "http://localhost:3000/create" && session) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/create"],
};
