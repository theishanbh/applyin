"use client";

import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Navbar from "@/components/Navbar";
import { getSession, useSession } from "next-auth/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Create = () => {
  const { data } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [isValid, setIsValid] = useState(false);

  const addTag = (evt: any) => {
    console.log("hello");
    const tag = evt.target.value;
    if (evt.code === "Enter" && tag !== "") {
      setTags([...tags, tag]);
      evt.target.value = "";
      let isInputValid = isValid;
      if (tag !== "") {
        setIsValid(true);
        isInputValid = true;
      } else {
        setIsValid(false);
        isInputValid = false;
      }
    }
  };

  const removeTag = (indexToRemove: number) => {
    const removedTag = tags[indexToRemove];
    const updatedTags = tags.filter((tag) => tag !== removedTag);
    setTags(updatedTags);
    // props.onChange("tags", updatedTags, true);
  };

  const addCategory = (evt: any) => {
    console.log("hello");
    const category = evt.target.value;
    if (evt.code === "Enter" && category !== "") {
      setCategories([...categories, category]);
      evt.target.value = "";
      let isInputValid = isValid;
      if (category !== "") {
        setIsValid(true);
        isInputValid = true;
      } else {
        setIsValid(false);
        isInputValid = false;
      }
      // props.onChange("tags", [...tags, tag], isInputValid);
    }
  };

  const removeCategory = (indexToRemove: number) => {
    const removedCategory = categories[indexToRemove];
    const updatedCategories = categories.filter(
      (category) => category !== removedCategory
    );
    setTags(updatedCategories);
    // props.onChange("tags", updatedTags, true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/posts", {
        authorId: data?.user._id,
        author: data?.user.name,
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
            <div className="mb-4 mt-12">
              <h4>Tags</h4>
              <div className="tags__input">
                <ul className="input__list">
                  {tags &&
                    tags.map((tag, index) => (
                      <li className="input__item flex" key={index}>
                        <span>#{tag}</span>
                        <i className="input__remove">
                          <p onClick={() => removeTag(index)}>x</p>
                        </i>
                      </li>
                    ))}
                </ul>
                <input
                  type="text"
                  placeholder="Press enter to add tags"
                  onKeyUp={addTag}
                  disabled={tags.length == 4 ? true : false}
                />
              </div>
              <div className="mb-4 mt-8">
                <h4>Categories</h4>
                <div className="tags__input">
                  <ul className="input__list">
                    {categories &&
                      categories.map((category, index) => (
                        <li className="input__item flex" key={index}>
                          <span>{category}</span>
                          <i className="input__remove">
                            <p onClick={() => removeCategory(index)}>x</p>
                          </i>
                        </li>
                      ))}
                  </ul>
                  <input
                    type="text"
                    placeholder="Press enter to add category"
                    onKeyUp={addCategory}
                    disabled={categories.length == 4 ? true : false}
                  />
                </div>
              </div>
            </div>
            {/* <div className="mb-4">
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
            </div> */}
            {/* <div className="mb-4">
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
            </div> */}
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
