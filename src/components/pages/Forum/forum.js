import React from "react";
import Footer from "../../Footer";
import Post from "./post.js";
import "./post.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";

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
        <div className="button-div">
          <Link to="/new-post">Add new Post</Link>
        </div>
        // Onclick function to add new post // Create a form to input the post
        // Send the data to firebase and update the datastorre // Retrive post
        from the dataStore - UseState && useEffect
        <Post
          title="Post Title"
          description="Post description -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel neque vel tortor suscipit consectetur. Pellentesque efficitur est velit, id mollis lorem laoreet nec. Nam vel ullamcorper sapien. Sed sit amet dignissim nibh. Nam dignissim varius quam sed condimentum. Morbi eleifend enim a ante euismod malesuada. In eget convallis risus. Integer sed enim at ipsum mollis tincidunt a luctus mi."
          author="Author: Jonathan"
          dateTime="Date and time: 24th May 1530hrs"
        />
      </div>
      <Footer />
    </>
  );
}

export default Forum;
