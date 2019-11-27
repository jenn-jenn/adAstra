import axios from "axios";

export const getWeather = location => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=25c2e6a3eb70b67e5e89c441449f8ef4`
  );

}
export const getSunset = location => {
  return axios.get(
    `https://api.ipgeolocation.io/astronomy?apiKey=f4d39562dd0e459587432754a870bd5d&lat=${location.lat}&long=${location.long}&date=${location.date}`
  );
}