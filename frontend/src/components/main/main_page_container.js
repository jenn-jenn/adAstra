import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import MainPage from './main_page';


const mSTP = (state) => {
  return {
    events: Object.values(state.entities.events)
  };
};

const mDTP = (dispatch) => {
    return {
       fetchEvents: () => dispatch(fetchEvents())
    };
};

export default connect(mSTP, mDTP)(MainPage);