import React from "react";
import ForecastItem from "./ForecastItem";
import "./ForecastList.css";

const ForecastList = ({ forecasts }) => {
  const renderedList = forecasts.map((forecast, index) => {
    return <ForecastItem key={index} forecast={forecast} />;
  });
  return (
    <div className="forecast-list">
      <div className="ui horizontal list forecast-list__lists">
        {renderedList}
      </div>
    </div>
  );
};

export default ForecastList;
