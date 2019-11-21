import { RECEIVE_POSTS, REMOVE_POST, RECEIVE_A_POST} from "../actions/post_actions";

const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts.data;
        case RECEIVE_A_POST:
            let newState2 = Object.assign({}, state);
            newState2[action.post.data.id] = action.post.data;
            return newState2;
        case REMOVE_POST:
            let newState = Object.assign({}, state);
            delete newState[action.post.data.id];
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;