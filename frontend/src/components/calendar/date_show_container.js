import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DateShow from "./date_show";
import { fetchDateEvents, deleteAnEvent } from "../../actions/event_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    date: ownProps.match.params.date,
    events: Object.values(state.entities.events),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDateEvents: (date) => dispatch(fetchDateEvents(date)),
    delete: (eventId) => dispatch(deleteAnEvent(eventId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DateShow));

