"use client";

import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";
import { connectDB } from "@/db/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const { data } = useSession();
  console.log(data);

  const getAllPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts/", {
        method: "GET",
      });
      if (response) {
        const post = await response.json();
        setBlogs(post);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  // const db = connectDB();

  return (
    <main>
      <Navbar></Navbar>
      <BlogList posts={blogs} />
    </main>
  );
}
