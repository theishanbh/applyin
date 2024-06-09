import { connectDB } from "@/db/client";
import User from "@/models/user";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user._id = sessionUser._id;
      session.user.username = sessionUser.username;
      session.user.email = sessionUser.email;
      session.user.name = sessionUser.name;
      session.user.profile = sessionUser.profile;
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectDB();
        const userExist = await User.findOne({ email: profile?.email });
        if (!userExist) {
          const str = profile?.email?.split("@")[0];
          const user = await User.create({
            email: profile?.email,
            username: str,
            name: profile?.name,
            profile: profile?.picture,
          });
          console.log(user);
        }
        console.log(profile);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
