import { SEND_PROMO_DATA } from "../actions/types";

const initialState = {
  promoData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_PROMO_DATA:
      return {
        ...state,
        promoData: action.payload
      };
    default:
      return state;
  }
}
