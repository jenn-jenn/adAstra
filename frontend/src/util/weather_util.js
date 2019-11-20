import axios from "axios";

export const getWeather = location => {
    return axios.get(`https://api.weather.gov/points/39.7456,-97.0892`);
}