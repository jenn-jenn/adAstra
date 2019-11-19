import { connect } from "react-redux";
import { fetchPostComments } from "../../actions/comment_actions";
import Comments from './comments';

const mapStateToProps = state => {
    return {
        comments: Object.values(state.comments.post),
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchPostComments: postid => dispatch(fetchPostComments(postid))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);