import axios from "axios";

import { GET_ERRORS, GET_QUICK_INQUIRY } from "./types";

export const postQuickInquiry = inquiryData => dispatch => {
  axios
    .post("/api/quick", inquiryData)
    .then(console.log("we good"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getClients = () => dispatch => {
  axios.get("/api/specificClient").then(res => {
    dispatch({
      type: GET_QUICK_INQUIRY,
      payload: res.data
    });
  });
};
