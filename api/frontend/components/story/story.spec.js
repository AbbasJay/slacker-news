import { configure, shallow } from "enzyme";
import React from "react";
import { Story } from "./story";
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
    let mountedStoryItem = shallow(<Story story={mockStory} />);
    expect(mountedStoryItem.length).toBe(1);
  });

  it("should show title", () => {
    let mountedStoryItem = shallow(<Story story={mockStory} />);
    let title = mountedStoryItem.find(".title");
    expect(title.length).toBe(1);
  });
  it("should show comments", () => {
    let mountedStoryItem = shallow(<Story story={mockStory} />);
    let comments = mountedStoryItem.find(".comments");
    expect(comments.length).toBe(1);
  });
  it("should show user", () => {
    let mountedStoryItem = shallow(<Story story={mockStory} />);
    let user = mountedStoryItem.find(".user");
    expect(user.length).toBe(1);
  });
  it("should show url", () => {
    let mountedStoryItem = shallow(<Story story={mockStory} />);
    let url = mountedStoryItem.find(".url");
    expect(url.length).toBe(1);
  });
  it("should show upvote", () => {
    let mountedStoryItem = shallow(<Story story={mockStory} />);
    let upvote = mountedStoryItem.find(".upvote");
    expect(upvote.length).toBe(1);
  });

  //  As these function makes an aysnc request, the click simulation does not allow for network requests so it never sees
  //  the function call from the callback in the promise, im sure there is a way to test for this.

  // it("should fire selectStory Action when comment is clicked", () => {
  //   let mountedStoryItem = shallow(
  //     <Story story={mockStory} addSelectedStory={addSelectedStoryFn} />
  //   );
  //   let link = mountedStoryItem.find(".form-click");
  //   link.first().simulate("submit", {});
  //   expect(callback).to.have.been.called();
  // link.simulate("click");
  // expect(addSelectedStoryFn).toHaveBeenCalled();
  // });

  //   it("should fire selectStory Action when comment is clicked", () => {
  //     let mountedStoryItem = shallow(
  //       <Story story={mockStory} addSelectedStory={addSelectedStoryFn} />
  //     );
  //     let link = mountedStoryItem.find(".upvote");
  //     link.simulate("click");
  //     expect(addSelectedStoryFn).toHaveBeenCalled();
  //   });
});
