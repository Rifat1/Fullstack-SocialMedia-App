import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./Homepage";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MyPost
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="signup">
              Sign up
            </Nav.Link>
            <Nav.Link as={Link} to="signin">
              Sign in
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Form />}></Route>
        <Route path="/signin" element={<Form />}></Route>
      </Routes> */}
    </>
  );
};

export default NavbarComponent;
