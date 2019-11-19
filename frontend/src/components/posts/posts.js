import React from 'react';
import PostItems from './post_item';
import PostFormContainer from './post_form_container';

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
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
        const postDiv = (
            <div>
                <ul>
                    {allPosts.map( (post, id)=> (
                        <li key={id}>
                            <PostItems post={post}/>  
                       </li>   
                    ))}
                </ul>

            </div>
        );
       
        return (
            <div>
                {postDiv}
                <PostFormContainer />
            </div>
        )
    }
};

export default Posts;