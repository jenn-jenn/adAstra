import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/nav/nav.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleLogout(e) {
    return (e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right">
          <Link to={"/posts"}><button>Forum</button></Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <Link to={"/signup"}><button>Signup</button></Link>
          <Link to={"/login"}><button>Login</button></Link>
        </div>
      );
    }
  }

  searchBar() {
    if (this.props.loggedIn) {
      return (
        <div className="search-overlay">
          <input
            id="feature-filter"
            type="text"
            placeholder="Search for the stars..."
          />
          <a href="#/search" className="fa fa-search" alt="search"/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-header-components">
          <Link to="/main">
            <h2>adAstra</h2>
          </Link>
        </div>
        <a href="#/main" className="fa fa-star-and-crescent" alt="star"/>
        <a href="#/main" className="fas fa-star" alt="star"/>
        <a href="#/main" className="fa fa-moon" alt="star"/>
        <a href="#/main" className="fa fa-sun" alt="sunset"/>
        <a href="#/main" className="fas fa-meteor" alt="meteor"/>
        {this.searchBar()}
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
