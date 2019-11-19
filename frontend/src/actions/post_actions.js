import * as PostUtil from '../util/post_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_A_POST = "RECEIVE_A_POST";
export const REMOVE_POST = "REMOVE_POST";


export const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    };
};

export const receiveNewPost = (post) => {
    return {
        type: RECEIVE_NEW_POST,
        post
    };
};

export const receiveAPost = (post) => {
    return {
        type: RECEIVE_A_POST,
        post
    };
};

// export const removePost = postId => {
//   return {
//     type: REMOVE_POST,
//     postId
//   };
// };

// ----------------------------
export const fetchPosts = () => (dispatch) => {
    return PostUtil.getPosts()
            .then((posts) => dispatch(receivePosts(posts)))
            .catch((err) => console.log(err));
};

export const fetchAPost = (postId) => (dispatch) => {
    return PostUtil.getAPost(postId)
        .then((post) => dispatch(receiveAPost(post)))
        .catch((err) => console.log(err));
};

export const createNewPost = (data) => (dispatch)=> {
    return PostUtil.writePost(data)
            .then(post => dispatch(receiveNewPost(post)))
            .catch(err => console.log(err));
};

// export const deletePost = (postId) => (dispatch) => {
//     return PostUtil.deletePost(postId)
//             .then(postId => dispatch(removePost(postId)))
//             .catch(err => console.log(err));
// };