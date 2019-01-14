import React, { Component } from "react";
import { connect } from "react-redux";
import Story from "../components/story/story";

class StoryScreen extends Component {
  showStory = () => {
    let { story } = this.props;
    if (story) {
      return <Story story={story} />;
    }
  };
  render() {
    return (
      <div className="all-stories-container">
        <div className="title-stories">Story</div>
        <div className="stories-container">{this.showStory()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { story: state.story };
};

export default connect(
  mapStateToProps,
  null
)(StoryScreen);
