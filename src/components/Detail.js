import React from "react";

const Detail = ({ post }) => {
  return (
    <div>
      <h2>Detail Page</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default Detail;
