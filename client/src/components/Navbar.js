import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { setCurrentUser } from "../features/currentUser/currentUserSlice";
import { setTokenHeader } from "../services/apiCall";

const NavbarComponent = () => {
  const { isAuthenticated, user } = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setTokenHeader(false);
    dispatch(setCurrentUser({}));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MyPost
          </Navbar.Brand>
          {isAuthenticated ? (
            <Nav>
              <Nav.Link as={Link} to={`/users/${user.id}/posts/newpost`}>
                New Post
              </Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/signup">
                Sign up
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                Sign in
              </Nav.Link>
            </Nav>
          )}
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
