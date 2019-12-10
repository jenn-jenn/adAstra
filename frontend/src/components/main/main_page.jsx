import React from "react";
import DatesContainer from "../../components/calendar/dates_container";
import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';
import WeatherContainer from "../weather/weather_container";
import EventFormContainer from "../events/event_form_container";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchEvents()
      .then(() => {
        document.querySelector('.create-event-link').addEventListener('click', () => {
          document.querySelector('.event-form-modal').classList.remove('hidden');
        })
        document.querySelector('.create-event-icon').addEventListener('click', () => {
          document.querySelector('.event-form-modal').classList.remove('hidden');
        })

        document.querySelector('.fa.fa-times.eventx').addEventListener('click', () => {
          document.querySelector('.event-form-modal').classList.add('hidden');
        })
      })
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

        <div className="event-form-modal hidden">
          <i className="fa fa-times eventx" />
          <EventFormContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;
