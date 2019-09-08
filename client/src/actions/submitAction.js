import axios from "axios";
import { GET_ERRORS, GET_APPLICATIONS } from "./types";

export const submitApplication = userData => dispatch => {
  axios
    .post("/api/applications", userData)
    .then(console.log("post done"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getApplications = () => dispatch => {
  axios
    .get("/api/applications")
    .then(res => {
      dispatch({
        type: GET_APPLICATIONS,
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
