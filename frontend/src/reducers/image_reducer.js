import { RECEIVE_IMAGE, RECEIVE_IMAGES, RECEIVE_POST_IMAGES } from '../actions/image_actions';

const ImageReducer = (state = { post: {}}, action) => {
    Object.freeze(state);
 
    switch(action.type) {
        case RECEIVE_IMAGES:
            debugger
            return action.images.data;
        case RECEIVE_POST_IMAGES:
            debugger
            return Object.assign({post: action.image.data})
        case RECEIVE_IMAGE:
            debugger
            let newState = Object.assign({}, state)
            newState[action.image.data._id] = action.image.data.src;
            return newState;
        default:
            return state;
    };
};

export default ImageReducer;