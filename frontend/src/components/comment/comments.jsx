import React from "react";
import CommentListItem from './comment_list_item';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
        .then(()=> this.props.fetchPostComments(this.props.post._id))
    }

    render() {
        return (
            <div>
                {
                    this.props.comments.map( comment =>  
                        <CommentListItem users={this.props.users}
                        comment={comment} key={comment._id}/>)
                }
                <CommentFormContainer postId={this.props.post._id}/>
            </div>
        )
    }   
}

export default Comments;