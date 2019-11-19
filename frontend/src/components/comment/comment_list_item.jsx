import React from "react";

class CommentListItem extends React.Component {

  render() {
    return (
    <div> {this.props.comment.body}</div>
    );
  }
}

export default CommentListItem;
