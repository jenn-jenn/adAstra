import React from 'react';

class WeatherItem extends React.Component{

    render(){
        return (
          <div className="Days">
            <img src={this.props.day.icon} alt=""/>
            <div>{this.props.day.name}</div>
            <div>
              {this.props.day.temperature}
              {this.props.day.temperatureUnit}
            </div>
            <div>{this.props.day.shortForecast}</div>
            <div>Winds: {this.props.day.windSpeed}</div>
          </div>
        );
    }
}

export default WeatherItem;