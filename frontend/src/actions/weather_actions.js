import { getWeather } from "../util/weather_util";

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";

export const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
})

export const fetchWeather = location => dispatch => (
    getWeather(location)
    .then(res => dispatch(receiveWeather(res)))
)