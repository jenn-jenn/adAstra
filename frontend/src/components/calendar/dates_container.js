import { connect } from "react-redux";
import { fetchAllDates } from "../../actions/calendar_actions";
import Dates from "./dates";
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => {
    
    let dates = Object.values(state.entities.calendars).reverse();
    
    debugger
    return {
        dates,
        events: Object.values(state.entities.events), 
        user: state.session.user    
    };   
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDates: () => dispatch(fetchAllDates()),
        fetchEvents: () => dispatch(fetchEvents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dates);

