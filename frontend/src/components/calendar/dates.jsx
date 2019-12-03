import React from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/calendar/calendar.scss';
import Calendar from 'react-calendar/dist/entry.nostyle';

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
        this.props.fetchEvents();

        let days = document.querySelectorAll(".react-calendar__tile");
        days.forEach(dayTile => {
            dayTile.addEventListener("click", () => {
                let date = dayTile.children[0].getAttribute("aria-label");
                let fullDate = date.split(" ").join("-").split(",").join("");
                this.props.history.push(`/events/${fullDate}`)
            })
        })
    }

    render() {
        return (
            <div className="dates-page">
            
                <div className="empty-line"></div>
                <div className="main-cal-and-timeline">
                    <div className="calendar-with-button">
                        <Calendar
                            onChange={this.changeDate()}
                            value={this.state.date}
                        />
                    </div>
                    <div className="calendar-events">
                        <div className="upcoming-events">
                            <h1>Upcoming Events:</h1>
                            <ul>
                                {this.props.events.filter(event => new Date(event.date) >= new Date()).map((event, i) => (
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
