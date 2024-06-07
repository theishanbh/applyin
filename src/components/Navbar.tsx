"use client";

import Link from "next/link";
import ProfileDropdown from "./ProfileDropDown";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">
            <Link href="/">
              <p className="text-gray-800">MyBlog</p>
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <Link href="/posts">
              <p className="text-gray-800 hover:text-blue-500">Create</p>
            </Link>
            {status !== "authenticated" ? (
              <Link href="/signin">
                <p className="text-gray-800 hover:text-blue-500">Login</p>
              </Link>
            ) : (
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ProfileDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
