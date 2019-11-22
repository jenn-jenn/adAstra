import React from "react";
import EventsContainer from './events_container';

class Events extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
            .then(() => this.props.fetchDateEvents(this.props.date._id))
    }

    render() {
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

