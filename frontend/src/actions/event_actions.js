import * as EventUtil from "../util/event_util";

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_NEW_EVENT = 'RECEIVE_NEW_EVENT';
export const RECEIVE_AN_EVENT = "RECEIVE_AN_EVENT";
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});

export const receiveNewEvent = event => ({
    type: RECEIVE_NEW_EVENT,
    event
});

export const receiveAnEvent = eventItem => ({
    type: RECEIVE_AN_EVENT,
    eventItem
});

export const removeEvent = event => ({
    type: REMOVE_EVENT,
    event
});

export const fetchEvents = () => dispatch => {
    return EventUtil.fetchEvents()
        .then((events) => dispatch(receiveEvents(events)))
        .catch((err) => console.log(err));
};

export const fetchAnEvent = (eventId) => dispatch => {
    return EventUtil.fetchAnEvent(eventId)
        .then(eventItem => dispatch(receiveAnEvent(eventItem)))
        .catch((err) => console.log(err));
};

export const createNewEvent = (data) => dispatch => {
    return EventUtil.createNewEvent(data)
        .then(event => dispatch(receiveNewEvent(event)))
        .catch((err) => console.log(err));
};

export const updateEvent = (eventId) => dispatch => {
    return EventUtil.fetchAnEvent(eventId)
        .then(eventItem => dispatch(receiveAnEvent(eventItem)))
        .catch((err) => console.log(err));
};

export const deleteEvent = (eventId) => dispatch => {
    return EventUtil.deleteEvent(eventId)
        .then(eventId => dispatch(removeEvent(eventId)))
};
