import React from 'react';
import EventFormContainer from '../events/event_form_container';


class EventFormModal extends React.Component {

    render() {
        return (
            <div className="event-form-modal hidden">
                <i className="fa fa-times eventx" />
                <EventFormContainer />
            </div>
        )
    }
}

export default EventFormModal;