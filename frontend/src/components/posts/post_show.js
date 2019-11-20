import React from 'react';
import  CommentsContainer  from '../comment/comment_container';

class PostShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();

  }

  render() {  
    const post = this.props.posts[this.props.postId];

    if(!post){
      return null;
    }
    const date = new Date(post.date);
    
    return (
      <div>
        <h1>{post.title}</h1>
        <h3>{post.author}</h3>
        <h4>{date.toDateString()}</h4>
        <p>{post.body}</p>
        <CommentsContainer post={post}/>
      </div>
    )
  }
}

export default PostShow;