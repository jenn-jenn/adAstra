import React from 'react';
import { connect } from 'react-redux';
import EventForm from './event_form';
import { openModal, closeModal } from '../../actions/event_modal_actions';
import { fetchUsers } from '../../actions/user_actions';
import {
    createNewEvent, 
    updateEvent, 
    deleteAnEvent 
} from '../../actions/event_actions';

const mSTP = (state) => {
    let { id: authorId, connectionCode } = state.session.user;
    
    return {
        authorId,
        connectionCode,
    };
};

const mDTP = (dispatch) => {
    debugger
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        updateEvent: (eventId) => dispatch(updateEvent(eventId)), 
        deleteAnEvent: (eventId) => dispatch(deleteAnEvent(eventId)),

        EventForm: (
            <button onClick={() => dispatch(openModal('Create Event'))}>
                Create Event
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(EventForm);