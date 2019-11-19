import { RECEIVE_POSTS, RECEIVE_NEW_POST, REMOVE_POST} from "../actions/post_actions";

const PostsReducer = (state = { all: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_POSTS:
            newState.all = action.posts.data;
            return newState;
        case RECEIVE_NEW_POST:
            newState.new = action.post.data;
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;