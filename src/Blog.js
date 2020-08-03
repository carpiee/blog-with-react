import React from "react";
import { Link } from "react-router-dom";

function Blog({ preview, datum, img, title }) {
  return (
    <article className="py-12 md:flex md:items-start">
      <div className="w-64">
        <p className="font-semibold text-gray-600">{datum}</p>
      </div>
      <div>
        <Link
          className="text-teal-500"
          to={"/post/" + title.split(" ").join("-")}>
          <h1 className="mb-4 font-bold tracking-tight text-2xl text-gray-900">
            {title}
          </h1>
        </Link>
        <p className="text-gray-600">{preview}</p>
        <Link
          className="text-teal-500"
          to={"/post/" + title.split(" ").join("-")}>
          <p className="mt-4">Lees meer→</p>
        </Link>
      </div>
    </article>
  );
}
export default Blog;
