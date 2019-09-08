import {
  GET_CLIENTS,
  GET_HOME_USERS,
  GET_PROMO_CLIENTS
} from "../actions/types";

const initialState = {
  clients: [],
  homeUsers: [],
  promoClients: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };
    case GET_HOME_USERS:
      return {
        ...state,
        homeUsers: action.payload
      };
    case GET_PROMO_CLIENTS:
      return {
        ...state,
        promoClients: action.payload
      };
    default:
      return state;
  }
}
