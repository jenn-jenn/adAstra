// src/components/session/signup_form_container.js

import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: user => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
