import React from 'react';
import CosmicObjectShow from './cosmicObjectsshow';
import "../stylesheets/event/date_show.scss";

class CosmicObjectsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchCosmicObjects();
    }

    render() {
        return (
          <div className="date-events">
            <h1>Stars</h1>
            <div className="event-container">
              <ul className="event-list">
                {this.props.cosmicObjects.map((star, i) => (
                  <li key={i} className="event">
                    <h2>{star.target.name}</h2>
                </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
}

export default CosmicObjectsIndex