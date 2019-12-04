import React from 'react';
import "../stylesheets/cosmicobjects/cosmic_objects_show.scss";

class CosmicObjectsShow extends React.Component {
    constructor(props) {
        super(props)
    }

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
            <div className="star-info-container">
                <ul className="star-info-list">
                    <img src={`${current.image.src}`} />
                    <div className="star-description">
                        <div className="star-links">
                            <a href={`${current.image.href}`} target="_blank" >Interactive Map</a>
                            <a href={`https://en.wikipedia.org/wiki/${current.target.name}`} target="_blank" >Wikipedia</a>
                        </div>
                        <div>
                            RA: {current.ra.decimal}  |  DEC: {current.dec.decimal}
                        </div>
                        <div>
                            Galactic Longitude: {current.galactic.lon}  |  Galactic Latitude: {current.galactic.lat}
                        </div>
                    </div>
                </ul>
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