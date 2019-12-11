import { connect } from 'react-redux';
import EventForm from './event_form';
import { createNewEvent } from '../../actions/event_actions';
 
import { withRouter } from 'react-router-dom';
import { fetchLocation } from '../../actions/map_actions';

const mSTP = (state) => {
    let { id: authorId, connectionCode } = state.session.user;
    return {
        authorId,
        connectionCode,
    };
};

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        fetchLocation: crd => dispatch(fetchLocation(crd)),
    };
};

export default withRouter(connect(mSTP, mDTP)(EventForm));