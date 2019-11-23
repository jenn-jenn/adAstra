import React from 'react';
import CommentsContainer  from '../comment/comment_container';
import ImageUploadContainer from '../image_upload/image_upload_container';
import ImageIndex from '../image_index/image_index';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.delete = this.delete.bind(this);


  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  delete() {
    this.props.deleteAPost(this.props.postId).then(() => {
      this.props.history.push("/posts");
    });
  }

  render() {
    const post = this.props.posts[this.props.postId];

    if (!post) {
      return null;
    }
    const date = new Date(post.date);

    return (
      <div>
        <h1>{post.title}</h1>
        <h3>{post.author}</h3>
        <h4>{date.toDateString()}</h4>
        <p>{post.body}</p>
        <ImageUploadContainer post={post}/>
        <input onClick={this.delete} type="submit" value="Delete" />
        <ImageIndex />
        <CommentsContainer post={post} />
      </div>
    );
  }
}

export default PostShow;