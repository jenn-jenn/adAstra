import { getAllComments, getCommentsbyPost, writeComment} from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

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

