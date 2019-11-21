import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, deleteAPost } from '../../actions/post_actions';


const msp = (state, ownProps) => {
  return {
    posts: state.entities.posts,
    postId: ownProps.match.params.postId
  };
};

const mdp = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deleteAPost: (postId) => dispatch(deleteAPost(postId))
});

export default connect(msp, mdp)(PostShow);