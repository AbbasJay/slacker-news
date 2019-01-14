export const SET_STORIES = "SET_STORIES";
export const ADD_STORY = "ADD_STORY";
export const ADD_UPVOTE = "ADD_UPVOTE";
export const ADD_STORY_SCREEN = "ADD_STORY_SCREEN";
export const ADD_COMMENT = "ADD_COMMENT";

export const setStories = stories => {
  debugger;
  return {
    type: SET_STORIES,
    stories
  };
};

export const addStory = story => {
  return {
    type: ADD_STORY,
    story
  };
};

export const addUpvote = story => {
  return {
    type: ADD_UPVOTE,
    story
  };
};

export const addSelectedStory = newStory => {
  debugger;
  return {
    type: ADD_STORY_SCREEN,
    newStory
  };
};

export const addComment = (comment, story) => {
  debugger;
  return {
    type: ADD_COMMENT,
    comment,
    story
  };
};
