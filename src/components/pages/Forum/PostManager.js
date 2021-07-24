import React, { useState } from "react";
import Post from "./post.js";
import "./post.css";
import { firebase } from "@firebase/app";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { Link } from "react-router-dom";
import { NoEncryption } from "@material-ui/icons";

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
      <IfFirebaseUnAuthed>
        <div className="notLoggedIn-box">
          <Link to="/sign-in" style={{ textDecoration: "none" }}>
            <p className="notLoggedIn-box-text">
              <u>Sign In</u> To Create Posts Now!
            </p>
          </Link>
        </div>
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
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
      </IfFirebaseAuthed>

      <div>
        {posts.map((post) => (
          <Post
            title={post.title}
            text={post.text}
            name={post.name}
            time={post.time}
          />
        ))}
      </div>

      <Post
        title="Buy the crypto dip: Sound advice?"
        text="Recently, bitcoin has decreased to less than 50% of its all time highs.
        In this post, I will discuss whether bitcoin is on a downtrend or is in time for a sharp price reversal.
        What’s interesting to note is bitcoin has thus far outperformed the previous halving, only recently seeing lower gains than before, but still primed for a decent bull run. Of course, this time around there’s a lot more FUD being spread than in 2017, as a lot more institutional investors and people like Elon Musk have gained control of the market narrative.
        In my opinion, we are looking at a delayed performance compared to the last bull cycle and although I firmly believe bitcoin is about to breakout, we could see this entire scenario play out over the next six to eight months, instead of a lot sooner as many would hope.
        As analysed before, bitcoin enters a bull cycle after each halving and sees tremendous growth in the 18 months that follow. Compared to the previous cycle, bitcoin has performed much better (recent dips excluded) and it appears as though it will far outperform the previous bull cycle."
        name="John"
        time="24th May 1530hrs"
      />
      <Post
        title="Are analysts' ratings trustworthy?"
        text="How accurate are analysts' price predictions?  How do analysts even make predictions?
        In this post, I will write about how to evaluate analyst reports.
        Analysts have been actively evaluating companies as long as there have been stocks, but they're more popular and get more exposure than ever thanks to round-the-clock stock market news and online resources. Some analysts' notoriety has also increased. But while analysts typically have similar credentials, they aren't all the same.
        For example, since positive and negative earnings surprises can have dramatic effects on stocks, you may wonder, how can a company beat the estimates with so many eyes watching? How can one analyst have a buy rating and one a sell rating? How can investors tell who will be right?
        The first place to check is the fine print on any research report and find out how the analyst is compensated. From there, you can decide whether it's in the analyst's interest to tell you something other than the truth."
        name="Jonathan"
        time="14th June 0030hrs"
      />
      <Post
        title="HODL"
        text="I'm pretty sure that you have heard of the term HODL before. But what does it exactly mean? 
        HODL stands for Hold On For Dear Life. People commonly use that term when the market is bearish and the value of their portfolio 
        has significantly decreased.The biggest reason why “hodl” has become such a popular term is the general volatility of the prices of cryptocurrencies. 
        Many cryptocurrency tokens, even relatively stable ones such as Bitcoin and Ethereum, frequently have very volatile market swings. 
        The cost of these tokens can fall 100% one month and then rise 300% within the next few months."
        name="Mary"
        time="6th Jan 2130hrs"
      />
    </div>
  );
}

export default PostManager;
