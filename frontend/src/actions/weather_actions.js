import { getWeather, getSunset } from "../util/weather_util";

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const RECEIVE_SUNSTATUS = "RECEIVE_SUNSTATUS";

export const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
})
export const receiveSunset = weather => ({
    type: RECEIVE_SUNSTATUS,
    weather
});

export const fetchWeather = location => dispatch => (
    getWeather(location)
    .then(res => dispatch(receiveWeather(res)))
)
export const fetchSunset = location => dispatch =>
    getSunset(location)
    .then(res => dispatch(receiveSunset(res))
)