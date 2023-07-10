import { Routes, Route } from "react-router-dom";

import {
  ErrorPage,
  Home,
  Services,
  Login,
  Signup,
  AccoutSuccessfullyCreated,
  //   ForgotPassword,
  //   Settings,
  //   LogOut,
  //   ResetPassword,
  //   HelpCenter,
  //   CustomerSupport,
} from "../pages";
import {
  //   FORGOT_PASSWORD,
  HOME,
  SERVICES,
  LOGIN,
  //   SETTINGS,
  SIGNUP,
  //   LOGOUT,
  SIGNUP_SUCCESS,
  //   RESET_PASSWORD,
  //   HELP_CENTER,
  //   CUSTOMER_SUPPORT,
} from "./CONSTANTS";

import { ProtectedRoute, PublicRoute } from "../components";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={SERVICES} element={<Services />} />

        {/* <Route path={HELP_CENTER} element={<HelpCenter />} /> */}
        {/* <Route path={CUSTOMER_SUPPORT} element={<CustomerSupport />} /> */}
        <Route path="/" element={<PublicRoute />}>
          {/* Auth pages */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route
            path={SIGNUP_SUCCESS}
            element={<AccoutSuccessfullyCreated />}
          />
          {/* <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} /> */}
          {/* <Route path={RESET_PASSWORD} element={<ResetPassword />} /> */}
        </Route>
        {/* dashboard routes should be placed in here */}
        <Route>
          {/* <Route path={SETTINGS} element={<Settings />} /> */}
          {/* <Route path={LOGOUT} element={<LogOut />} /> */}
        </Route>

        {/* <Route path="/" element={<ProtectedRoute navigate={SIGNUP} />}>
          Protected routes should be placed in here
        </Route> */}

        {/* 404 page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
