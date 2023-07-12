import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import user from "./user.slice";
import recycleServices from "./recycle-services.slice";
import waste_services from "./waste-services";
import userEmail from "./userEmail.slice";

const rootReducer = combineReducers({
  auth,
  user,
  userEmail,
  recycleServices,
  waste_services,
});

export default rootReducer;
