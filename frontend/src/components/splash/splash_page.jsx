import React from "react";
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
            <div className="splash-page-intro">
              <p>Join our community and meet other stargazers!</p>
              <p>Built to reconnect with the ebb and flow of space,<br/>
              adAstra helps you geolocate the best sites<br/>
              for stargazing and meteor showers.</p>
            </div>
      </div>

    );
  }
}


export default SplashPage;
