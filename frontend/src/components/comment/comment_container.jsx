import { connect } from "react-redux";
import { fetchPostComments } from "../../actions/comment_actions";
import { fetchUsers } from "../../actions/user_actions";
import Comments from './comments';

const mapStateToProps = state => {
    return {
        comments: Object.values(state.comments.post),
        currentUser: state.session.user,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchPostComments: postid => dispatch(fetchPostComments(postid)),
      fetchUsers: () => dispatch(fetchUsers()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);