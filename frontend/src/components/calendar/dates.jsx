import React from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/calendar/calendar.scss';
import Calendar from 'react-calendar/dist/entry.nostyle';

const MONTHS = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sept': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December',
}


class Dates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    changeDate() {
        return (date) => {
            this.setState({ date });
        };
    }

    componentDidMount() {
        let days = document.querySelectorAll(".react-calendar__tile");
        days.forEach(dayTile => {
            let date = dayTile.children[0].getAttribute("aria-label");
            let fullDate = date.split(" ").join("-").split(",").join("");
            dayTile.addEventListener("click", () => {
                this.props.history.push(`/events/${fullDate}`)
            })
        })
    }

    hasEvent(date) {
        if(this.props.events.length !== 0) {
            let dateArray = date.toString().split(" ");
            let month = dateArray[1];
            let day = dateArray[2];
            let yr = dateArray[3];
            if(day < 10) {
                day = day[1]
            }
            let dateStr = MONTHS[month] + '-' + day + '-' + yr
            console.log(dateStr);
            if(this.props.events[dateStr] !== undefined) {
                return true
            } else {
                return false
            }
        }
    }

    componentDidUpdate() {
        let days = document.querySelectorAll(".react-calendar__tile");
        days.forEach(dayTile => {
            let date = dayTile.children[0].getAttribute("aria-label");
            let fullDate = date.split(" ").join("-").split(",").join("");

            Object.values(this.props.events).forEach(event => {
                if (event.date === fullDate && !dayTile.classList.contains("has-event")) dayTile.classList.add("has-event");
            })
        })
    }

    render() {
        debugger
        let events = Object.values(this.props.events);
        return (
            <div className="dates-page">
            
                <div className="empty-line"></div>
                <div className="main-cal-and-timeline">
                    <div className="calendar-with-button">
                        <Calendar
                            onChange={this.changeDate()}
                            value={this.state.date}
                            tileClassName='tile-content'
                            tileContent={({ date, view }) => this.hasEvent(date) ? <i className="far fa-star"></i> : null }
                        />
                    </div>
                    <div className="calendar-events">
                        <div className="upcoming-events">
                            <h1>Upcoming Events:</h1>
                            <ul>
                                {events.filter(event => new Date(event.date) >= new Date()).map((event, i) => (
                                    <li key={i}>
                                        {event.title} ({event.date})
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link to="/events/new" className="create-event-link">Create Event</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dates;
