import { connect } from "react-redux";
import { fetchAllDates } from "../../actions/calendar_actions";
import Dates from "./dates";
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => {
    let dates = Object.values(state.dates).reverse();
    
    return {
        dates,
        events: Object.values(state.events)    
    };   
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDates: () => dispatch(fetchAllDates()),
        fetchEvents: () => dispatch(fetchEvents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dates);

