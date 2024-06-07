import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    email?: string;
    name?: string;
    image?: string;
  }

  interface Session {
    user: {
      _id?: string;
      email?: string;
      name?: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface Profile {
    email?: string;
    name: string;
    picture?: string;
  }
}
