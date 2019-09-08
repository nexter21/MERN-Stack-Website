import axios from "axios";

import {
  GET_ERRORS,
  GET_CLIENTS,
  GET_HOME_USERS,
  GET_PROMO_CLIENTS
} from "./types";

export const specificClients = clientData => dispatch => {
  axios
    .post("/api/specificClient", clientData)
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
      type: GET_CLIENTS,
      payload: res.data
    });
  });
};

export const postPromoClients = clientData => dispatch => {
  axios
    .post("/api/promo", clientData)
    .then(console.log("we good"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getPromoClients = () => dispatch => {
  console.log("seems aight");
  axios.get("/api/promo").then(res => {
    dispatch({
      type: GET_PROMO_CLIENTS,
      payload: res.data
    });
  });
};

export const postHomeUsers = clientData => dispatch => {
  console.log("lets see");
  axios
    .post("/api/homeUsers", clientData)
    .then(res => console.log("posted home users"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getHomeUsers = () => dispatch => {
  axios.get("/api/homeUsers").then(res => {
    dispatch({
      type: GET_HOME_USERS,
      payload: res.data
    });
  });
};
