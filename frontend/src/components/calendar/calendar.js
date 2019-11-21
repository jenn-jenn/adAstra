import React from 'react';
import ApiKeys from '../../api';
import "react-big-calendar/lib/css/react-big-calendar.css";

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cal_events: this.state
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/events')
            .then(response => {

                let appointments = response.data;

                for (let i = 0; i < appointments.length; i++) {
                    appointments[i].start = moment.utc(appointments[i].start).toDate();
                    appointments[i].end = moment.utc(appointments[i].end).toDate();

                }
                self.setState({
                    cal_events: appointments
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />
        )
    }
}

export default Calendar;