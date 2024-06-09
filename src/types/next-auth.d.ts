import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    username?: string;
    email?: string;
    name?: string;
    profile?: string;
  }

  interface Session {
    user: {
      _id?: string;
      username?: string;
      email?: string;
      name?: string;
      profile?: string;
    } & DefaultSession["user"];
  }

  interface Profile {
    email?: string;
    name: string;
    picture?: string;
  }
}
