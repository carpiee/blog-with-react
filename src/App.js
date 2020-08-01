import React, { useState, useEffect } from "react";
import "./tailwind.css";
import db from "./firebase";
import Blog from "./Blog";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data())),
    );
  }, [posts]);
  return (
    <div className="App">
      <nav className="px-4 py-2 container mx-auto max-w-screen-lg bg-gray-300">
        <a href="/">Blog Remco smits</a>
      </nav>
      <main className="px-4 py-2 container mx-auto max-w-screen-lg">
        <Router>
          <Switch>
            <Route path="/post/:title">
              <Post />
            </Route>
            <Route path="/">
              {posts.map(({ context, id, img, title }) => (
                <Link context={context} to={"/post/" + title} key={id}>
                  <Blog id={id} title={title} img={img} context={context} />
                </Link>
              ))}
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
