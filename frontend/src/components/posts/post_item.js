import React from 'react';

const POstItem = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <h4>{post.author}</h4>
    <h4>{post.date}</h4>
    <p>{post.body}</p>
  </div>
);

export default POstItem;