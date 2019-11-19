import React from "react";

class CommentListItem extends React.Component {

  render() {
    return (
      <div>
          <div>
            {this.props.comment.body}
          </div>
          <div>
            -{this.props.users[this.props.comment.userId].handle}
          </div>
      </div>
    );
  }
}

export default CommentListItem;
