import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import NavBar from "./navbar";
import { fetchCosmicObjects } from "../../actions/cosmic_objects_actions";



const mapStateToProps = state => {
  return {
  loggedIn: state.session.isAuthenticated,
  cosmic: state.entities.cosmicObjects,
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchCosmicObjects: () => dispatch(fetchCosmicObjects()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));