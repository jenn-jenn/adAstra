import { RECEIVE_SUNSTATUS } from "../actions/weather_actions";

const SunsetReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SUNSTATUS:
      return action.weather;
    default:
      return state;
  }
};

export default SunsetReducer;
