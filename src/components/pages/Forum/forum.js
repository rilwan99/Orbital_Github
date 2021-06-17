import React from "react";
import Footer from "../../Footer";
import Post from "./post.js";
import "./post.css";
import { Button } from "../../Button";

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
          <Button className="btns" onClick={console.log("hey")}>
            Add new Post
          </Button>
        </div>

        <Post
          text="Post Title"
          subtext1="Post description -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel neque vel tortor suscipit consectetur. Pellentesque efficitur est velit, id mollis lorem laoreet nec. Nam vel ullamcorper sapien. Sed sit amet dignissim nibh. Nam dignissim varius quam sed condimentum. Morbi eleifend enim a ante euismod malesuada. In eget convallis risus. Integer sed enim at ipsum mollis tincidunt a luctus mi."
          subtext2="Author: Jonathan"
          subtext3="Date and time: 24th May 1530hrs"
        />

        <Post
          text="Post Title"
          subtext1="Post description -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel neque vel tortor suscipit consectetur. Pellentesque efficitur est velit, id mollis lorem laoreet nec. Nam vel ullamcorper sapien. Sed sit amet dignissim nibh. Nam dignissim varius quam sed condimentum. Morbi eleifend enim a ante euismod malesuada. In eget convallis risus. Integer sed enim at ipsum mollis tincidunt a luctus mi."
          subtext2="Author: Jonathan"
          subtext3="Date and time: 24th May 1530hrs"
        />
      </div>
      <Footer />
    </>
  );
}

export default Forum;
