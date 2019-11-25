import { RECEIVE_IMAGE_ERRORS } from '../actions/image_actions';


const ImageErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_IMAGE_ERRORS:
            return action.erors;
        default:
            return state;
    };
};

export default ImageErrorReducer;