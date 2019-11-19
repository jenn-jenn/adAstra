import React from "react";
import CommentListItem from './comment_list_item';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {

    componentDidMount(){
        this.props.fetchPostComments(1);
    }

 render() {
     return (
        <div>
            {
                this.props.comments.map( comment =>  <CommentListItem comment={comment} key={comment._id}/>)
            }
            <CommentFormContainer />
        </div>
     )
 }   
}

export default Comments;