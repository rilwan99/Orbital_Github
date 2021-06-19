import React, { useState, useEffect } from "react";
//import firebase from "firebase/app";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { firebase } from "@firebase/app";

function CreateNewPost() {
  const [post, setPost] = useState([]);
  /**The code here might not be needed. */
  /*
  function handleSubmitPost(event) {
      event.preventDefault();
      submitPost(post, firebase);
  }
*/
  //The function  below combines the old array with a new post.

  //Reference code from API.
  /*
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
*/ /*
  
  function submitPost(post) {
    const uid = firebase.auth().currentUser?.uid;
    const db = firebase.firestore();
    
    const newPost = {
      Author: currentAuthor,
      Date: currentDate,
      description: currentDescription,
      title: currentTitle,
    };
*
  
    db.collection("forumposts")
      .doc(uid)
      .set({
        Author: "",
        Date: "CA",
        description: "USA",
        title: 
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  */

  const date = new Date();

  return (
    <>
      <IfFirebaseUnAuthed>Login to create a new post!</IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div>
          <form>
            <label>Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Create a relevant title!"
            ></input>
            <br></br>
            <label>Description:</label>
            <input
              type="text"
              id="description"
              placeholder="Write your post here."
            ></input>
          </form>
          <button
          //Need to
          //onSubmit={() => setPost(post + { title } + { description })}
          ></button>
        </div>
      </IfFirebaseAuthed>
    </>
  );
}

/*
class Post{
  constructor(author, date, description, title) {
    this.author = author;
    this.date = date;
    this.description = description;
    this.title = title;
  }
}
*/

export default CreateNewPost;
