import React from 'react';
import { Link } from 'react-router-dom';
import CosmicObjectShow from './cosmicObjectsshow';
import "../stylesheets/cosmicobjects/cosmic_objects_index.scss";

class CosmicObjectsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchCosmicObjects();
    }

    render() {
        return (
          <div className="stars">
            <h1>Stars</h1>
            <div className="star-container">
              <ul className="star-list">
                {this.props.cosmicObjects.map((star, i) => (
                  <li key={i} className="star">
                    <h3><Link to={`/cosmicobjects/${star.target.name.split(" ").join("").toLowerCase()}`}>{star.target.name}</Link></h3>
                </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
}

export default CosmicObjectsIndex