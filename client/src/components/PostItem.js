import React from "react";
import DefaultProfileImage from "./avatar.jpg";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Container } from "react-bootstrap";

const PostItem = ({ date, text, username, profileImageLink }) => {
  return (
    <Container style={{ marginTop: 30 }}>
      <div>
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
      </div>
    </Container>
  );
};

export default PostItem;
