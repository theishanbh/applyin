import React from "react";
import Head from "next/head";
import Settings from "@/components/Settings";
import { UserSettings } from "@/types";
import Navbar from "@/components/Navbar";

const SettingsPage = () => {
  const initialSettings: UserSettings = {
    username: "johndoe",
    email: "john.doe@example.com",
    notifications: true,
    theme: "light",
  };

  return (
    <div>
      <Head>
        <title>User Settings</title>
        <meta name="description" content="User settings page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="wrapper">
        <Settings initialSettings={initialSettings} />
      </main>
    </div>
  );
};

export default SettingsPage;
