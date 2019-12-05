import { connect } from 'react-redux';
import { uploadImage, fetchImages } from '../../actions/image_actions';
import ImageUpload from './image_upload';

const mdp = (dispatch) => ({
    fetchImages: () => dispatch(fetchImages()),
    uploadImage: (image) => dispatch(uploadImage(image))
})

export default connect(null, mdp)(ImageUpload);