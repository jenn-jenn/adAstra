import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dates from "./dates";
import { deleteAnEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => {
    
    // let dates = Object.values(state.entities.calendars).reverse();
    
   
    return {
        // dates,
        user: state.session.user
    };   
};

const mapDispatchToProps = dispatch => {
    return {
        delete: (eventId) => dispatch(deleteAnEvent(eventId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dates));

