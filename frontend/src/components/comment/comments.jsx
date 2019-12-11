import React, { useEffect } from "react";
import {CommentListItem} from './comment_list_item';
import CommentFormContainer from './comment_form_container';
import '../stylesheets/forum/comments.scss';

export const Comments = props => {
    const { fetchPostComments, fetchUsers, destroyComment, post, comments, users, currentUser } = props

    useEffect(() => {
        fetchUsers()
        .then(() => fetchPostComments(post._id))
    }, [fetchPostComments, fetchUsers, post])

    return (
        <div className="comments">
            {comments.map(comment =>
                <CommentListItem
                    users={users}
                    currentUser={currentUser}
                    comment={comment}
                    key={comment._id}
                    destroyComment={destroyComment} />
            )}
            <CommentFormContainer postId={post._id} />
        </div>
    )
}