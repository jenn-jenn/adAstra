import React from 'react';
import PostItem from './post_item';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        const postDiv = (
            <div>
                <ul>
                    {this.state.posts.map( (post, id) => (
                        <li key={id}>
                            <PostItem post={post}/>
                        </li>
                    ))}
                </ul>
                
            </div>
        );
        const postsEmpty = (
            <div>
                No posts made
            </div>
        )

        if(this.state.posts.length === 0) {
            return postsEmpty;
        } else {
            return postDiv;
        }
    }
};

export default Posts;