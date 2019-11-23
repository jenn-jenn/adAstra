import {
    RECEIVE_EVENTS,
    RECEIVE_DATE_EVENTS,
    RECEIVE_NEW_EVENT,
    RECEIVE_AN_EVENT,
    REMOVE_EVENT
} from "../actions/event_actions";

const EventsReducer = ( oldState = {}, action ) => {
        Object.freeze(oldState);
        let newState = Object.assign({}, oldState);

        switch(action.type) {
            case RECEIVE_EVENTS:
               // newState.all = action.events.data;
                return action.events.data;
            // case RECEIVE_DATE_EVENTS:
            //     newState.date = action.events.data;
            //     return newState;
            case RECEIVE_NEW_EVENT:
                return Object.assign(oldState, action.event.data);
            // case RECEIVE_AN_EVENT:
            //     newState[action.event.data.id] = action.event.data;
            //     return newState;
            // case REMOVE_EVENT:
            //     delete newState[action.event.data.id];
            //     return newState;
            default:
                return oldState;
        }
    };

    export default EventsReducer;