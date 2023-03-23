import React, { useEffect } from "react";
import { getPosts } from "../services/apiCall";
import { loadPosts } from "../features/posts/postsSlice";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostsList = () => {
  const { posts } = useSelector((store) => store.posts);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsArray = await getPosts();
      loadPosts(postsArray);
    };
    fetchPosts();
  }, [posts]);

  let postsList = posts.map((post) => (
    <PostItem
      key={post._id}
      date={post.createdAt}
      text={post.text}
      username={post.user.username}
      profileimageLink={post.user.profileimageLink}
    />
  ));
  return <div>{postsList}</div>;
};

export default PostsList;
