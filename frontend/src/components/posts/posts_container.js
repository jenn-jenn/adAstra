import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';

const msp = (state) => {
    // debugger
    return {
        posts: Object.values(state.entities.posts)
    };
};

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(msp, mdp)(Posts);
