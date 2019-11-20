import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/nav/nav.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
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
        <button onClick={this.logoutUser}>Logout</button>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}><button>Signup</button></Link>
          <Link to={"/login"}><button>Login</button></Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-header-text">
            <a href="#/" className="fa fa-star-and-crescent" alt="star"/>
          <Link to="/">
            <h2>adAstra</h2>
          </Link>
            <a href="#/" className="fa fa-meteor" alt="meteor"/>
        </div>
        <div className="search-overlay">
          <input
            id="feature-filter"
            type="text"
            placeholder="Search for the stars..."
          />
        </div>
        <div className="nav-right">
          <a href="#/search" className="fa fa-search" alt="search"/>
          <a href="#/calender" className="fa fa-calendar" alt="calendar"/>
          <a href="#/posts" className="fa fa-users" alt="forum"/>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
