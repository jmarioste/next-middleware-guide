import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextMiddlewareResult } from "next/dist/server/web/types";
import { NextRequest, NextResponse } from "next/server";

const _requiresLogin = ["/admin"];
export default async function withCustomAuth(
  request: NextRequest,
  requiresLogin: string[] = _requiresLogin
) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (requiresLogin.some((path) => pathname.startsWith(path))) {
    try {
      const result = (await withAuth(request as NextRequestWithAuth, {
        callbacks: {
          authorized: ({ token }) => {
            const isAdmin = token?.role === "admin";
            if (!token) {
              throw new Error("401");
            }
            if (!isAdmin) {
              throw Error("403");
            }
            return isAdmin;
          },
        },
      })) as NextMiddlewareResult;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "403") {
          const url = new URL("/403", request.url);
          return NextResponse.rewrite(url);
        }

        if (error.message === "401") {
          const url = new URL("/signin", request.url);
          url.searchParams.set("callbackUrl", encodeURI(request.url));
          return NextResponse.redirect(url);
        }
      }
    }
  }

  return res;
}
