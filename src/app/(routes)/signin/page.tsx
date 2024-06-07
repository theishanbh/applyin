import React from "react";
import Head from "next/head";
import SignInButton from "@/components/SignInButton";

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <SignInButton />
      </div>
    </div>
  );
};

export default SignInPage;
