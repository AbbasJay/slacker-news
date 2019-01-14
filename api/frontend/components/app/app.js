import React, { Component } from "react";
import "./app.css";
import AllStories from "../../screens/allStoriesScreen";
import AddStoryScreen from "../../screens/addStoryScreen";
import StoryScreen from "../../screens/storyScreen";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav-container">
            <div>
              <Link to="/" className="route-link">
                All stories
              </Link>
            </div>
            <div>
              <Link to="/addStoryScreen/" className="route-link">
                Add a story
              </Link>
            </div>
            <div>
              <Link to="/storyScreen/" className="route-link">
                Story
              </Link>
            </div>
          </nav>

          <Route path="/" exact component={AllStories} />
          <Route path="/addStoryScreen/" component={AddStoryScreen} />
          <Route path="/storyScreen/" component={StoryScreen} />
        </div>
      </Router>
    );
  }
}

export default App;

// addMan = () => {};

// axios
//   .post("/stories", {
//     title: "new input2222",
//     url: "www.jheeze.com",
//     submitter: "man like abs",
//     points: 2,
//     comments: "nada"
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
// return (
//   <input type="text" placeholder="title" onClick={this.addMan()}>
//     {}
//   </input>
// );
// axios
//   .post("/stories", {
//     title: "new input2222",
//     url: "www.jheeze.com",
//     submitter: "man like abs",
//     points: 2,
//     comments: "nada"
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// axios
//   .get("/stories")
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// axios
//   .delete("/stories", {
//     _id: "5c38d481115a5d32e8c383aa"
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
