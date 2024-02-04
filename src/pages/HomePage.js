import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import Home from "../components/Home";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return <Home posts={posts} />;
};

export default HomePage;
