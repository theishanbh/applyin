"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Settings from "@/components/Settings";
import { UserSettings } from "../../../types";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const { data, status } = useSession();

  const user = data?.user;
  // console.log(user);
  const [settings, setSettings] = useState({
    username: user?.username,
    email: user?.email,
    name: user?.name,
  });
  // console.log(user);

  // useEffect(() => {});
  // function updateUser() {
  //   fetch("http://localhost:3000/api/posts/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // axios.get("http://localhost:3000/api/user/update").then(({ data }) => {
  //   console.log("url : " + url);
  //   console.log(data);
  //   setUser(data);
  // });
  // function getPosts(id: string) {
  //   fetch("http://localhost:3000/api/posts/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: id }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setBlogs(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     updateUser();
  //   }
  // }, []);

  return (
    <div>
      <Head>
        <title>User Settings</title>
        <meta name="description" content="User settings page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="wrapper">
        <Settings initialSettings={settings} />
      </main>
    </div>
  );
};

export default SettingsPage;
