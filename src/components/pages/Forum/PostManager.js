import React, { useState } from "react";
import Post from "./post.js";
import "./post.css";
import { firebase } from "@firebase/app";

function PostManager() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostText, setNewPostText] = useState("");
  const [newPostName, setNewPostName] = useState("");

  /* React honours default browser behavior and the
        default behaviour for a form submission is to
        submit AND refresh the page. So we override the
        default behaviour here as we don't want to refresh
  */
  function handleAddPost(event) {
    event.preventDefault();
    addPost(newPostTitle, newPostText, newPostName);
  }

  /* the ... operator is called the spread operator
       what we are doing is creating a brand new array of
       posts, that is different from the previous array
  */
  function addPost(title, text, name) {
    /* JS method to obtain timestamp */
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

    /* Creating a new element and appending it to the post array */
    //Array use is correct here
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

    //But the data cannot be stored as an array here
    const db = firebase.firestore();
    db.collection("forumpost")
      .doc()
      .set(
        {
          title: title,
          text: text,
          name: name,
          time: dateTime,
        },
        ...posts
      )
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  /* useEffect hook to save data to firestore (log document)
      useEffect(() => {
        const db = firebase.firestore();
        db.collection("/forumpost").doc("log").update({ post: posts });
      });
    */

  /* useEffect hook to retrieve data from firestore(records document)
      Able to retrieve and console.log the data, but how to render it as a Post component?
      useEffect(() => {
        const uid = firebase.auth().currentUser?.uid;
        const db = firebase.firestore();
        const docRef = db.collection("/forumpost").doc("records");

        docRef.get().then((doc) => {
          console.log(doc.data().oldpost);
        });
      }, []);

  */

  return (
    <div>
      <div className="newPost-div">
        Add new Post
        <br></br>
        <form className="formstyle" onSubmit={handleAddPost}>
          <label className="form-header">Title:</label>
          <input
            className="titlebox"
            type="text"
            id="title"
            value={newPostTitle}
            onChange={(event) => setNewPostTitle(event.target.value)}
            placeholder="Create a relevant title!"
          ></input>
          <br></br>
          <label className="form-header">Description:</label>
          <br></br>
          <input
            className="textbox"
            type="text"
            id="text"
            value={newPostText}
            onChange={(event) => setNewPostText(event.target.value)}
            placeholder="Write your post here."
          ></input>
          <br></br>
          <label className="form-header">Name:</label>
          <input
            className="namebox"
            type="text"
            id="name"
            value={newPostName}
            onChange={(event) => setNewPostName(event.target.value)}
            placeholder="Write your name here."
          ></input>
          <br></br>
          <input type="submit" value="Add" />
        </form>
      </div>

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

//Sample Post
//Title: Buy the crypto dip: Sound advice?
//Description: Recently, bitcoin has decreased to less than 50% of its all time highs.
// In this post, I will discuss whether bitcoin is on a downtrend or is in time for a sharp price reversal.
//Name: John

//Sample Post2
//Title: Are analysts' ratings trustworthy?
//Description: How accurate are analysts' price predictions?  How do analysts even make predictions?
//In this post, I will write about how to evaluate analyst reports.
//Name: Jane

//Sample Post3 for testing search
//Title: Options Pricing
//Description: How do we calculate option pricing?  What is the Black Scholes Model?
//Name: Joel
