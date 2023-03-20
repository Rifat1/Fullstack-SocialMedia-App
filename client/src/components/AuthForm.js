import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AuthForm = ({ signup, buttonText }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageLink, setProfileImageLink] = useState("");

  return (
    <div className="auth-form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {signup && (
          <>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="Username" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProfileImageLink">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="ProfileImageLink"
                placeholder="ProfileImageURL"
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
    </div>
  );
};

export default AuthForm;
