import React from "react";
import CommentListItem from './comment_list_item';

class Comments extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount(){
        this.props.fetchPostComments(1);
    }

 render() {
     return (
        <div>
            {
                this.props.comments.map( comment =>  <CommentListItem comment={comment} key={comment._id}/>)
            }
        </div>
     )
 }   
}

export default Comments;