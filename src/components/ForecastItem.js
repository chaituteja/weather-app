import React from "react";
import Moment from "react-moment";
import "./ForecastItem.css";

const ForecastItem = ({ forecast }) => {
  const getDate = (term) => {
    return new Date(term * 1000);
  };
  return (
    <div className="item forecast-item">
      <div className="content">
        <div className="header">
          <Moment format="dddd">{getDate(forecast.dt)}</Moment>
        </div>
        <img
          className="ui tiny image"
          alt={forecast.weather[0].main}
          src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
        />
        <div>
          <span className="forecast-item__max">
            {Math.round(forecast.temp.max)}°{" "}
          </span>
          <span className="forecast-item__min">
            {Math.round(forecast.temp.min)}°
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
