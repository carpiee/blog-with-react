import React, { useState, useEffect } from "react";
import db from "./firebase";
import Blog from "./Blog";
import Post from "./Post";
import Header from "./Header";
import Create from "./Create";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection("posts")
      .orderBy("dateFormatted", "desc")
      .onSnapshot(
        (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())),
        setLoading(false),
      );

    return () => {
      unsubscribe();
    };
  }, [posts]);

  return (
    <Router>
      <Header />
      <main className="px-4 py-2 w-full container mx-auto max-w-3xl">
        {loading ? (
          <div className="mt-20 flex justify-center">
            <h1 className="text-3xl font-semibold">Loading...</h1>
          </div>
        ) : (
          ""
        )}

        <Switch>
          <Route path="/post/:slug">
            <Post />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <div className="divide-y">
              {posts.map(({ preview, datum, context, img, title, slug }) => (
                <Blog
                  datum={datum}
                  title={title}
                  slug={slug}
                  img={img}
                  preview={preview}
                  key={title}
                />
              ))}
            </div>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
