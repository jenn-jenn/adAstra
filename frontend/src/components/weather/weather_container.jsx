import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather_actions';
import Weather from './weather';

const msp = state => {
    return {
        
    }
}

const mdp = dispatch => {
    return{
        fetchWeather: location => dispatch(fetchWeather(location))
    }
}

export default connect(msp, mdp)(Weather)