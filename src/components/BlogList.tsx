import React from "react";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  tags: string[];
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <div className="flex justify-between items-center text-gray-500 mb-4">
              <p>By {post.author}</p>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </div>
            <p className="text-gray-700 mb-4">{post.summary}</p>
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
        </div>
      ))}
    </div>
  );
};

export default BlogList;
