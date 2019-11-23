import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages } from '../../actions/image_actions';


const msp = (state) => {
    debugger
    return {
        images: Object.values(state.entities.images)
    }
}

const mdp = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages())
    }
};

export default connect(msp, mdp)(ImageIndex);