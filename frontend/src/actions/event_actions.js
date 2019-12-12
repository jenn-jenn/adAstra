import * as EventUtil from "../util/event_util";

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_NEW_EVENT = 'RECEIVE_NEW_EVENT';
export const RECEIVE_DATE_EVENTS = "RECEIVE_DATE_EVENTS";
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";
// export const RECEIVE_AN_EVENT = "RECEIVE_AN_EVENT";
// export const REMOVE_EVENT = 'REMOVE_EVENT';

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

export const receiveNewEvent = event => ({
    type: RECEIVE_NEW_EVENT,
    event
});

export const receiveDateEvent = events => ({
   type: RECEIVE_DATE_EVENTS, 
   events 
});

const receiveEventErrors = errors => {
    return {
        type: RECEIVE_EVENT_ERRORS,
        errors
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const fetchEvents = () => dispatch => {
    return EventUtil.getEvents()
        .then((events) => dispatch(receiveEvents(events)))
};

export const fetchDateEvents = (date) => dispatch => {
    return EventUtil.getEventsbyDate(date)
        .then(events => dispatch(receiveDateEvent(events)))
};

export const createNewEvent = (data) => dispatch => {
    return EventUtil.createEvent(data)
        .then(event => dispatch(receiveNewEvent(event)))
        .catch((err) => dispatch(receiveEventErrors(err.response.data)));
};

// export const receiveAnEvent = eventItem => ({
//     type: RECEIVE_AN_EVENT,
//     eventItem
// });

// export const removeEvent = event => ({
//     type: REMOVE_EVENT,
//     event
// });

// export const fetchAnEvent = (eventId) => dispatch => {
//     return EventUtil.getAnEvent(eventId)
//         .then(eventItem => dispatch(receiveAnEvent(eventItem)))
// };


// export const updateEvent = (eventId) => dispatch => {
//     return EventUtil.editEvent(eventId)
//         .then(eventItem => dispatch(receiveAnEvent(eventItem)))
// };

// export const deleteAnEvent = (eventId) => dispatch => {
//     return EventUtil.deleteEvent(eventId)
//         .then(eventId => dispatch(removeEvent(eventId)))
// };
