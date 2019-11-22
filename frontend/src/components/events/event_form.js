import { connect } from 'react-redux';
import EventForm from './event_form';
import {
    fetchEvents, 
    fetchAnEvent, 
    fetchDateEvents, 
    createNewEvent, 
    updateEvent, 
    deleteAnEvent 
} from '../../actions/event_actions';

const mSTP = (state) => {
    let { id: authorId, connectionCode } = state.session.user;

    return {
        authorId,
        connectionCode
    };
};

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        fetchEvents: () => dispatch(fetchEvents()),
        fetchAnEvent: (eventId) => dispatch(fetchAnEvent(eventId)),
        fetchDateEvents: (eventId) => dispatch(fetchDateEvents(eventId)),
        updateEvent: (eventId) => dispatch(updateEvent(eventId)), 
        deleteAnEvent: (eventId) => dispatch(deleteAnEvent(eventId))
    };
};

export default connect(mSTP, mDTP)(EventForm);