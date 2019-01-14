import { configure, shallow } from "enzyme";
import React from "react";
import App from "./app";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("should render", () => {
    let mountedApp = shallow(<App />);
    expect(mountedApp.length).toBeGreaterThan(0);
  });
});
