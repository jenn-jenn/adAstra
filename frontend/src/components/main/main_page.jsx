import React from "react";
import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';
import WeatherContainer from "../weather/weather_container";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        ><h2>adAstra</h2>
        <div id="content-wrapper">
          <WeatherContainer />
        </div>
        <div className="main-content">
          <div id="content-wrapper">
            CALENDAR
          </div>
          <div id="content-wrapper">
            <h3>Constellation Map</h3>
            <p>
              Share your location to find constellations you currently can view!
            </p>
            <MapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
