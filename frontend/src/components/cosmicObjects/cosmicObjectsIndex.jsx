import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/cosmicobjects/cosmic_objects_index.scss";

class CosmicObjectsIndex extends React.Component {
    componentDidMount(){
        this.props.fetchCosmicObjects();
    }

    render() {

        return (
          <div className="stars">
            <h1>Stars</h1>
            <div className="star-container">
              <ul className="star-list">
                {this.props.cosmicObjects.map((star, i) => {

                const imgStyle = {
                  backgroundImage: `url('${star.image.src}')`,
                  width: '120px',
                  height: '120px',
                  borderRadius: '100%',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                };

                return (
                  <li key={i} className="star">
                    <Link to={`/cosmicobjects/${star.target.name.split(" ").join("").toLowerCase()}`}>
                      <div style={imgStyle}>
                        <h3>
                          {star.target.name}
                        </h3>
                      </div>
                    </Link>
                  </li>
                )})}
              </ul>
            </div>
          </div>
        );
    }
}

export default CosmicObjectsIndex