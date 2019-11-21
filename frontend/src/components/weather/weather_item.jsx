import React from 'react';

class WeatherItem extends React.Component{

    render(){
        return (
          <div className="Days">
            <div>{this.props.day.name}</div>
            <div>
              {this.props.day.temperature}
              {this.props.day.temperatureUnit}
            </div>
            <div>{this.props.day.shortForecast}</div>
            {/* <div>{this.props.day.detailedForecast}</div> */}
            <div>Winds: {this.props.day.windSpeed}</div>
          </div>
        );
    }
}

export default WeatherItem;