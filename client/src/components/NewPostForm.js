import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { postNewPost } from "../services/apiCall";

const NewPostForm = () => {
  const [newPost, setNewPost] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const newPostData = { text: newPost };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postNewPost(id, newPostData);
    console.log("new post", res);
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your post below</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter text"
            onChange={(e) => setNewPost(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Post Now
        </Button>
      </Form>
    </>
  );
};

export default NewPostForm;
