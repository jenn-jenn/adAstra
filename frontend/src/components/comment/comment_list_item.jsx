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
    let deletebutton = this.props.currentUser.id === this.props.comment.userId ? 
      <i onClick={this.handleDelete}
        id={this.props.comment._id}
        className="fa fa-trash"/>
      : "";

    const date = new Date(this.props.comment.date);
    return (
      <div className="comment">
        <div className="comment-header">
          <div className="comment-user">
            <i className="fas fa-user-circle" />
            {this.props.users[this.props.comment.userId].handle}
          </div>
        
            <div className="comment-footer">
              {deletebutton}
              <h4>Posted {`${date.getHours()}:${date.getMinutes()} ${date.toDateString()}`}</h4>
            </div>
        </div>

        <span>{this.props.comment.body}</span>
      </div>
    );
  }
}

export default CommentListItem;
