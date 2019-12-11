import { connect } from "react-redux";
import {
  fetchPostComments,
  destroyComment
} from "../../actions/comment_actions";
import { fetchUsers } from "../../actions/user_actions";
import {Comments} from './comments';

const mapStateToProps = state => {
    return {
        comments: Object.values(state.entities.comments.post),
        currentUser: state.session.user,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchPostComments: postid => dispatch(fetchPostComments(postid)),
      fetchUsers: () => dispatch(fetchUsers()),
      destroyComment: id => dispatch(destroyComment(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);