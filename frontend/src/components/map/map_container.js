import { connect } from 'react-redux';
import { fetchGuide } from '../../actions/guide_actions';
import Map from './map';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return ({
    guide: state.entities.guides[ownProps.match.params.guideId]
  })
};

const mdp = dispatch => ({
  fetchGuide: guideId => dispatch(fetchGuide(guideId))
})

export default withRouter(connect(msp, mdp)(Map));