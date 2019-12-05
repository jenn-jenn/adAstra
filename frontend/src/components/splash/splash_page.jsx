import React from "react";
import '../stylesheets/session/splash_page.scss';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
  componentDidMount() {
    window.addEventListener('load', function () {
      const cover = document.getElementById('cover')
      cover.classList.add("fadeOut")
      window.setTimeout(() => {
        cover.classList.add("remove")
      }, 1250)
    })
  }

  render() {
    return (
      <div className="splash-main">
        <div id="cover"><img src="/shooting-star.gif" /></div>
          <h2>adAstra</h2>
            <div className="splash-page-buttons">
              <Link to='/login' className="loginbutton">
                Log In
              </Link>
              <Link to='/signup' className="signupbutton">
                Sign Up
              </Link>
            </div>
      </div>

    );
  }
}


export default SplashPage;
