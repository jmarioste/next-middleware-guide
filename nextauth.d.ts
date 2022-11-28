import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  }
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface DefaultJWT {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  }
}

export {};
