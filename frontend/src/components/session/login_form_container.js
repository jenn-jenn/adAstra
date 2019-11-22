// src/components/session/login_form_container.js

import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    formType: "login",
    formHeader: "Log In"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
