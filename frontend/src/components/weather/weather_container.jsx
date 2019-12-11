import { connect } from 'react-redux';
import { fetchWeather, fetchSunset } from "../../actions/weather_actions";
import Weather from './weather';

const msp = state => {
    return {
        forecast: state.entities.weather,
        sunset: state.entities.sunset,
    }
}

const mdp = dispatch => {
    return{
        fetchWeather: location => dispatch(fetchWeather(location)),
        fetchSunset: location => dispatch(fetchSunset(location))

    }
}

export default connect(msp, mdp)(Weather)