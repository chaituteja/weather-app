import React from "react";
import Weather from "../api/Weather";
import SearchBar from "./SearchBar";
import ForecastList from "./ForecastList";
import CurrentWeather from "./CurrentWeather";
import Spinner from "./Spinner";
import "./App.css";

const KEY = "8dd890279b73030908c6499ba9c1049d";

class App extends React.Component {
  state = {
    units: "metric",
    term: "",
    country: "",
    city: "",
    forecasts: [],
    lat: null,
    lon: null,
    date: "",
    temp: "",
    icon: "",
    humidity: "",
  };

  componentDidMount() {
    //Using Window object to get the users location
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      this.getLocalWeather();
      this.getLocalForecast();
    });
  }

  // Method to get the current weather based on users location
  getLocalWeather = async () => {
    const response = await Weather.get("/weather", {
      params: {
        lat: this.state.lat,
        lon: this.state.lon,
        units: this.state.units,
        appid: KEY,
      },
    });

    this.setState({
      city: response.data.name,
      date: response.data.dt,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      main: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      windDeg: response.data.wind.deg,
    });
  };

  // Method to get the 7 days weather forecast based on users location
  getLocalForecast = async () => {
    const response = await Weather.get("/forecast/daily", {
      params: {
        lat: this.state.lat,
        lon: this.state.lon,
        units: this.state.units,
        cnt: 7,
        appid: KEY,
      },
    });

    this.setState({
      city: response.data.city.name,
      country: response.data.city.country,
      forecasts: response.data.list,
    });
  };

  // Method to get current weather and forecast based search term provided by the user
  onTermSubmit = async (term) => {
    const forecastResponse = await Weather.get("/forecast/daily", {
      params: {
        q: term,
        units: this.state.units,
        cnt: 7,
        appid: KEY,
      },
    });

    this.setState({
      term: term,
      city: forecastResponse.data.city.name,
      country: forecastResponse.data.city.country,
      forecasts: forecastResponse.data.list,
    });

    const weatherResponse = await Weather.get("/weather", {
      params: {
        q: term,
        units: this.state.units,
        appid: KEY,
      },
    });

    this.setState({
      date: weatherResponse.data.dt,
      temp: weatherResponse.data.main.temp,
      icon: weatherResponse.data.weather[0].icon,
      main: weatherResponse.data.weather[0].main,
      humidity: weatherResponse.data.main.humidity,
      windSpeed: weatherResponse.data.wind.speed,
      windDeg: weatherResponse.data.wind.deg,
    });
  };

  // Method to toggle units between metric and imperial
  changeUnits = () => {
    const units = this.state.units;

    if (units === "metric") {
      if (this.state.term) {
        this.setState({ units: "imperial" }, () => {
          this.onTermSubmit(this.state.term);
        });
      } else {
        this.setState({ units: "imperial" }, () => {
          this.getLocalWeather();
          this.getLocalForecast();
        });
      }
    } else {
      if (this.state.term) {
        this.setState({ units: "metric" }, () => {
          this.onTermSubmit(this.state.term);
        });
      } else {
        this.setState({ units: "metric" }, () => {
          this.getLocalWeather();
          this.getLocalForecast();
        });
      }
    }
  };

  renderContent() {
    if (this.state.forecasts.length > 0) {
      return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <button
            className="ui secondary button switch-units"
            onClick={this.changeUnits}
          >
            Switch Units
          </button>
          <CurrentWeather
            temp={this.state.temp}
            city={this.state.city}
            date={this.state.date}
            icon={this.state.icon}
            main={this.state.main}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            windDeg={this.state.windDeg}
            units={this.state.units}
          />
          <ForecastList
            forecasts={this.state.forecasts}
            // country={this.state.country}
          />
        </div>
      );
    }

    return <Spinner />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
