import React from "react";
import EventsContainer from './events_container';
import '../stylesheets/event/event.scss';

class Events extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
            .then(() => this.props.fetchDateEvents(this.props.date._id))
    }

    render() {
        const eventsEmpty = (
            <div className="event-container">
                No events scheduled
            </div>
        );

        if (this.props.events.length === 0) {
            return eventsEmpty;
        }

        return (

            <div className="events">
                {
                    this.props.events.map( event => 
                        <EventItems
                            users={this.props.users}
                            currentUser={this.props.currentUser}
                            event={event}
                            key={event._id}
                            changeEvent={this.props.changeEvent}
                        />
                    )
                }
                <EventsContainer dateId={this.props.date._id}/>
            </div>
        );
    }
}

export default Events;

