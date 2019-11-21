import React from 'react';

class WeatherItem extends React.Component{

    render(){
        return(
            <div>
                {this.props.day.name}
                {this.props.day.temperature}
                {this.props.day.temperatureUnit}
                {this.props.day.temperatureTrend}
                {this.props.day.shortForecast}
                {this.props.day.detailedForecast}
                {this.props.day.windSpeed}
            </div>
        )
    }
}

export default WeatherItem;