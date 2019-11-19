import { connect } from "react-redux";
import calendarForm from './calendar_form';
import { createDate, fetchAllDates, fetchDate, editDate } from "../../actions/calendar_actions";

const mapStateToProps = (state) => {
    let {id:authorId, connectionCode} = state.session.user;

    return {
        authorId, 
        connectionCode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createDate: date => dispatch(createDate(date)),
        fetchAllDates: (userId) => dispatch(fetchAllDates(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(calendarForm);