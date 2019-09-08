import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_LIST,
  GET_ERRORS,
  SET_CURRENT_USER,
  CHECK_COURSE,
  GET_USERS
} from "./types";

export const getList = () => dispatch => {
  axios
    .get("/list")
    .then(res => {
      dispatch({
        type: GET_LIST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_LIST,
        payload: null
      })
    );
};

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Check if the user can access the course
export const checkCourse = courseData => dispatch => {
  axios.post("/api/users/checkCourse", courseData).then(res => {
    dispatch({
      type: CHECK_COURSE,
      payload: res.data.bool
    });
  });
};

// Add course to the user
export const addCourse = (courseData, history) => dispatch => {
  axios
    .post("/api/users/addcourse", courseData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Get List Of Users
export const getUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
