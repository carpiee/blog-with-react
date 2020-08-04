import React, { userState, useEffect } from "react";
import db from "./firebase";
const Create = () => {
  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [image, setImageURL] = React.useState("");
  const [preview, setPreview] = React.useState("");
  const [context, setContext] = React.useState("");

  const generate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };

    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    let day = now.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return {
      formatted: `${year}-${month}-${day}`,
      pretty: now.toLocaleDateString("en-US", options),
    };
  };
  const createPost = () => {
    const date = generate();
    const newPost = {
      title,
      slug,
      dateFormatted: date.formatted,
      datum: date.pretty,
      preview,
      image,
      context,
    };
    db.firestore()
      .collection("posts")
      .add(newPost)
      .then(() => {
        window.location.href = "/post/" + slug;
      });
  };
  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold text-center">
        Create a blog post
      </h1>
      <div className="space-y-4 flex flex-col">
        <input
          className="px-4 py-2 border rounded"
          type="title"
          placeholder="Title"
          onChange={({ target: { value } }) => {
            setTitle(value);
            setSlug(
              value
                .split(" ")
                .join("-")
                .split("?")
                .join("")
                .split("&")
                .join(""),
            );
          }}
        />
        <input
          className="px-4 py-2 border rounded"
          type="slug"
          placeholder="Slug"
          value={slug}
          disabled
        />
        <input
          className="px-4 py-2 border rounded"
          type="text"
          placeholder="Img URL"
          onChange={({ target: { value } }) => {
            setImageURL(value);
          }}
        />
        <input
          className="px-4 py-2 border rounded"
          type="preview"
          placeholder="Preview"
          onChange={({ target: { value } }) => {
            setPreview(value);
          }}
        />
        <textarea
          className="px-4 py-2 border rounded"
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => {
            setContext(value);
          }}></textarea>
        <button className="px-4 py-2 border rounded" onClick={createPost}>
          Create post
        </button>
      </div>
    </div>
  );
};

export default Create;
