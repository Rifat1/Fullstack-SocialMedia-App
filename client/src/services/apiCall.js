import axios from "axios";

// type will be string "signup" or "signin"
//userData is an object with the following properties
export const authUser = async (type, userData) => {
  try {
    const res = await axios.post(`/api/auth/${type}`, userData);
    const { token, ...user } = res.data;
    localStorage.setItem("jwt-token", token);
    return user;
  } catch (error) {
    return error;
  }
};
