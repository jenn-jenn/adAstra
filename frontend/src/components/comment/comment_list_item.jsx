import React from "react";

class CommentListItem extends React.Component {

  render() {
    return (
      <div>
        {this.props.comment.body}
        {this.props.users[this.props.comment.userId].handle}
      </div>
    );
  }
}

export default CommentListItem;
