import axios from "axios";

import { GET_NEWS, GET_ERRORS } from "./types";

export const postNews = clientData => dispatch => {
  axios
    .post("/api/news", clientData)
    .then(console.log("we good"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getNews = () => dispatch => {
  axios.get("/api/news").then(res => {
    dispatch({
      type: GET_NEWS,
      payload: res.data
    });
  });
};
