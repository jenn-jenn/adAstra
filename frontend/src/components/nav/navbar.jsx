import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/nav/nav.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchInput: "",
      isDisplay: false
    };
    
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.logoLink = this.logoLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.update = this.update.bind(this);
    this.handleUndisplayList = this.handleUndisplayList.bind(this);
    this.handleDisplayList = this.handleDisplayList.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/constellations/${this.state.searchInput}`);
    this.setState({ searchInput: '' });
  }

  handleEnter(e) {
    if (e.keyCode === 13) this.handleSubmit(e);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right">
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <Link to={"/signup"}><button>Sign Up</button></Link>
          <Link to={"/login"}><button>Login</button></Link>
        </div>
      );
    }
  }

  handleDisplayList(e) {
    e.stopPropagation();
    setTimeout(() => {
      this.setState({ isDisplay: true })
    }, 150)
  }

  handleUndisplayList() {
    setTimeout(() => {
      this.setState({ isDisplay: false, searchInput: '' });
    }, 150)
  }

  searchBar() {
    let cosmicObjects;
    let display = "";
  
    if (this.props.cosmic.length !== undefined && this.state.isDisplay) {
      cosmicObjects = this.props.cosmic.filter(el => el.target.name.toLowerCase().includes(this.state.searchInput))
      display = cosmicObjects.length > 0 ? cosmicObjects.sort().map((el, i) => <a href={`#/constellations/${el.target.name}`} key={i}>{el.target.name}</a>) : ""
    }
    if (display.length === 0) display = "";

    
    if (this.props.loggedIn) {
      return (
        <div className="search-overlay">
          <div className="searchList">
            {display}
          </div>
          <form action="post" onSubmit={this.handleSubmit}>
            <input
              id="feature-filter"
              type="text"
              onChange={this.update("searchInput")}
              onFocus={this.handleDisplayList}
              onBlur={this.handleUndisplayList}
              placeholder="Search for the stars..."
              autoComplete="off"
              value={this.state.searchInput}
              onKeyDown={this.handleEnter}
            />
          </form>
          <i className="fa fa-search" onClick={this.handleSubmit} />
        </div>
      );
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
  
  navLink() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-links">
          <div>
            <a href="#/posts"><i className="fas fa-comments" />
            <span>Forum</span></a>
          </div>
          <div>
            <a href="#/constellations"><i className="fas fa-star" />
            <span>Constellations</span></a>
          </div>
          <div className="create-event-icon">
            <i className="fas fa-calendar-plus create-event-icon" />
            <span className="create-event-icon">Create Event</span>
          </div>
          <div>
            <a href="#/about" ><i className="fas fa-users" />
            <span>About</span></a>
          </div>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="nav">
        <div className="nav-header-components">{this.logoLink()}</div>
        {this.navLink()}
        {this.searchBar()}
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
