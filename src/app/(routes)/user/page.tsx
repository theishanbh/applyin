"use client";

import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";
import UserProfile from "@/components/UserProfile";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    profile: "./user.jpg",
    joinDate: new Date("2024-06-07T12:11:05.250Z"),
  });
  const [blogs, setBlogs] = useState([]);

  const { data, status } = useSession();
  const id = data?.user._id;
  const x = "http://localhost:3000/api/user/" + id;
  function getUser(url: string) {
    axios.get(url).then(({ data }) => {
      console.log("url : " + url);
      console.log(data);
      setUser(data);
    });
  }

  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(`/api/posts/${postId}`).then(() => {
        getPosts(id as string);
      });
      // Optionally, you could add logic to update the UI after deletion
      alert("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  function getPosts(id: string) {
    fetch("http://localhost:3000/api/posts/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (status === "authenticated") {
      getUser(x);
      getPosts(id as string);
    }
  }, [status, x, id]);

  return (
    <main>
      <Navbar></Navbar>
      <main className="wrapper ">
        <UserProfile user={user} />
        <BlogList
          posts={blogs}
          user={data?.user._id as string}
          handleDelete={handleDelete}
        />
      </main>
    </main>
  );
}
