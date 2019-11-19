import { connect } from "react-redux";
import { composeComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

// const mapStateToProps = state => {
//     return {

//     }
// }

const MapDispatchToProps = dispatch => {
    return {
      composeComment: data => dispatch(composeComment(data))
    };
}

export default connect(null, MapDispatchToProps)(CommentForm);