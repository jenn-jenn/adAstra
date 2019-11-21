import { connect } from "react-redux";
import Footer from "./footer";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, null)(Footer);