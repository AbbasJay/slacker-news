import { configure, shallow } from "enzyme";
import React from "react";
import { StoryItem } from "./storyItem";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let addSelectedStoryFn = jest.fn();

let mockStory = {
  title: "test story",
  comments: ["comment"],
  submitter: "user",
  url: "www.test.com",
  upvote: 4
};
describe("Story item component", () => {
  it("should render", () => {
    let mountedStoryItem = shallow(<StoryItem story={mockStory} />);
    expect(mountedStoryItem.length).toBe(1);
  });

  it("should show title", () => {
    let mountedStoryItem = shallow(<StoryItem story={mockStory} />);
    let title = mountedStoryItem.find(".story-title");
    expect(title.length).toBe(1);
  });
  it("should show upvote", () => {
    let mountedStoryItem = shallow(<StoryItem story={mockStory} />);
    let upvote = mountedStoryItem.find(".upvote");
    expect(upvote.length).toBe(1);
  });
  it("should show user", () => {
    let mountedStoryItem = shallow(<StoryItem story={mockStory} />);
    let user = mountedStoryItem.find(".user");
    expect(user.length).toBe(1);
  });
  it("should show url", () => {
    let mountedStoryItem = shallow(<StoryItem story={mockStory} />);
    let url = mountedStoryItem.find(".url");
    expect(url.length).toBe(1);
  });
  it("should show comments", () => {
    let mountedStoryItem = shallow(<StoryItem story={mockStory} />);
    let comments = mountedStoryItem.find(".comments");
    expect(comments.length).toBe(1);
  });

  it("should fire selectStory Action when comment is clicked", () => {
    let mountedStoryItem = shallow(
      <StoryItem story={mockStory} addSelectedStory={addSelectedStoryFn} />
    );
    let link = mountedStoryItem.find(".comment-link");
    link.simulate("click");
    expect(addSelectedStoryFn).toHaveBeenCalled();
  });
});
