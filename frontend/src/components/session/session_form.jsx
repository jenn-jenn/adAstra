import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../stylesheets/session/session_form.scss';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   this.props.clearErrors();
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      email: "guest@guest.com",
      password: "password",
    }, () => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user)
        .then(() => this.props.history.push("/main"));
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-container flex-center">

        <span className="logo">adAstra</span>

        <div className="links">
          <Link to="/login" className="session-link"><span className={this.props.formType === "login" ? "active" : "inactive"}>LOG IN</span>
          </Link>

          <Link to="/signup" className="session-link"><span className={this.props.formType === "signup" ? "active" : "inactive"}>SIGN UP</span>
          </Link>
        </div><br />

        <div className="user-auth-errors">
          {this.renderErrors()}
        </div>

        <form className="form flex-center">

          <input
            className="input"
            onChange={this.update("email")}
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.email}
          />

          <input
            className={this.props.formType === "signup" ? "input email" : "hidden"}
            onChange={this.update("username")}
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.username}
          />

          <input
            className="input"
            onChange={this.update("password")}
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
          />

          <input
            className={this.props.formType === "signup" ? "input email" : "hidden"}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
            type="password"
            name="password2"
            value={this.state.password2}
          />

          <input
            className="input submit"
            onClick={this.handleSubmit}
            type="submit"
            value={this.props.formHeader}
          />

          <input
            className={this.props.formType === "login" ? "input submit" : "hidden"}
            onClick={this.handleDemo}
            type="submit"
            value="Guest Login"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);