import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import MainPage from './main_page';


const mSTP = (state) => {
  return {
    events: state.entities.events,
    location: state.weather
  };
};

const mDTP = (dispatch) => {
    return {
       fetchEvents: () => dispatch(fetchEvents())
    };
};

export default connect(mSTP, mDTP)(MainPage);