import React, { Component } from "react";
import { connect } from "react-redux";
import { addUpvote, addComment } from "../../actions/actions";
import axios from "axios";

export class Story extends Component {
  upvote = story => {
    axios
      .put("/stories/" + story._id, {
        __v: story.__v + 1
      })
      .then(() => {
        debugger;
        this.props.addUpvote(story);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  showComments = story => {
    if (story) {
      return story.comments.map((comment, index) => {
        return (
          <div className="comment" key={index}>
            {" "}
            {comment}
          </div>
        );
      });
    }
  };

  addComments = (event, story) => {
    debugger;
    event.preventDefault();
    let comment = this.refs.title.value;
    let newComments = [...story.comments];
    newComments.unshift(comment);

    axios
      .put("/stories/" + story._id, { comments: newComments })
      .then(() => {
        this.props.addComment(comment, story);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then((this.refs.title.value = ""));
  };

  render() {
    debugger;
    let { story } = this.props;
    return (
      <div className="container">
        <div className="story-container">
          <div className="story-body title">
            {story.title ? story.title : "No title"}
          </div>

          <div className="story-body-container">
            <div className="upvote" onClick={() => this.upvote(story)}>
              {"^"}
            </div>
            <div className="story-body vote">
              {story.__v ? story.__v + " points" : "No points"}
            </div>

            <div className="story-body user">
              {story.submitter
                ? "| by " + story.submitter
                : "| No submitter added"}
            </div>

            <div className="story-body url">
              {story.url ? "| " + story.url : "| No URL provided"}
            </div>

            <div className="story-body comments">
              {"| " + story.comments.length}
              {story.comments.length === 1 ? " comment" : " comments"}
            </div>
          </div>
        </div>
        <div className="input-container">
          <form
            className="form-click"
            onSubmit={() => this.addComments(event, story)}
          >
            <div className="add-story-input">
              Enter comment:
              <input type="text" ref="title" placeholder="Comment" />
            </div>
            <button type="submit">Sumbit</button>
          </form>
        </div>

        <div className="comments-container">{this.showComments(story)}</div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addUpvote: index => dispatch(addUpvote(index)),
    addComment: (comment, story) => dispatch(addComment(comment, story))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Story);
