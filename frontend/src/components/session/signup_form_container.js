import { connect } from "react-redux";
import { signup, clearErrors, login } from "../../actions/session_actions";
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
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
