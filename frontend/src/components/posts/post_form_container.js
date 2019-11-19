import { connect } from 'react-redux';
import { createNewPost, fetchPosts } from '../../actions/post_actions';
import PostForm from './post_form';


const msp = (state) => {
    return {
        currentUser: state.session.user,
        newPost: state.posts.new
    };
};


const mdp = (dispatch) => ({
    createNewPost: data => dispatch(createNewPost(data)),
    fetchPosts: data => dispatch(fetchPosts()),
});

export default connect(msp, mdp)(PostForm);
