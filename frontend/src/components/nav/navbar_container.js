import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import NavBar from "./navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));