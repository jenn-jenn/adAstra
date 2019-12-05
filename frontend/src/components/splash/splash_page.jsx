import React from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/session/splash_page.scss';

class SplashPage extends React.Component {
  componentDidMount() {
    const cover = document.getElementById('cover')
    cover.classList.add("fadeOut")
    window.setTimeout(() => {
      cover.classList.add("remove")
    }, 1300)
  }

  render() {
    return (
      <div className="splash-main">
        <div id="cover"><img src="/shooting-star.gif" alt="shooting-star"/></div>
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
