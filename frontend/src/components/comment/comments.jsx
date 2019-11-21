import React from "react";
import CommentListItem from './comment_list_item';
import CommentFormContainer from './comment_form_container';
import '../stylesheets/forum/comments.scss';

class Comments extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
        .then(()=> this.props.fetchPostComments(this.props.post._id))
    }

    render() {
        return (
            <div className="comments">
                {
                    this.props.comments.map( comment =>  
                        <CommentListItem 
                        users={this.props.users}
                        currentUser = {this.props.currentUser}
                        comment={comment} 
                        key={comment._id}
                        destroyComment={this.props.destroyComment}/>)
                }
                <CommentFormContainer postId={this.props.post._id}/>
            </div>
        )
    }   
}

export default Comments;