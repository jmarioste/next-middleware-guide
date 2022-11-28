import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import users from "data/users.json";
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error(
    "please provide process.env.NEXTAUTH_SECRET environment variable"
  );
}

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await NextAuth(req, res, {
    providers: [
      //TODO: Create signIn mutation
      CredentialsProvider({
        name: "Credentials",
        id: "credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const user = users.find((user) => {
            return (
              credentials?.email === user.email &&
              credentials.password === user.password
            );
          });

          if (!user) {
            throw new Error("Invalid email or password");
          }
          return user;
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/signin",
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.role = user.role;
        }
        return token;
      },
      session({ session, token }) {
        console.log("session", session);
        if (token && session.user) {
          session.user.role = token.role;
        }
        return session;
      },
    },
  });
}
