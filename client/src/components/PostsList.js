import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { getPosts } from "../services/apiCall";
import { loadPosts, removePost } from "../features/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";

const PostsList = () => {
  const { posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsArray = await getPosts();
      dispatch(loadPosts(postsArray));
    };
    fetchPosts();
  }, [dispatch]);

  let postsList = posts.map((post) => (
    <PostItem
      key={post._id}
      date={post.createdAt}
      text={post.text}
      username={post.user.username}
      profileimageLink={post.user.profileimageLink}
    />
  ));
  return (
    <div>
      <Container>{postsList}</Container>
    </div>
  );
};

export default PostsList;
