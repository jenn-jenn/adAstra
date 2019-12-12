import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewEvent, fetchDateEvents } from '../../actions/event_actions';
import { fetchLocation } from '../../actions/map_actions';
import EventForm from './event_form';

const mDTP = (dispatch) => {
    return {
        createNewEvent: (data) => dispatch(createNewEvent(data)),
        fetchDateEvents: (date) => dispatch(fetchDateEvents(date)),
        fetchLocation: crd => dispatch(fetchLocation(crd)),
    };
};

export default withRouter(connect(null, mDTP)(EventForm));