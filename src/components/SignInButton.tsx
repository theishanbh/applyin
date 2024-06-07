"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      <svg
        className="w-6 h-6 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.3 0 5.9 1.1 8 3.3l5.9-5.9C34.6 3.7 29.6 1.5 24 1.5c-7.2 0-13.4 4.1-16.5 10.2l6.8 5.3C15.9 12.3 19.7 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M48 24c0-1.5-.1-2.9-.4-4.3H24v8.3h13.5c-.6 3.3-2.4 6-5.1 7.9l6.8 5.3c4.1-3.8 6.8-9.4 6.8-16.2z"
        />
        <path
          fill="#FBBC05"
          d="M7.5 14.7l6.8 5.3c1.9-3.5 5.2-6.3 9.2-7.8V4.4C16.7 6.1 10.4 10.2 7.5 14.7z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.2 0 11.4-2.1 15.2-5.6l-6.8-5.3c-2.4 1.6-5.5 2.5-8.4 2.5-6.5 0-12-4.3-14-10.2H2.4v6.4C6.4 43.1 14.5 48 24 48z"
        />
      </svg>
      Sign in with Google
    </button>
  );
};

export default SignInButton;
