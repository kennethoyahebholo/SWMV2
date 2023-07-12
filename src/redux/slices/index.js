import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import user from "./user.slice";
import userEmail from "./userEmail.slice";

const rootReducer = combineReducers({
  auth,
  user,
  userEmail,
});

export default rootReducer;
