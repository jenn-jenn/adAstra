import { RECEIVE_EVENT_ERRORS, CLEAR_ERRORS } from "../actions/event_actions";

const EventErrorReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      debugger
      // const newState = Object.assign({}, oldState);
      // delete newState.errors;
      return [];
    default:
      return oldState;
  }
};



export default EventErrorReducer;