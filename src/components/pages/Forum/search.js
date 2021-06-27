import React, { useState, useEffect } from "react";
import { firebase } from "@firebase/app";
import Post from "../Forum/post";
import "./post.css";

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();

  //preventDefault --> Receive the query from user --> Load result from database --> render the new results
  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    console.log("Updated Query : " + query);
  };

  const handleQuery = () => {
    loadData();
    renderPosts();
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    renderPosts();
    console.log("UseEffect-renderposts is called");
  }, []);

  //useEffect();

  /*
    const handleQuery = () => {
        const db = firebase.firestore();
        db.collection("forumpost").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                posts.push({
                    data: doc.data(),
                    id: doc.id
                });
            });
            this.setState({
                data: posts
            });
        });
    }*/

  //After setting the query result,
  //result should contain an array of Post object literals.
  /*
  const loadData = (query) => {
    let posts = [];
    db.collection("Posts")
      .where("title", "==", query)
      .limit(15)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          posts.push({
            data: doc.data(),
            //id: doc.id,
          });
        });
        setResult(posts);
      });
  };*/

  //This sometimes works, and sometimes does not work.
  //No idea why, but perhaps due to asynchronous programming.

  db.collection("name of collection").doc("log").get();

  const loadData = () => {
    let posts = [];
    db.collection("forumpost")
      .where("title", "==", "Options Pricing")
      //.limit(15)
      .get()
      .then((querySnapshot) => {
        console.log("checking database...");
        if (querySnapshot.empty) {
          console.log("No results");
          return <p>No results found.</p>;
        }
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          //setResult(doc.data(), ...result);
          //console.log(result);
          posts.push(doc.data());
          //setResult(posts);
          console.log(posts);
          //doc.data() is never undefined for query doc snapshots
        });
      });

    //console.log(result);
    renderPosts();
  };

  /*
  const loadData = async() => {
      const response = db.collection("forumpost").where("title", "==", query);
      const data = await response.get();
      data.docs.forEach(item=>{

      })

  }*/

  //suspect sth wrong here
  /*TODO */
  const renderPosts = () => {
    console.log("Helloworld RENDERING");
    console.log(posts);
<<<<<<< Updated upstream
=======
    return posts.map((post) => {
      return (
        <div>
          <p>HELLOOOOOOOOOOOOOO</p>
          <Post
            title={post.title}
            text={post.text}
            name={post.name}
            time={post.time}
          />
        </div>
      );
    });
>>>>>>> Stashed changes
  };

  /* Example of rendering
    <TrendingCardItem
                src="https://images.financialexpress.com/2021/03/Stock-REU2-13.jpg"
                text="Stock Market outlook 2021"
                subtext="Morganstanley"
                label="Stocks"
                path="https://www.morganstanley.com/ideas/stock-market-outlook-2021"
              />*/

  return (
    <>
      <form className="search-form">
        <label className="search-label">
          Search:
          <input
            className="search-input"
            value={query}
            onChange={handleInputChange}
            name="query"
            label="query"
            placeholder="Search for a title here."
          />
          <button type="submit" onClick={handleQuery}>
            Submit
          </button>
        </label>
      </form>
<<<<<<< Updated upstream
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
=======
      <div>{renderPosts}</div>
>>>>>>> Stashed changes
    </>
  );
}

export default Search;

//References
//https://stackoverflow.com/questions/39853646/how-to-import-a-css-file-in-a-react-component
//https://stackoverflow.com/questions/51700376/using-map-in-react-with-firebase
