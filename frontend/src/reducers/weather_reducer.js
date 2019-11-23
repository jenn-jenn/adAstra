import { RECEIVE_WEATHER } from "../actions/weather_actions";

const WeatherReducer = (
    state = {}, action
) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_WEATHER:
            return action.weather
        default:
            return state;
    }
}

export default WeatherReducer