import React from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/calendar/calendar.scss';
import Calendar from 'react-calendar/dist/entry.nostyle';

const MONTHS = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sept': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12',
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
            let dateTile = dayTile.children[0].getAttribute("aria-label");
            let dateObject = new Date(dateTile);

            let year = dateObject.getFullYear();
            let month = dateObject.getMonth() + 1;
            let date = dateObject.getDate();

            if (date < 10) date = "0" + date.toString();

            let fullDate = `${year}-${month}-${date}`
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
            let dateStr = yr + '-' + MONTHS[month] + '-' + day
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
            let dateTile = dayTile.children[0].getAttribute("aria-label");
            let dateObject = new Date(dateTile);

            let year = dateObject.getFullYear();
            let month = dateObject.getMonth() + 1;
            let date = dateObject.getDate();

            if (date < 10) date = "0" + date.toString();

            let fullDate = `${year}-${month}-${date}`

            Object.values(this.props.events).forEach(event => {
                if (event.date === fullDate && !dayTile.classList.contains("has-event")) dayTile.classList.add("has-event");
            })
        })
    }

    render() {
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
                                {events.filter(event => (
                                    new Date(event.date).getMonth() === new Date().getMonth() && 
                                    new Date(event.date).getYear() === new Date().getYear()
                                )).map((event, i) => (
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
