import { getAllComments, getCommentsbyPost, writeComment, deleteComment} from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => {
    return ({
        type: RECEIVE_COMMENTS,
        comments
    })
}

export const receivePostComment = comments => {
    return ({
        type: RECEIVE_POST_COMMENTS,
        comments
    })
}

export const receiveNewComment = comment => {
    return {
      type: RECEIVE_NEW_COMMENT,
      comment
    };
}

export const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchComments = () => dispatch =>
    getAllComments()
    .then( comments => dispatch(receiveComments(comments)))
    .catch( err => dispatch(receiveErrors(err)) );

export const fetchPostComments = id => dispatch =>
    getCommentsbyPost(id)
    .then(comments => dispatch(receivePostComment(comments)))
    .catch(err => dispatch(receiveErrors(err)));

export const composeComment = data => dispatch =>
    writeComment(data)
    .then(comment => dispatch(receiveNewComment(comment)))
    .catch(err => dispatch(receiveErrors(err)));

export const destroyComment = id => dispatch =>
    deleteComment(id)
    .then(comment => dispatch(removeComment(id)))
    .catch(err => dispatch(receiveErrors(err)));