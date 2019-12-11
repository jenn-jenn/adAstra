import { RECEIVE_POST_ERRORS, CLEAR_ERRORS } from '../actions/post_actions';

const PostErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            const newState = Object.assign({}, state);
            delete newState.errors;
            return [];
        default:
            return state;
    };
};

export default PostErrorReducer;