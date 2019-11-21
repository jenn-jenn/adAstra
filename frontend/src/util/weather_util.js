import axios from "axios";
import APIkeys from '../api/api';

export const getWeather = location => {
    return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.weather.gov/points/39.7456,-97.0892`
        )
        .then(res =>
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/${res.data.properties.forecast}`
            )
        )
}
export const getSunset = location => {
  return axios.get(
    `https://api.ipgeolocation.io/astronomy?apiKey=${APIkeys.weatherAPI}&lat=${location.lat}&long=${location.long}&date=${location.date}`
  );
}