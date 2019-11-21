import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';
import { fetchUsers } from '../../actions/user_actions';


const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: Object.values(state.users)
    };
};

const mdp = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(msp, mdp)(Posts);
