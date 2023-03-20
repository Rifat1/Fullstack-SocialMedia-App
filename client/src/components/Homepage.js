import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Homepage = () => {
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
};

export default Homepage;
