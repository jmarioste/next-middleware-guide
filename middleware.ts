import { withHeaders } from "middlewares/withHeaders";
import { withLogging } from "middlewares/withLogging";
import { NextResponse } from "next/server";

export function defaultMiddleware() {
  return NextResponse.next();
}

export default withLogging(withHeaders(defaultMiddleware));
