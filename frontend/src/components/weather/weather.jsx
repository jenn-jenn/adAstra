import React from 'react';
import WeatherItem from './weather_item';

class Weather extends React.Component{

    constructor(props){
        super(props);
        this.state = { lat: 37.7749, long: -122.4194, date: Date.now() }
    }

    componentDidMount(){
        let location = this.state;
        this.props.fetchWeather(location)
        .then(res => this.props.fetchSunset(location));
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