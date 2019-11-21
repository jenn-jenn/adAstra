import React from 'react';
import WeatherItem from './weather_item';

class Weather extends React.Component{

    constructor(props){
        super(props);
        this.state = { lat: 39.0119, long: -98.4194, date: Date.now() }
    }

    componentDidMount(){
        this.getLocation()
    }

    getLocation(){
        function success(pos) {
            const crd = pos.coords;
            this.setState({ lat: crd.latitude, long: crd.longitude }, console.log(this.state))
            this.props.fetchWeather(this.state)
            // this.props.fetchSunset(this.state)
        }
        navigator.geolocation.getCurrentPosition(success.bind(this));
    }

    render(){
        let sunset;
        let moon;
            sunset = Object.keys(this.props.sunset).length !== 0 ? this.props.sunset.data.sunset : "";
            moon = Object.keys(this.props.sunset).length !== 0 ? this.props.sunset.data.moonrise : "";
        let forecast = this.props.forecast;
        let forecastData;
        let forcastDataNight; 
        Object.keys(forecast).length !== 0 ? forecastData = forecast.data.properties.periods : forecastData = [];
        forecastData.length !==0 ? forcastDataNight = forecastData.filter( day => !day.isDaytime) : forcastDataNight = [];
        let forecastitems = forcastDataNight.length !== 0 ? forcastDataNight.map( (day, i) => <WeatherItem key={i} day={day}/>) : <div></div>;
        return(
            <div>
                <div>The Moon rises at {moon} </div>
                <div>The Sun sets at {sunset} </div>
                {forecastitems}
            </div>
        );
    }
}

export default Weather;