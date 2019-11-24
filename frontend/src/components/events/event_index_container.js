import React from "react";
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchDateEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDateEvents: (dateId) => dispatch(fetchDateEvents(dateId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);