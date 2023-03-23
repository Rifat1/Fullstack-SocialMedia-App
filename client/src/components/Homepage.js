import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import PostsList from "./PostsList";

const Homepage = () => {
  const { isAuthenticated } = useSelector((store) => store.currentUser);
  if (!isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Welcome to MyPost</h1>
        <h4>New here?</h4>
        <Link to="/signup">
          <Button variant="success" size="lg">
            Sign up now
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <PostsList />
    </div>
  );
};

export default Homepage;
