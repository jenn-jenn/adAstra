import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllDates } from "../../actions/calendar_actions";
import Dates from "./dates";
import { fetchEvents, deleteAnEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => {
    
    let dates = Object.values(state.entities.calendars).reverse();
    
   
    return {
        dates,
        events: Object.values(state.entities.events), 
        user: state.session.user    
    };   
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDates: () => dispatch(fetchAllDates()),
        fetchEvents: () => dispatch(fetchEvents()),
        delete: (eventId) => dispatch(deleteAnEvent(eventId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dates));

