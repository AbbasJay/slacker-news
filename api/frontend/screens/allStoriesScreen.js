import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setStories } from "../actions/actions";
import StoryItem from "../components/storyItem/storyItem";

export class AllStoriesScreen extends Component {
  state = {
    pageStorySize: 10,
    storyStartIndex: 0,
    storyEndIndex: 10
  };

  componentDidMount() {
    debugger;
    if (!this.props.stories) {
      axios
        .get("./stories")
        .then(response => {
          this.props.setStories(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  showStories = () => {
    let { stories } = this.props;
    if (stories.length) {
      let stoiresToDisplay = stories.slice(
        this.state.storyStartIndex,
        this.state.storyEndIndex
      );
      return stoiresToDisplay.map(story => {
        return <StoryItem key={story._id} story={story} />;
      });
    }
    if (!stories.length) {
      return <h2>"Sorry, there have been no stories submitted yet."</h2>;
    }
  };

  changeStoriesPage = pageNumber => {
    let start =
      pageNumber * this.state.pageStorySize - this.state.pageStorySize;
    let end = start + this.state.pageStorySize;
    if (end > this.props.stories.length - 1) {
      end = this.props.stories.length - 1;
    }

    this.setState({
      storyStartIndex: start,
      storyEndIndex: end
    });
  };

  getPagination = () => {
    let pageNumber = Math.ceil(
      this.props.stories.length / this.state.pageStorySize
    );
    let result = [];
    for (let i = 0; i < pageNumber; i++) {
      result.push(
        <div
          className="pagination-tab"
          key={i}
          onClick={() => this.changeStoriesPage(i + 1)}
        >
          {" "}
          {i + 1}{" "}
        </div>
      );
    }

    return <div className="pagination-holder">{result}</div>;
  };

  render() {
    return (
      <div className="all-stories-container">
        <div className="title-stories">All Stories</div>
        {this.props.stories && (
          <div className="stories-container">
            {this.showStories()}
            <div className="pagination-container">{this.getPagination()}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stories: state.stories };
};

const mapDispatchToProps = dispatch => {
  return {
    setStories: stories => dispatch(setStories(stories))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStoriesScreen);
