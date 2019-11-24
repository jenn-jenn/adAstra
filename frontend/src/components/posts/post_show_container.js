import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, deleteAPost, fetchAPost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';


const msp = (state, ownProps) => {
  debugger
  return {
    posts: state.entities.posts.all,
    postId: ownProps.match.params.postId,
    users: state.users
  };
};

const mdp = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchAPost: (postId) => dispatch(fetchAPost(postId)),
  deleteAPost: (postId) => dispatch(deleteAPost(postId))
});

export default connect(msp, mdp)(PostShow);