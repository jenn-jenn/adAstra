import { connect } from 'react-redux';
import EventForm from './event_form'; 
import { withRouter } from 'react-router-dom';
import { createNewEvent, fetchDateEvents, clearErrors } from '../../actions/event_actions';
import { fetchLocation } from '../../actions/map_actions';

const mSTP = (state) => {
    // debugger
    return {
        errors: Object.values(state.errors.event)
    };
};

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        fetchDateEvents: (date) => dispatch(fetchDateEvents(date)),
        fetchLocation: crd => dispatch(fetchLocation(crd)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default withRouter(connect(mSTP, mDTP)(EventForm));