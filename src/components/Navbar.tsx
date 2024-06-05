"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">
            <Link href="/">
              <p className="text-gray-800">MyBlog</p>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <p className="text-gray-800 hover:text-blue-500">Home</p>
            </Link>
            <Link href="/posts">
              <p className="text-gray-800 hover:text-blue-500">Create</p>
            </Link>
            <Link href="/profile">
              <p className="text-gray-800 hover:text-blue-500">Profile</p>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <Link href="/">
              <p className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200">
                Home
              </p>
            </Link>
            <Link href="/posts">
              <p className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200">
                Create
              </p>
            </Link>
            <Link href="/profile">
              <p className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200">
                Profile
              </p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
