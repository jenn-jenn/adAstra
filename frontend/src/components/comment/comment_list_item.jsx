import React from "react";

class CommentListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.destroyComment(e.target.id)
  }

  render() {
    let deletebutton = this.props.currentUser.id === this.props.comment.userId ? <button onClick={this.handleDelete} id={this.props.comment._id}>Delete Comment</button> : "";
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
          {deletebutton}
      </div>
    );
  }
}

export default CommentListItem;
