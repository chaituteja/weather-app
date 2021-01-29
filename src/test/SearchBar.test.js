import React from "react";
import SearchBar from "../components/SearchBar";
import { shallow } from "enzyme";

it("Check Search Bar works properly", () => {
  let wrapper = shallow(<SearchBar />);
  let input = wrapper.find("input");
  input.simulate("change", { target: { value: "Hello" } });
  expect(wrapper.state("term")).toBe("Hello");
});
