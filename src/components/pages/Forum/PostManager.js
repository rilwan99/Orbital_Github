import React, { useEffect, useState } from "react";
import Post from "./post.js";
import "./post.css";
import { Button } from "../../Button";
import { firebase } from "@firebase/app";

function PostManager() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostText, setNewPostText] = useState("");
  const [newPostName, setNewPostName] = useState("");

  function handleAddPost(event) {
    event.preventDefault();
    addPost(newPostTitle, newPostText, newPostName, firebase);
  }

  function addPost(title, text, name) {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    const newPosts = [
      {
        title: title,
        text: text,
        name: name,
        time: dateTime,
      },
      ...posts,
    ];
    setPosts(newPosts);
  }

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    const db = firebase.firestore();
    db.collection("/forumposts").doc(uid).set({ posts: posts });
  }, [posts]);

  return (
    <div>
      <div className="button-div">Add new Post</div>
      <form onSubmit={handleAddPost}>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          value={newPostTitle}
          onChange={(event) => setNewPostTitle(event.target.value)}
          placeholder="Create a relevant title!"
        ></input>
        <br></br>
        <label>Description:</label>
        <input
          type="text"
          id="text"
          value={newPostText}
          onChange={(event) => setNewPostText(event.target.value)}
          placeholder="Write your post here."
        ></input>
        <br></br>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={newPostName}
          onChange={(event) => setNewPostName(event.target.value)}
          placeholder="Write your name here."
        ></input>
        <br></br>
        <input type="submit" value="Add" />
      </form>

      <div>
        {posts.map((post) => (
          <Post
            title={post.title}
            description={post.text}
            author={post.name}
            dateTime={post.time}
          />
        ))}
      </div>

      <Post
        title="Post Title"
        description="Post description -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel neque vel tortor suscipit consectetur. Pellentesque efficitur est velit, id mollis lorem laoreet nec. Nam vel ullamcorper sapien. Sed sit amet dignissim nibh. Nam dignissim varius quam sed condimentum. Morbi eleifend enim a ante euismod malesuada. In eget convallis risus. Integer sed enim at ipsum mollis tincidunt a luctus mi."
        author="Author: Jonathan"
        dateTime="Date and time: 24th May 1530hrs"
      />
    </div>
  );
}

export default PostManager;
