"use client";

import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [categories, setCategories] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/blogs", {
        title,
        content,
        tags,
        categories,
      });

      console.log("Blog post created:", response.data);
    } catch (error: any) {
      console.error("Error creating blog post:", error.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Create Blog Post
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <ReactQuill
                value={content}
                onChange={setContent}
                className="h-40"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Comma separated"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="categories"
                className="block text-sm font-medium text-gray-700"
              >
                Categories
              </label>
              <input
                type="text"
                id="categories"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Comma separated"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Blog Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
