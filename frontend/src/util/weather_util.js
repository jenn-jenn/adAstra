import axios from "axios";
import APIkeys from '../api/api';

export const getWeather = location => {
    return axios.get(
      `https://api.ipgeolocation.io/astronomy?apiKey=${APIkeys.weatherAPI}&lat=${location.lat}&long=${location.long}&date=${location.date}`
    );
}