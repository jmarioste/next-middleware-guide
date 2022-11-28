import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
const DashboardPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Admin</h1>

          <Link className="btn btn-primary" href="/">
            Go to Index Page
          </Link>
          <button
            className="btn btn-accent btn-outline"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
