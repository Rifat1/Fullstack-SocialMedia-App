import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";

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
    </Routes>
  );
};

export default Main;
