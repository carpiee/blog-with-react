import React, { useState, useEffect } from "react";
import db from "./firebase";
import { useParams } from "react-router-dom";

const Post = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = React.useState([]);
  const { slug } = useParams();
  useEffect(() => {
    db.firestore()
      .collection("posts")
      .where("slug", "==", slug)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          setPost(doc.data());
          setLoading(false);
        });
      })
      .catch(function (error) {});
  }, [post]);

  if (loading) {
    return (
      <div className="fixed inset-0 h-screen flex justify-center items-center">
        <h1 className="text-3xl font-semibold">Loading...</h1>{" "}
      </div>
    );
  }

  return (
    <article className="flex flex-col justify-center">
      <p className="mt-4 font-semibold text-center text-gray-600">
        {post.datum}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-wider text-center text-gray-900">
        {post.title}
      </h1>
      <div
        id="markdown"
        className="space-y-4 block text-md leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.context }}></div>
    </article>
  );
};

export default Post;
