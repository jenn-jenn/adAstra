import axios from "axios";
import APIkeys from '../api/api';

export const getWeather = location => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${APIkeys.weatherAPI2}`
  );

}
export const getSunset = location => {
  return axios.get(
    `https://api.ipgeolocation.io/astronomy?apiKey=${APIkeys.weatherAPI}&lat=${location.lat}&long=${location.long}&date=${location.date}`
  );
}