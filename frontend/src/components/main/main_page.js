// src/components/main/main_page.js

import React from "react";

import '../stylesheets/main_page.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-image">
          <h2>ad Astra</h2>
        </div>
          <footer>Copyright &copy; 2019</footer>
      </div>
    );
  }
}

export default MainPage;
