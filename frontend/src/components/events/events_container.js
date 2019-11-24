import { connect } from 'react-redux';
import React from 'react';
import { fetchUsers } from '../../actions/user_actions';
import { 
    fetchEvents, 
    fetchDateEvents
} from '../../actions/event_actions';
import Events from './events';

const mapStateToProps = state => {
    return {
        events: Object.values(state.dates.event), 
        currentUser: state.session.user,
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDateEvents: eventId => dispatch(fetchDateEvents(eventId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchEvents: () => dispatch(fetchEvents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
