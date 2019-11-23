import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "./footer";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default withRouter(connect(mapStateToProps, null)(Footer));