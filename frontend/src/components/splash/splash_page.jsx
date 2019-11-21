import React from "react";
//import { View } from 'react-native';
import '../stylesheets/session/splash_page.scss';
import { Link } from 'react-router-dom';
import WeatherContainer from '../weather/weather_container';

class SplashPage extends React.Component {
  render() {
    return (

      <div className="splash-main">
          <h2>adAstra</h2>
          <div className="splash-popup">
            <WeatherContainer />
            <div className="splash-page-buttons">
              <Link to='/login' className="loginbutton">
                Log In
              </Link>
              <Link to='/signup' className="signupbutton">
                Sign Up
              </Link>
            </div>
          </div>
      </div>

    );
  }
}

export default SplashPage;
