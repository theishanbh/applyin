"use client";

import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";
import { connectDB } from "@/db/client";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const blogPosts = [
    {
      id: "1",
      title: "My First Blog Post",
      summary: "This is a summary of the first blog post.",
      author: "John Doe",
      date: "2023-06-05",
      tags: ["JavaScript", "React", "Next.js"],
    },
    {
      id: "2",
      title: "Learning Tailwind CSS",
      summary: "This is a summary of the blog post about Tailwind CSS.",
      author: "Jane Smith",
      date: "2023-06-10",
      tags: ["CSS", "Tailwind", "Styling"],
    },
    // Add more blog posts as needed
  ];

  const db = connectDB();

  // const [logged, setLogged] = useState(false);

  // const { data: session, status } = useSession();
  // console.log(session, status);
  // if (status === "authenticated") {
  //   setLogged(true);
  // }

  return (
    <main>
      <Navbar></Navbar>
      <BlogList posts={blogPosts} />
    </main>
  );
}
