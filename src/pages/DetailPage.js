import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Detail from "../components/Detail";

const DetailPage = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id.toString() === id);

  return post ? <Detail post={post} /> : <p>Post not found.</p>;
};

export default DetailPage;
