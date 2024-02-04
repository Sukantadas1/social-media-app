// components/Home.js
import React from "react";

const Home = ({ posts }) => {
  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
            <img
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={`Post ${post.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
