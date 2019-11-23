import React from "react";
import DatesContainer from "../../components/calendar/dates_container";
import EventModal from "../modal/Modal";

import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';
import WeatherContainer from "../weather/weather_container";

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState ({
      showModal: !this.state.showModal
    })
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="main">
      <React.Fragment>
        <button
          className="modal-toggle-button"
          onClick={this.toggleModal}
        >
          {!showModal ? 'Open Modal' : 'Close Modal'}
        </button>
        {
          showModal ? (
            <EventModal>
              <h1>Heading</h1>
              <p>Lorem ipsum </p>
              <button
                className="modal-close"
                onClick={this.toggleModal}
              >X</button>
            </EventModal>
          ) : null
        }

      </React.Fragment>
        ><h2>adAstra</h2>
        <div className="content-wrapper">
          <WeatherContainer />
        </div>
        <div className="main-content">
          <div className="content-wrapper">
           <DatesContainer />
           <EventModal />
          </div>
          <div className="content-wrapper">
            <h3>Constellation Map</h3>
            <MapContainer />
            <p>
              Share your location to find constellations you can currently view.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
