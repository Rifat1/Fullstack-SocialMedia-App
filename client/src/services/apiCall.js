import axios from "axios";

export const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getPosts = async () => {
  const res = await axios.get("/api/posts");
  return res.data;
};

export const postNewPost = async (id, newPostData) => {
  const res = await axios.post(`/api/users/${id}/posts`, newPostData);
  return res.data;
};

export const removePostApi = async (id, postID) => {
  await axios.delete(`/api/users/${id}/posts/${postID}`);
};

// type will be string "signup" or "signin"
//userData is an object with the following properties
export const authUser = async (type, userData) => {
  try {
    const res = await axios.post(`/api/auth/${type}`, userData);
    const { token, ...user } = res.data;
    localStorage.setItem("jwtToken", token);
    setTokenHeader(token);
    return user;
  } catch (error) {
    return error;
  }
};
