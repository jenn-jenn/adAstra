import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, fetchAPost } from '../../actions/post_actions';


const msp = (state, ownProps) => {
  // debugger
  return {
    posts: state.entities.posts,
    postId: ownProps.match.params.postId
  };
};

const mdp = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchAPost: (postId) => dispatch(fetchAPost(postId))
});

export default connect(msp, mdp)(PostShow);