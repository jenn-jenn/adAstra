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

        const display = current ? (<div className="event">
            <h2>{current.target.name}</h2>
            <img src={`${current.image.src}`} />
        </div>) : <div> Star Does not Exist</div>

        return (
            <div className="stars">
                <h1>Stars</h1>
                <div className="star-container">
                    <ul className="star-list">
                        {/* <div className="event">
                            <h2>{current.target.name}</h2>
                            <img src={`${current.image.src}`} />
                        </div> */}
                        {display}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CosmicObjectsShow