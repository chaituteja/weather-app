import React from "react";
import Spinner from "../components/Spinner";
import { shallow } from "enzyme";

it("Renders Spinner component properly - default value", () => {
  let wrapper = shallow(<Spinner />);
  expect(wrapper.find("div.spinner").text()).toContain("Loading...");
});

it("Renders Spinner component properly - custom value", () => {
  let wrapper = shallow(<Spinner message="This is a test" />);
  expect(wrapper.find("div.spinner").text()).toContain("This is a test");
});
