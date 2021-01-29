import React from "react";
import ForecastList from "../components/ForecastList";
import { mount } from "enzyme";

it("Renders ForecastItem component properly", () => {
  const forecasts = [
    {
      temp: {
        min: "5",
        max: "15",
      },
      weather: [
        {
          main: "Rain",
        },
      ],
    },
    {
      temp: {
        min: "15",
        max: "35",
      },
      weather: [
        {
          main: "cloud",
        },
      ],
    },
  ];
  let wrapper = mount(<ForecastList forecasts={forecasts} />);
  expect(wrapper.find(".forecast-list__lists").children()).toHaveLength(2);
});
