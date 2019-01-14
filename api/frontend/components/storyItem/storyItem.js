import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { addSelectedStory } from "../../actions/actions";
import { connect } from "react-redux";

export class StoryItem extends Component {
  render() {
    let { story } = this.props;
    return (
      <div className="story-container">
        <a className="story-body story-title" href={"https://" + story.url}>
          {story.title ? story.title : "No title"}
        </a>
        <div className="story-body-container">
          <div className="story-body points upvote">
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
          <Link
            to="/storyScreen/"
            className="comment-link comments"
            onClick={() => this.props.addSelectedStory(story)}
          >
            {"| " + story.comments.length}
            {story.comments.length === 1 ? " comment" : " comments"}
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSelectedStory: story => dispatch(addSelectedStory(story))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StoryItem);
