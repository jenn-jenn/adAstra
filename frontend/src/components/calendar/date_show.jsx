import React from "react";
import '../stylesheets/event/date_show.scss';

class DateShow extends React.Component {
    componentDidMount() {
        this.props.fetchDateEvents(this.props.match.params.date)
    }

    render() {        
        if (this.props.events === undefined) return null;

        return (
            <div className="date-events">
                <h1>{this.props.date}</h1>
                <div className="event-container">
                    <ul className="event-list">
                        {this.props.events.map((event, i) => (
                            <li key={i} className="event">
                                <h2>{event.title}</h2>
                                <div className="event-info">
                                    <a className="fas fa-map-marked-alt"
                                        href={`https://www.google.com/maps/place/${event.address}`} />
                                    <p>{event.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DateShow;