import { RECEIVE_POSTS, REMOVE_POST, RECEIVE_A_POST} from "../actions/post_actions";

const PostsReducer = (state = {all: {}, post:{}}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            let newState3 = Object.assign({}, state);
            newState3.all = action.posts.data;
            return newState3;
        case RECEIVE_A_POST:
            let newState2 = Object.assign({}, state);
            newState2.post = action.post.data;
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