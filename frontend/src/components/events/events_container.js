import { connect } from 'react-redux';
import React from 'react';
import { 
    fetchEvents, 
    fetchDateEvents, 
    createNewEvent, 
    updateEvent, 
    deleteAnEvent

} from '../../actions/event_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';
import Events from './events';

const mapStateToProps = state => {
    return {
        events: Object.values(state.dates.event), 
        currentUser: state.session.user,
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDateEvents: eventId => dispatch(fetchDateEvents(eventId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchEvents: () => dispatch(fetchEvents()),
        createNewEvent: eventId => dispatch(createNewEvent(eventId)),
        updateEvent: eventId => dispatch(updateEvent(eventId)),
        deleteAnEvent: eventId => dispatch(deleteAnEvent(eventId)),

        EventForm: (
            <button onClick={() => dispatch(openModal('Create Event'))}>
                Create Event
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
