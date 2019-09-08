import isEmpty from "../validation/is-empty";
import {
  GET_LIST,
  SET_CURRENT_USER,
  CHECK_COURSE,
  GET_USERS
} from "../actions/types";

const initialState = {
  list: [],
  topics: [],
  isAuthenticated: false,
  user: {},
  course: false,
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case CHECK_COURSE:
      return {
        ...state,
        course: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
