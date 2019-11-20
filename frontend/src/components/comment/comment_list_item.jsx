import React from "react";

class CommentListItem extends React.Component {

  render() {
    return (
      <div>
          <h2>
            {this.props.comment.body}
          </h2>
          <div>
            -{this.props.users[this.props.comment.userId].handle}
          </div>
          <div>
            {this.props.comment.date}
          </div>
      </div>
    );
  }
}

export default CommentListItem;
