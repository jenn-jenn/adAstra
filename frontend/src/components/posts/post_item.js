import React from 'react';
import { Link } from 'react-router-dom';


const PostItems = ({ post, users }) => {
  const date = new Date(post.date);
  const user = users[post.author];
  
  return (
    <li className="post">
      <div className="post-header">
        <Link
          to={{
            pathname: `/posts/${post._id}`
          }}
        >
          <h2>
            <i className="fas fa-meteor" alt="meteor" />
            {post.title}
          </h2>
        </Link>
        <h4>Posted by {user.handle} | {`${date.getHours()}:${date.getMinutes()} ${date.toDateString()}`}</h4>
      </div>
      <p>{post.body}</p>
    </li>
  );
};

export default PostItems;