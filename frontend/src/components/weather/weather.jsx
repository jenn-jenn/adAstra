import React from 'react';

class Weather extends React.Component{

    constructor(props){
        super(props);
        this.state = { lat: 37.7749, long: -122.4194, date: Date.now() }
    }

    componentDidMount(){
        let location = this.state;
        this.props.fetchWeather(location);
    }
    render(){
        let sunset;
        let moon;
            sunset = Object.keys(this.props.sunset).length !== 0 ? this.props.sunset.data.sunset : "";
            moon = Object.keys(this.props.sunset).length !== 0 ? this.props.sunset.data.moonrise : "";

        
        return(
            <div>
                <div>The Moon rises at {moon} </div>
                <div>The Sun sets at {sunset} </div>
            </div>
        );
    }
}

export default Weather;