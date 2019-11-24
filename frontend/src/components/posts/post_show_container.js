import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, deleteAPost, fetchAPost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';


const msp = (state, ownProps) => {
  return {
    user: ownProps.location.state.user,
    post: state.entities.posts.post,
    postId: ownProps.match.params.postId
  };
};

const mdp = (dispatch) => ({
  fetchAPost: (postId) => dispatch(fetchAPost(postId)),
  deleteAPost: (postId) => dispatch(deleteAPost(postId))
});

export default connect(msp, mdp)(PostShow);