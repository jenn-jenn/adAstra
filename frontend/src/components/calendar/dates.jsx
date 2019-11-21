import React from "react";
//import '../stylesheets/calendar/date.scss';
import Date from './date';

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
                        <Date
                            date={date}
                            key={i}
                            deleteDate={this.props.deleteDate}
                            user={this.props.user}
                        />
                    );
                }
            })
        )
        
        if (!this.props.dates) {
            return null;
        }

        return(
            <div className="calendar">
                <div className="main-cal-and-timeline">
                    <div className="calendar-with-button">
                        {/* <Calendar
                            onChange={this.changeDate()}
                            value={this.state.date}
                        /> */}
                        <button className="create-date-button">Create Date</button> 
                    </div>
                    <div className="right-side">
                        <div className="upcoming-events">This Month</div>
                        <div className="timeline-wrapper">
                            <div className="timeline">
                                {thisMonth}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dates;