import { connect } from 'react-redux';
import EventForm from './event_form';
import { createNewEvent, clearErrors } from '../../actions/event_actions';
 
import { withRouter } from 'react-router-dom';
import { fetchLocation } from '../../actions/map_actions';

const mSTP = (state) => {
    let { id: authorId, connectionCode } = state.session.user;
    debugger
    return {
        authorId,
        connectionCode,
        errors: Object.values(state.errors.event)
    };
};

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        fetchLocation: crd => dispatch(fetchLocation(crd)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default withRouter(connect(mSTP, mDTP)(EventForm));