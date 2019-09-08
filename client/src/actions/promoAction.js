import axios from "axios";

import { SEND_PROMO_DATA } from "./types";

export const sendPromoData = data => dispatch => {
  console.log(data);
  dispatch({
    type: SEND_PROMO_DATA,
    payload: data
  });
};
