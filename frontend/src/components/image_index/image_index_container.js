import { connect } from 'react-redux';
import ImageIndex from './image_index';
import { fetchImages, fetchPostImages } from '../../actions/image_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        images: Object.values(state.entities.images),
        errors: state.errors.image
    }
}

const mdp = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        fetchPostImages: (id) => dispatch(fetchPostImages(id))
    }
};

export default connect(msp, mdp)(ImageIndex);