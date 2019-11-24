import { RECEIVE_IMAGE, RECEIVE_IMAGES, RECEIVE_POST_IMAGES } from '../actions/image_actions';

const ImageReducer = (state = {}, action) => {
    Object.freeze(state);
 
    switch(action.type) {
        case RECEIVE_IMAGES:
            return action.images.data;
        case RECEIVE_POST_IMAGES:
            return action.images.data;
        case RECEIVE_IMAGE:
            let newState = Object.assign({}, state)
            newState[action.image.data._id] = action.image.data
            return newState;
        default:
            return state;
    };
};

export default ImageReducer;