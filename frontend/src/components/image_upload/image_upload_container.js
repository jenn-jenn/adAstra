import { connect } from 'react-redux';
import { uploadImage, fetchImages } from '../../actions/image_actions';
import ImageUpload from './image_upload';

const msp = (state) => {
    debugger
    return {

    };
};

const mdp = (dispatch) => ({
    fetchImages: () => dispatch(fetchImages()),
    uploadImage: (image) => dispatch(uploadImage(image))
})

export default connect(msp, mdp)(ImageUpload);