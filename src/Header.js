import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="container mx-auto max-w-3xl">
      <div className="mx-4 space-y-2 border-b">
        <div className="flex justify-between items-baseline">
          <Link
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            to="/">
            Blog
          </Link>
          <Link className="font-semibold text-sm" to="/create">
            Create a post
          </Link>
        </div>
        <p className="pb-6 text-lg text-gray-600">
          Blog made with React JS and firesbase (firestore)
        </p>
      </div>
    </nav>
  );
}
export default Header;
