import React, { useEffect } from "react";
import {CommentListItem} from './comment_list_item';
import CommentFormContainer from './comment_form_container';
import '../stylesheets/forum/comments.scss';

export const Comments = props => {

    useEffect(() => {
        props.fetchUsers()
        .then(() => props.fetchPostComments(props.post._id))
    }, [])

    return (
        <div className="comments">
            {props.comments.map(comment =>
                <CommentListItem
                    users={props.users}
                    currentUser={props.currentUser}
                    comment={comment}
                    key={comment._id}
                    destroyComment={props.destroyComment} />
            )}
            <CommentFormContainer postId={props.post._id} />
        </div>
    )
}