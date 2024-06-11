import Navbar from "@/components/Navbar";
import React from "react";

const blogData = {
  authorId: "12345",
  author: "John Doe",
  title: "My Awesome Blog Post",
  content:
    "This is the content of the blog post. It can be a long text describing various aspects of the topic in detail.",
  tags: ["React", "Next.js", "TailwindCSS"],
  categories: ["Web Development", "Programming"],
};

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="min-h-screen bg-gray-100 flex flex-col sm:py-12">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl ">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">{blogData.title}</h1>
                <p className="mt-3 text-gray-500">by {blogData.author}</p>
              </div>
              <div className="mt-6">
                <p className="text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  {blogData.content}
                </p>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">Tags</h2>
                <ul className="list-disc list-inside mt-2">
                  {blogData.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">Categories</h2>
                <ul className="list-disc list-inside mt-2">
                  {blogData.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
