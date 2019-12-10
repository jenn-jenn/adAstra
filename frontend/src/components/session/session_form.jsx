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
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }
i
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/main");
    }

    this.setState({ errors: nextProps.errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === "login") {
      this.props.login(user)
    } else {
      this.props.signup(user)
        .then(res => {
          if(!res.errors) this.props.login(user)
        })
    }
  }

  handleDemo(e) {
    e.preventDefault();

    let i = 0;
    let j = 0;
    let demoEmail = "guest@guest.com";
    let demoPassword = "password";

    const typeUser = () => {
      let timeout;
      if (i < demoEmail.length) {
        document.getElementById("email").value += demoEmail.charAt(i);
        i++;
        timeout = setTimeout(typeUser, 150);
      } else {
        clearTimeout(timeout)
      }
    }

    const typePw = () => {
      let timeout;
      if (j < demoPassword.length) {
        document.getElementById("password").value += demoPassword.charAt(j);
        j++;
        timeout = setTimeout(typePw, 200);
      } else {
        clearTimeout(timeout)
      }
    }

    if (this.props.formType === 'login') {
      typeUser();

      window.setTimeout(() => {
        typePw();
      }, 200)

      window.setTimeout(() => {
        this.setState({ email: "guest@guest.com", password: "password"}, () => {
          const user = Object.assign({}, this.state);
          this.props.login(user)
            .then(() => this.props.history.push("/main"));
        });
      }, 2000)
    }
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

        <div id="user-auth-errors">
          {this.renderErrors()}
        </div>

        <form className="form flex-center">

          <input
            id="email"
            className="input"
            onChange={this.update("email")}
            placeholder="Email"
            type="text"
            name="email"
          />

          <input
            className={this.props.formType === "signup" ? "input email" : "hidden"}
            onChange={this.update("handle")}
            placeholder="Username"
            type="text"
            name="handle"
            value={this.state.handle}
          />

          <input
            id="password"
            className="input"
            onChange={this.update("password")}
            placeholder="Password"
            type="password"
            name="password"
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