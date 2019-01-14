import {
  SET_STORIES,
  ADD_STORY,
  ADD_UPVOTE,
  ADD_STORY_SCREEN,
  ADD_COMMENT
} from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STORIES: {
      debugger;
      return {
        ...state,
        stories: action.stories
      };
    }

    case ADD_STORY: {
      debugger;
      let newStories = [...state.stories];
      newStories.push(action.story);
      return {
        ...state,
        stories: newStories
      };
    }

    case ADD_UPVOTE: {
      debugger;
      let newStories = [...state.stories];
      let newStory = { ...state.story };

      for (let i = 0; i < newStories.length; i++) {
        if (newStories[i].__v === action.story.__v) {
          newStories[i].__v = newStories[i].__v + 1;
        }
      }
      newStory.__v = newStory.__v + 1;
      return {
        ...state,
        stories: newStories,
        story: newStory
      };
    }

    case ADD_STORY_SCREEN: {
      debugger;
      return {
        ...state,
        story: action.newStory
      };
    }

    case ADD_COMMENT: {
      debugger;
      let newStories = [...state.stories];
      let newStory = { ...state.story };

      for (let i = 0; i < newStories.length; i++) {
        if (newStories[i]._id === action.story._id) {
          newStories[i].comments.unshift(action.comment);
        }
      }

      return {
        ...state,
        story: newStory,
        stories: newStories
      };
    }

    default:
      return state;
  }
};
