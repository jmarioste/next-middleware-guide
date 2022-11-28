import withAuthorization from "middlewares/withAuthorization";
import { NextMiddleware, NextResponse } from "next/server";

const mainMiddleware: NextMiddleware = (request) => {
  const res = NextResponse.next();
  //other middleware operations
  return res;
};

export default withAuthorization(mainMiddleware, ["/admin"]);
