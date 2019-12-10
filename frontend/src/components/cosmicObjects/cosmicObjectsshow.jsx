import React from 'react';
import "../stylesheets/cosmicobjects/cosmic_objects_show.scss";

class CosmicObjectsShow extends React.Component {
    componentDidMount() {
        this.props.fetchCosmicObjects();
    }

    render() {
        let array = {};
        if(this.props.cosmicObjects.length > 0){
            this.props.cosmicObjects.forEach(star => {
                array[star.target.name.split(" ").join("").toLowerCase()] = star
            })
        }
        let current = array[this.props.match.params.star.split(" ").join("").toLowerCase()];

        const display = current ? (<div>
            <h1>{current.target.name}</h1>
            <div>
                <div className="star-info-container">
                    <ul className="star-info-list">
                        <h3>Constellation Image</h3>
                        <img src={`${current.image.src}`} alt={current.target.name} />
                    </ul>
                </div>

                <div className="star-info-container">
                    {/* <ul className="star-info-list"> */}
                        <div className="star-description">
                            <h4>Galactic Coordinates</h4>
                            <div className="star-text">
                                <div className="labels">
                                    Right Ascension: <br />
                                    Declination: <br />
                                    Galactic Longitude: <br />
                                    Galactic Latitude:
                                </div>
                                <div>
                                    {current.ra.decimal}<br />
                                    {current.dec.decimal}<br />
                                    {current.galactic.lon}<br />
                                    {current.galactic.lat}
                                </div>
                            </div>
                            <div className="star-links">
                                <a href={`${current.image.href}`} target="_blank" rel="noopener noreferrer" >Interactive Map</a>
                                <a href={`https://en.wikipedia.org/wiki/${current.target.name}`} target="_blank" rel="noopener noreferrer" >Wikipedia</a>
                            </div>
                        </div>
                    {/* </ul> */}
                </div>
            </div>
        </div>) : <div><h1>Star Does not Exist</h1></div>

        return (
            <div className="star-info">
                {display}
            </div>
        )
    }
}

export default CosmicObjectsShow