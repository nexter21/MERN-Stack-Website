import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import courseReducer from "./courseReducer";
import clientReducer from "./clientReducer";
import promoReducer from "./promoReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  course: courseReducer,
  client: clientReducer,
  promo: promoReducer
});
