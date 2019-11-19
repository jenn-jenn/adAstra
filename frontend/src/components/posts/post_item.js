import React from 'react';
// import PostShowContainer from './post_show_container';
import { Link } from 'react-router-dom';


const PostItems = ({ post }) => {
  const date = new Date(post.date);

  return(
    <div>
      <Link to={{
        pathname: `/posts/${post._id}`,
        state:{ post: post }
      }}>
        <h3>{post.title}</h3>
      </Link>
      <h4>{post._id}</h4>
      <h4>{post.author}</h4>
      <h4>{date.toDateString()}</h4>
      <p>{post.body}</p>
    </div>
  )
};

export default PostItems;