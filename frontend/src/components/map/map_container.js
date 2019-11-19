import { connect } from 'react-redux';
import { fetchCosmicObjects } from '../../actions/cosmic_objects_actions';
import Map from './map';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    cosmicObjects: Object.values(state.entities.cosmicObjects)
  };
};

const mdp = dispatch => ({
  fetchCosmicObjects: () => dispatch(fetchCosmicObjects())
})

export default withRouter(connect(msp, mdp)(Map));