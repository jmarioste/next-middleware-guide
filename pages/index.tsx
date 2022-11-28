import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HomePage: NextPage = () => {
  const { data } = useSession();
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Welcome to NextJS DaisyUI Starter</h1>
          <Link className="btn " href="/admin">
            Go to Admin
          </Link>

          {!!data?.user ? (
            <>
              <h2>You are logged in as {data?.user?.email} </h2>

              <button className="btn" onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <Link className="btn btn-outline" href="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
