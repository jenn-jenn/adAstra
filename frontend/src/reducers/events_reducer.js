import {
    RECEIVE_EVENTS,
    RECEIVE_NEW_EVENT,
    RECEIVE_AN_EVENT,
    REMOVE_EVENT
} from "../actions/event_actions";

const EventsReducer = (
    oldState = { all: {}, events: {}, new: undefined },
    action
    ) => {
        Object.freeze(oldState);
        let newState = Object.assign({}, oldState);

        switch(action.type) {
            case RECEIVE_EVENTS:
                newState.all = action.events.data;
                return newState;
            case RECEIVE_
        }
    }