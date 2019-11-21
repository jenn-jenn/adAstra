import { connect } from "react-redux";

import { 
    fetchAllDates, 
    fetchDate, 
    editDate, 
    deleteDate 
} from "../../actions/calendar_actions";

import Dates from "./dates";

const mapStateToProps = (state) => {
    let dates = Object.values(state.dates).reverse();
    let user = state.session.user;

    return {
        dates,
        user
    };   
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDates: (userId) => dispatch(fetchAllDates(userId)),
        fetchDate: (dateId) => dispatch(fetchDate(dateId)),
        editDate: (dateId, date) => dispatch(editDate(dateId, date)),
        deleteDate: (dateId) => dispatch(deleteDate(dateId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dates);

