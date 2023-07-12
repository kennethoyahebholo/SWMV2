import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import user from "./user.slice";
import services from "./services.slice";
import userEmail from "./userEmail.slice";

const rootReducer = combineReducers({
  auth,
  user,
  userEmail,
  services,
});

export default rootReducer;
