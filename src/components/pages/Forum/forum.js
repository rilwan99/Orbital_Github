import React, { useState, useEffect } from "react";
import Footer from "../../Footer";
import "./post.css";
import PostManager from "./PostManager.js";
import Search from "./search";
import Post from "./post";
import { firebase } from "@firebase/app";

function Forum() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    let posts = [];
    db.collection("forumpost")
      .limit(5)
      .get()
      .then((querySnapshot) => {
        console.log("checking database...");
        if (querySnapshot.empty) {
          return <p>No results found.</p>;
        }
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          posts.push(doc.data());
        });
        setLoadedPosts(posts);
      });
  };

  return (
    <>
      <div className="forum">
        <h1 className="forumHeader">Forum</h1>
        <p className="forum-text">
          This forum is a platform for you to engage with pthers and ask
          questions which you would like to clarify. The investmentGuru
          community will be happy to answer your questions.
        </p>
      </div>
      <Search />
      <div>
        {loadedPosts.map((post) => (
          <Post
            title={post.title}
            text={post.text}
            name={post.name}
            time={post.time}
          />
        ))}
      </div>
      <PostManager />
      <Footer />
    </>
  );
}

export default Forum;
