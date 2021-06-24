import React, { useState } from "react";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";
import { firebase } from "@firebase/app";

/*
const np = {
  Author: "",
  Date: "",
  description: "",
  title: "",
};*/

const initialValues = {
  Author: "",
  date: "",
  description: "",
  title: "",
};

function CreateNewPost() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const uid = firebase.auth().currentUser?.uid;
    const db = firebase.firestore();

    db.collection("forumposts")
      .doc(uid)
      .set({
        Author: values.Author,
        Date: values.date,
        description: values.description,
        title: values.title,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

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

  return (
    <FirebaseAuthConsumer>
      <IfFirebaseUnAuthed>Login to create a new post!</IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div>
          <form>
            <label>Title: </label>
            <input
              value={values.title}
              onChange={handleInputChange}
              name="title"
              label="Title:"
            />
            <br></br>
            <label>Description </label>
            <input
              value={values.description}
              onChange={handleInputChange}
              name="description"
              label="Your Post:"
            />
            <br></br>
            <label>Name: </label>
            <input
              value={values.Author}
              onChange={handleInputChange}
              name="Author"
              label="Your Name:"
            />
            <br></br>
            <label>Date: </label>
            <input
              value={values.date}
              onChange={handleInputChange}
              name="date"
              label="The date"
            />
            <br></br>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </IfFirebaseAuthed>
    </FirebaseAuthConsumer>
  );
}

export default CreateNewPost;
