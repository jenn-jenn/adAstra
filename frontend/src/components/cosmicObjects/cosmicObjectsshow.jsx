import React from 'react';
import "../stylesheets/event/date_show.scss";

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
        // if (!current) return null;
        const display = current ? (<div className="event">
            <h2>{current.target.name}</h2>
            <img src={`${current.image.src}`} />
        </div>) : <div> Star Does not Exist</div>
        return (
            <div className="date-events">
                <h1>Stars</h1>
                <div className="event-container">
                    <ul className="event-list">
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