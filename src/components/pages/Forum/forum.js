import React from "react";
import Footer from "../../Footer";
import "./post.css";
import PostManager from "./PostManager.js";

function Forum() {
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
      <PostManager />
      <Footer />
    </>
  );
}

export default Forum;
