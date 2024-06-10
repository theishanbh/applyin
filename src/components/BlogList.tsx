import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React from "react";

interface BlogPost {
  _id: string;
  authorId: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  categories: string[];
}

interface BlogListProps {
  posts: BlogPost[];
  user: string;
  handleDelete: Function;
}

const BlogList: React.FC<BlogListProps> = ({ posts, user, handleDelete }) => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      {posts.toReversed().map((post) => (
        <div
          key={post.authorId}
          className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
        >
          <Link href={"/posts/" + post._id}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="flex justify-between items-center text-gray-500 mb-4">
                <p>By {post.author}</p>
                <p>{moment(post.date).format("YYYY-MM-DD")}</p>
              </div>
              <div className="mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
          {user === post.authorId && (
            <div className="flex justify-end p-4">
              <Link href={`/edit/${post._id}`}>
                <button className="mr-2 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(post._id)}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
