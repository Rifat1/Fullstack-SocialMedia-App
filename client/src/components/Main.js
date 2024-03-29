import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import NewPostForm from "./NewPostForm";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/signup"
        element={<AuthForm signup buttonText="sign me up!" />}
      />
      <Route path="/signin" element={<AuthForm buttonText="sign in" />} />
      {/* <Route path="*" element={<NotFound/>} /> */}
      <Route path="/users/:id/posts/newpost" element={<NewPostForm />} />
    </Routes>
  );
};

export default Main;
