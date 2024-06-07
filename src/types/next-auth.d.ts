import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: String;
    email?: String;
    name?: String;
    image?: String;
  }

  interface Session {
    user: {
      _id?: String;
      email?: String;
      name?: String;
      image?: String;
    } & DefaultSession["user"];
  }
}
