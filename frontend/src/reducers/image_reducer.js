import { RECEIVE_IMAGE, RECEIVE_IMAGES } from '../actions/image_actions';

const ImageReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_IMAGES:
            return action.images.data;
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