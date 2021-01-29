import React from "react";
import Moment from "react-moment";

const CurrentWeather = ({
  city,
  date,
  temp,
  icon,
  main,
  humidity,
  windSpeed,
  windDeg,
  units,
}) => {
  const getDate = (date) => {
    return new Date(date * 1000);
  };

  return (
    <div className="current-weather">
      <table className="ui fixed very basic table">
        <tbody>
          <tr>
            <td className="center aligned">
              <h2 className="ui aligned header current-weather__city-name">
                {city}
              </h2>
              <Moment format="dddd MMMM D">{getDate(date)}</Moment>
              <p className="current-weather__weather">{main}</p>
              <div className="ui middle aligned list">
                <div className="item">
                  <img
                    className="ui tiny image"
                    alt={main}
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                  />
                  <div className="content">
                    <div
                      className="header current-weather__temp"
                      style={{ fontSize: "22px" }}
                    >
                      {Math.round(temp)} ° {units === "metric" ? "C" : "F"}
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="center aligned">
              <p className="current-weather__humidity">
                Humidity : {humidity}%{" "}
              </p>
              <p className="current-weather__wind-speed">
                Wind Speed : {windSpeed} {units === "metric" ? "m/s" : "mph"}{" "}
              </p>
              <p className="current-weather__wind-direction">
                Wind Direction : {windDeg}°{" "}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentWeather;
