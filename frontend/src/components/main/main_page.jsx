import React from "react";
import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main">>
        <h2>adAstra</h2>
        <div className="main-content">
          <div id="content-wrapper">
            <h3>Click on a star for its name!</h3>
            <MapContainer />
          </div>
          <div id="content-wrapper">
            CALENDAR
          </div>
        </div>
        <div id="content-wrapper">
          FORUM
          </div>
        <footer>
          <div>
            Made with MongoDB, Express, React, and Node.js in San Francisco.
          </div>
          <div>
            &copy; Team Astra 2019
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;
