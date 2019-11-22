import React from "react";
import '../stylesheets/calendar/calendar.scss';
import DateObj from './date';
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
        this.props.fetchAllDates(this.props.user.id);
    }

    render() {
      
        let thisMonth = (
            this.props.dates.map((date, i) => {
                if (new Date(date.date).getMonth() === new Date(this.state.date).getMonth() &&
                    new Date(date.date).getYear() === new Date(this.state.date).getYear()) {
                    return (
                        <DateObj
                            date={date}
                            key={i}
                            changeDate={this.props.changeDate}
                            user={this.props.user}
                            fetchAllDates={this.props.fetchAllDates}
                        />
                    );
                }
            })
        )
        let nextMonth = (
            this.props.dates.map((date, i) => {
                if (new Date(date.date).getMonth() === new Date(this.state.date).getMonth() + 1 &&
                    new Date(date.date).getYear() === new Date(this.state.date).getYear()) {
                    return (
                        <DateObj
                            date={date}
                            key={i}
                            changeDate={this.props.changeDate}
                            user={this.props.user}
                            fetchAllDates={this.props.fetchAllDates}
                        />
                    );
                }
            })
        );
        
        if (!this.props.dates) {
            return null;
        }

        return (
            <div className="dates-page">
            
                <div className="empty-line"></div>
                <div className="main-cal-and-timeline">
                    <div className="calendar-with-button">
                        <Calendar
                            onChange={this.changeDate()}
                            value={this.state.date}
                        />
                        <button className="create-date-button">Create Date</button>
                    </div>
                    <div className="right-side">
                        <div className="upcoming-events">This Month</div>
                        <div className="timeline-wrapper">
                            <div className="timeline">
                                {thisMonth}
                            </div>
                        </div>
                        <div className="upcoming-events" id="next-month-event">Next Month</div>
                        <div className="timeline-wrapper">
                            <div className="timeline">
                                {nextMonth}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dates;
