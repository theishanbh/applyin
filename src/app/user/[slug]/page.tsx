import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";
import UserProfile from "@/components/UserProfile";

export default function Profile() {
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePicture: "https://via.placeholder.com/150",
    joinDate: "2023-01-15",
  };

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
        <BlogList posts={blogPosts} />
      </main>
    </main>
  );
}
