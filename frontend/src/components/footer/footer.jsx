import React from "react";
import '../stylesheets/main_page.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.footer = this.footer.bind(this);
  }

  footer() {
    if (this.props.loggedIn) {
      return (
        <footer>
          <div>
            Made with MongoDB, if, React, and Node.js in San Francisco.
          </div>
          <div>
            &copy; Team Astra 2019
          </div>
        </footer>
      )
    }
  }

  render() {
    return (
      <div>
        {this.footer()}
      </div>
    )
  }
}

export default Footer;
