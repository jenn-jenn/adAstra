import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewEvent } from '../../actions/event_actions';
import { fetchLocation } from '../../actions/map_actions';
import EventForm from './event_form';

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        fetchLocation: crd => dispatch(fetchLocation(crd)),
    };
};

export default withRouter(connect(null, mDTP)(EventForm));