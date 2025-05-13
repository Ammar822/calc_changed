import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders Display and ButtonPanel components", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Display").length).toBe(1);
  expect(wrapper.find("ButtonPanel").length).toBe(1);
});
