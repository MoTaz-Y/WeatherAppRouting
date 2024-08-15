import "./WeatherLayout.css";
import { Outlet } from "react-router-dom";

const WeatherLayout = () => {
  return (
    <>
      <div className="weather-layout">
        <h1>Weather App</h1>
        <Outlet />
      </div>{" "}
    </>
  );
};

export default WeatherLayout;
