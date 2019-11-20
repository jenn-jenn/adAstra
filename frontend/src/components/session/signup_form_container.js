// src/components/session/signup_form_container.js

import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    formType: "signup",
    formHeader: "Sign Up"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
