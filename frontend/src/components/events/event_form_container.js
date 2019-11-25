import { connect } from 'react-redux';
import EventForm from './event_form';
import {
    createNewEvent, 
    updateEvent, 
    deleteAnEvent 
} from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => {
    let { id: authorId, connectionCode } = state.session.user;
    
    return {
        authorId,
        connectionCode,
    };
};

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        updateEvent: (eventId) => dispatch(updateEvent(eventId)), 
        deleteAnEvent: (eventId) => dispatch(deleteAnEvent(eventId))
    };
};

export default withRouter(connect(mSTP, mDTP)(EventForm));