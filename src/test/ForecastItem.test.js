import React from "react";
import ForecastItem from "../components/ForecastItem";
import { shallow } from "enzyme";

it("Renders ForecastItem component properly", () => {
  const forecast = {
    temp: {
      min: "5",
      max: "15",
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  };
  let wrapper = shallow(<ForecastItem forecast={forecast} />);
  expect(wrapper.find(".forecast-item__max").text()).toContain("15");
  expect(wrapper.find(".forecast-item__min").text()).toContain("5");
});
