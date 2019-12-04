import { connect } from 'react-redux';
import { fetchCosmicObjects } from '../../actions/cosmic_objects_actions';
import { withRouter } from 'react-router-dom';
import CosmicObjectsIndex from './cosmicObjectsIndex';

const msp = (state) => {
    return {
        cosmicObjects: Object.values(state.entities.cosmicObjects)
    };
};

const mdp = dispatch => ({
    fetchCosmicObjects: () => dispatch(fetchCosmicObjects())
})

export default withRouter(connect(msp, mdp)(CosmicObjectsIndex));