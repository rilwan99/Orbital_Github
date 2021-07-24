import React, { useState, useEffect } from "react";
import { firebase } from "@firebase/app";
import Post from "../Forum/post";
import "./post.css";
import { render } from "@testing-library/react";

function Search() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();
  const [queryResult, setQueryResult] = useState("postsFound");

  //preventDefault --> Receive the query from user --> Load result from database --> render the new results
  const handleInputChange = (event) => {
    //event.preventDefault();
    setQuery(event.target.value);
    console.log("Updated Query : " + query);
  };

  const handleQuery = (event) => {
    event.preventDefault();
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

  //This sometimes works, and sometimes does not work.
  //No idea why, but perhaps due to asynchronous programming.

  db.collection("name of collection").doc("log").get();

  const loadData = () => {
    let posts = [];
    db.collection("forumpost")
      .where("title", "==", query)
      .limit(15)
      .get()
      .then((querySnapshot) => {
        console.log("checking database...");
        if (querySnapshot.empty) {
          console.log("Query:", query);
          console.log("No results");
          setQueryResult("postsNotFound");
          return <p>No results found.</p>;
        }
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          posts.push(doc.data());
          setPosts(posts);
          console.log(posts);
          setQueryResult("postsFound");
        });
      });

    renderPosts();
  };

  //suspect sth wrong here
  /*TODO */
  const renderPosts = () => {
    console.log("Helloworld RENDERING");
    console.log(posts);
  };

  return (
    <>
      {queryResult === "postsNotFound" && (
        <p className="search-empty">
          We couldn't find any posts. Try searching for something else?
        </p>
      )}

      <form className="search-form">
        <label className="search-label">
          Search:
          <input
            className="search-input"
            value={query}
            type="text"
            id="query"
            onChange={handleInputChange}
            placeholder="Search for a title here."
          />
          <button type="submit" onClick={handleQuery}>
            Submit
          </button>
        </label>
      </form>

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
    </>
  );
}

export default Search;

//References
//https://stackoverflow.com/questions/39853646/how-to-import-a-css-file-in-a-react-component
//https://stackoverflow.com/questions/51700376/using-map-in-react-with-firebase
