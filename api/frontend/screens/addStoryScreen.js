import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addStory } from "../actions/actions";

class AddStoriesScreen extends Component {
  addDetails = event => {
    debugger;
    event.preventDefault();
    let { title, name, url } = this.refs;

    axios
      .post("/stories", {
        title: title.value,
        url: url.value,
        submitter: name.value
      })
      .then(response => {
        this.props.addStory(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then((title.value = ""), (name.value = ""), (url.value = ""));
  };

  addStory = () => {
    return (
      <div className="input-container">
        <form onSubmit={() => this.addDetails(event)}>
          <div className="add-story-input">
            Enter title:
            <input type="text" ref="title" placeholder="Title" />
          </div>
          <div className="add-story-input">
            Enter URL:
            <input type="text" ref="url" placeholder="URL" />
          </div>
          <div className="add-story-input">
            Enter user name:
            <input type="text" ref="name" placeholder="User Name" />
          </div>
          <div className="add-story-input">
            <button>Sumbit</button>
          </div>
        </form>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="title-stories">Add Story</div>
        <div>{this.addStory()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stories: state.stories };
};

const mapDispatchToProps = dispatch => {
  return {
    addStory: stories => dispatch(addStory(stories))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStoriesScreen);
