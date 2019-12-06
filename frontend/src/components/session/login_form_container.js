import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
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
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
