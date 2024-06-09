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

  // const getUser = async () => {
  //   try {
  //     const response = await fetch(url, {
  //       method: "GET",
  //     });
  //     if (response) {
  //       const user = await response.json();
  //       console.log(user);
  //       setUser(user);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);
  // const user = {
  //   name: "John Doe",
  //   username: "johndoe",
  //   email: "john.doe@example.com",
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   profilePicture: "https://via.placeholder.com/150",
  //   joinDate: "2023-01-15",
  // };

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

  return (
    <main>
      <Navbar></Navbar>
      <main className="wrapper ">
        <UserProfile user={user} />
        <BlogList posts={blogs} />
      </main>
    </main>
  );
}
