import React from 'react';
import PostItems from './post_item';
import PostFormContainer from './post_form_container';
import '../stylesheets/forum/post_index.scss';

class Posts extends React.Component {

    componentDidMount() {
        this.props.fetchUsers().then(
        () => this.props.fetchPosts()
        )
    }

    render() {
        const postsEmpty = (
            <div className="post-container">
                No posts made
            </div>
        );
    
        if (this.props.posts.length === 0) {
            return postsEmpty;
        }
        
        const allPosts = Object.values(this.props.posts);
        let users = {};
        this.props.users.map(user => {
            users[user._id] = user;
        })
        const postDiv = (
          <div className="post-container">
            <ul className="post-list">
              {allPosts.map((post, id) => (
                <PostItems key={id} post={post} users={users} />
              ))}
            </ul>
          </div>
        );
        return (
            <div className="forum">
                <h1>Welcome to the adAstra forum!</h1>
                <PostFormContainer />
                {postDiv}
            </div>
        )
    }
};

export default Posts;