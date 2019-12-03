import React from "react";

class DateShow extends React.Component {
    componentDidMount() {
        this.props.fetchDateEvents(this.props.match.params.date)
    }

    render() {
        const noEvents = (<h2>There are no events on this date</h2>);
        
        if (this.props.events === undefined) return null;

        return (
            <div className="upcoming-events">
                <h1>{this.props.date}</h1>
                {noEvents}
                <ul>
                    {this.props.events.map((event, i) => (
                        <li key={i}>
                            {event.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default DateShow;