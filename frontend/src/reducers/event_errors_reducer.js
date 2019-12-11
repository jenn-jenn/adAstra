import { RECEIVE_EVENT_ERRORS } from "../actions/event_actions";

const EventErrorReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default EventErrorReducer;