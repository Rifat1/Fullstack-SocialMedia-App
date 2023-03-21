import NavbarComponent from "./components/Navbar";
import Main from "./components/Main";
import { setTokenHeader } from "./services/apiCall";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./features/currentUser/currentUserSlice";
import jwtDecode from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  if (localStorage.jwtToken) {
    setTokenHeader(localStorage.jwtToken);
    try {
      dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    } catch (error) {
      dispatch(setCurrentUser({}));
    }
  }
  return (
    <div>
      <NavbarComponent />
      <Main />
    </div>
  );
}

export default App;
