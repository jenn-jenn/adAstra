import React from "react";

export const CommentListItem = props => {
  const handleDelete = (e) => {
    e.preventDefault();
    props.destroyComment(e.target.id)
  }

  const date = new Date(props.comment.date);

  const deletebutton = props.currentUser.id === props.comment.userId ? 
  <i onClick={handleDelete}
      id={props.comment._id}
      className="fa fa-trash" />
    : "";

  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-user">
          <i className="fas fa-user-circle" />
          {props.users[props.comment.userId].handle}
        </div>

        <div className="comment-footer">
          {deletebutton}
          <h4>Posted {`${date.getHours()}:${date.getMinutes()} ${date.toDateString()}`}</h4>
        </div>
      </div>

      <span>{props.comment.body}</span>
    </div>
  );
}