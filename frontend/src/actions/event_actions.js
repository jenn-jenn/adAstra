import * as EventUtil from "../util/event_util";

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_NEW_EVENT = 'RECEIVE_NEW_EVENT';
export const RECEIVE_AN_EVENT = "RECEIVE_AN_EVENT";
export const RECEIVE_DATE_EVENTS = "RECEIVE_DATE_EVENTS";
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

export const receiveDateEvents = events => ({
   type: RECEIVE_DATE_EVENTS, 
   events 
});

export const removeEvent = event => ({
    type: REMOVE_EVENT,
    event
});

export const fetchEvents = () => dispatch => {
    return EventUtil.getEvents()
        .then((events) => dispatch(receiveEvents(events)))
        .catch((err) => console.log(err));
};

export const fetchAnEvent = (eventId) => dispatch => {
    return EventUtil.getAnEvent(eventId)
        .then(eventItem => dispatch(receiveAnEvent(eventItem)))
        .catch((err) => console.log(err));
};

export const fetchDateEvents = (eventId) => dispatch => {
    return EventUtil.getEventsbyDate(eventId)
        .then(events => dispatch(receiveDateEvent(events)))
        .catch(err => console.log(err));
};

export const createNewEvent = (data) => dispatch => {
    return EventUtil.editEvent(data)
        .then(event => dispatch(receiveNewEvent(event)))
        .catch((err) => console.log(err));
};

export const updateEvent = (eventId) => dispatch => {
    return EventUtil.editEvent(eventId)
        .then(eventItem => dispatch(receiveAnEvent(eventItem)))
        .catch((err) => console.log(err));
};

export const deleteAnEvent = (eventId) => dispatch => {
    return EventUtil.deleteEvent(eventId)
        .then(eventId => dispatch(removeEvent(eventId)))
};
