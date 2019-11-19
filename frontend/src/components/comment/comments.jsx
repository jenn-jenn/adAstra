import React from "react";
import CommentListItem from './comment_list_item';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
        .then(()=> this.props.fetchPostComments(1))
    }

    render() {
        return (
            <div>
                {
                    this.props.comments.map( comment =>  
                        <CommentListItem users={this.props.users}
                        comment={comment} key={comment._id}/>)
                }
                <CommentFormContainer postId={1}/>
            </div>
        )
    }   
}

export default Comments;