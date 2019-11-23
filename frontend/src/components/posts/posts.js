import React from 'react';
import PostItems from './post_item';
import PostFormContainer from './post_form_container';
import '../stylesheets/post/post.scss';

class Posts extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchUsers()
            .then(() => this.props.fetchPosts());
    }

    render() {
        const postsEmpty = (
            <div>
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
                    {allPosts.map( (post, id)=> (
                        <li key={id} className="post">
                            <PostItems post={post} users={users}/>  
                       </li>   
                    ))}
                </ul>

            </div>
        );
        return (
            <div className="forum">
                {postDiv}
                <PostFormContainer />
            </div>
        )
    }
};

export default Posts;