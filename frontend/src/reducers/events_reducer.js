import {
    RECEIVE_EVENTS,
    RECEIVE_DATE_EVENTS,
    RECEIVE_NEW_EVENT,

} from "../actions/event_actions";

const EventsReducer = ( oldState = {}, action ) => {
        Object.freeze(oldState);

        switch(action.type) {
            case RECEIVE_EVENTS:
                return action.events.data;
            case RECEIVE_DATE_EVENTS:
                return action.events.data
            case RECEIVE_NEW_EVENT:
                return Object.assign({}, oldState, action.event.data);
            default:
                return oldState;
        }
    };


    export default EventsReducer;