import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { authUser } from "../services/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../features/currentUser/currentUserSlice";
import { addError, removeError } from "../features/errors/errorsSlice";
import { Navigate } from "react-router-dom";

const AuthForm = ({ signup, buttonText, history }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageLink, setProfileImageLink] = useState("");

  const { errorMessage } = useSelector((store) => store.errors);
  const { isAuthenticated } = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();

  const userData = signup
    ? { email, username, password, profileImageLink }
    : { email, password };
  // console.log(userData);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const authType = signup ? "signup" : "signin";
      const user = await authUser(authType, userData);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
      // history.push("/");
    } catch (error) {
      dispatch(addError(error.message));
    }
  };

  // errorMessage && history.listen(() => dispatch(removeError()));

  return (
    <>
      {isAuthenticated && <Navigate to="/" replace={true} />}
      <Form onSubmit={handleSubmit}>
        {/* <h2>hello world</h2> */}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
    </>
  );
};

export default AuthForm;
