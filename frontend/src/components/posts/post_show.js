import React from 'react';
import CommentsContainer  from '../comment/comment_container';
import ImageUploadContainer from '../image_upload/image_upload_container';
import ImageIndexContainer from '../image_index/image_index_container';
import '../stylesheets/forum/post_show.scss';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
      this.props.fetchAPost(this.props.postId);
    }

  delete() {
    this.props.deleteAPost(this.props.postId).then(() => {
      this.props.history.push("/posts");
    });
  }

  render() {
    debugger
    const post = this.props.post;
    const user = this.props.user;

    if (!post) {
      return null;
    }
    const date = new Date(post.date);
    return (
      <div className="post-show">
        <div className="post-show-content">
          <div className="post-show-header">
            <h1>
              <i className="fas fa-meteor" alt="meteor" />
              {post.title}
            </h1>
            <div className="post-show-footer">
              <h4>Posted by {user.handle} | {`${date.getHours()}:${date.getMinutes()} ${date.toDateString()}`}</h4>
              <i className="fa fa-trash" onClick={this.delete}/>
            </div>
          </div>
          <p>{post.body}</p>
        </div>
        <div>
          <ImageUploadContainer post={post} />
          <ImageIndexContainer post={post}/>
          </div>
        <CommentsContainer post={post}/>
      </div>
    );
  }
}

export default PostShow;