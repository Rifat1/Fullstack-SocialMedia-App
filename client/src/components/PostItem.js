import React from "react";
import Button from "react-bootstrap/Button";
import DefaultProfileImage from "./avatar.jpg";
import { removePostApi } from "../services/apiCall";
import { removePost } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
const PostItem = ({
  postID,
  userID,
  date,
  text,
  username,
  profileImageLink,
}) => {
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    await removePostApi(userID, postID);
    dispatch(removePost(postID));
  };
  return (
    <div className="post-item">
      <img
        src={profileImageLink || DefaultProfileImage}
        alt={username}
        height="100"
        width="100"
      />
      <div className="text-area">
        <Link to="/">@{username} &nbsp; </Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>{text}</p>
      </div>
      <Button variant="success" type="submit" onClick={handleClick}>
        delete post
      </Button>
    </div>
  );
};

export default PostItem;
