import React from "react";
import '../stylesheets/event/date_show.scss';

const DATES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

class DateShow extends React.Component {
    componentDidMount() {
        this.props.fetchDateEvents(this.props.match.params.date)
    }

    render() {        
        if (this.props.events === undefined) return null;
        let date = new Date(this.props.date)
        let dateStr = `${DATES[date.getDay()]}  |  ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

        const events = this.props.events.length > 0 ? (<ul className="event-list">
            {this.props.events.map((event, i) => (
                <li key={i} className="event">
                    <h2>{event.title}</h2>
                    <div className="event-info">
                        <a className="fas fa-map-marked-alt"
                            href={`https://www.google.com/maps/place/${event.address}`}>{null}</a>
                        <p>{event.body}</p>
                    </div>
                </li>
            ))}
        </ul>) : <div className="event"><h2>No events found on this date.</h2></div>


        return (
            <div className="date-events">
                <h1>{dateStr}</h1>
                <div className="event-container">
                    {events}
                </div>
            </div>
        );
    }
}

export default DateShow;