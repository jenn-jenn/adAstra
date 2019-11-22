import axios from "axios";
import APIkeys from '../api/api';

export const getWeather = location => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=25c2e6a3eb70b67e5e89c441449f8ef4&units=imperial`
  );

}
export const getSunset = location => {
  return axios.get(
    `https://api.ipgeolocation.io/astronomy?apiKey=${APIkeys.weatherAPI}&lat=${location.lat}&long=${location.long}&date=${location.date}`
  );
}