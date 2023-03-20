import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { authUser } from "../services/apiCall";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/currentUser/currentUserSlice";

const AuthForm = ({ signup, buttonText }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageLink, setProfileImageLink] = useState("");

  const dispatch = useDispatch();

  const userData = signup
    ? { email, username, password, profileImageLink }
    : { email, password };
  // console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authType = signup ? "signup" : "signin";
    const user = await authUser(authType, userData);
    dispatch(setCurrentUser(user));
    console.log("you logged in successfully");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {signup && (
        <>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="Username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProfileImageLink">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="ProfileImageLink"
              placeholder="ProfileImageURL"
              onChange={(e) => setProfileImageLink(e.target.value)}
            />
          </Form.Group>
        </>
      )}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      <Button variant="success" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};

export default AuthForm;
