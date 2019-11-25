import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/nav/nav.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.logoLink = this.logoLink.bind(this);
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
          <Link to={"/events/new"}><button>Event</button></Link>
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
          <i className="fa fa-search"/>
        </div>
      )
    }
  }

  logoLink() {
    if (this.props.loggedIn) {
      return (
        <Link to="/main">
          <h2>adAstra</h2>
        </Link>
      )
    } else {
      return (
        <Link to="/">
          <h2>adAstra</h2>
        </Link>
      )
    }
  }
  
  render() {
    return (
      <div className="nav">
        <div className="nav-header-components">
          {this.logoLink()}
        </div>
        <i className="fa fa-star-and-crescent"/>
        <i className="fas fa-star"/>
        <i className="fa fa-moon"/>
        <i className="fa fa-sun"/>
        <i className="fas fa-meteor"/>
        {this.searchBar()}
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
