import React from "react";
import CurrentWeather from "../components/CurrentWeather";
import { shallow } from "enzyme";

it("Renders Spinner component properly - default value", () => {
  let wrapper = shallow(
    <CurrentWeather
      temp="15"
      city="Melbourne"
      date="1611889888"
      icon="clouds"
      main="Rain"
      humidity="25"
      windSpeed="4.5"
      windDeg="44"
      units="imperial"
    />
  );
  expect(wrapper.find(".current-weather__city-name").text()).toContain(
    "Melbourne"
  );
  expect(wrapper.find(".current-weather__humidity").text()).toContain("25");
  expect(wrapper.find(".current-weather__temp").text()).toContain("15");
  expect(wrapper.find(".current-weather__weather").text()).toContain("Rain");
  expect(wrapper.find(".current-weather__wind-speed").text()).toContain("4.5");
  expect(wrapper.find(".current-weather__wind-direction").text()).toContain(
    "44"
  );
});
