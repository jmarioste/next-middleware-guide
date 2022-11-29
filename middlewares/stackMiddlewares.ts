import { NextMiddleware, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";

export function stackMiddleware(
  functions: MiddlewareFactory[],
  index = 0
): NextMiddleware {
  const current = functions[index];
  if (index === functions.length) {
    return () => NextResponse.next();
  } else {
    const next = stackMiddleware(functions, index + 1);
    return current(next);
  }
}
