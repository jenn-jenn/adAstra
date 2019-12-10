import React from "react";
import DatesContainer from "../../components/calendar/dates_container";
import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';
import WeatherContainer from "../weather/weather_container";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {   
    return (
      <div className="main">
        <h2>adAstra</h2>
        <div className="content-wrapper">
          <WeatherContainer />
        </div>
        <div className="main-content">
          <div className="content-wrapper">
            <h3>Constellation Map</h3>
            <MapContainer />
          </div>
          <div className="content-wrapper">
            <DatesContainer events={this.props.events} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
