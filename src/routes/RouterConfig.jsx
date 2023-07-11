import { Routes, Route } from "react-router-dom";

import {
  ErrorPage,
  Home,
  Services,
  Login,
  Signup,
  AccoutSuccessfullyCreated,
  Profile,
} from "../pages";
import {
  HOME,
  SERVICES,
  PROFILE,
  LOGIN,
  SIGNUP,
  SIGNUP_SUCCESS,
} from "./CONSTANTS";

// import { ProtectedRoute, PublicRoute } from "../components";
import AuthGaurd from "../authGaurd";

const RouterConfig = () => {
  return (
    <AuthGaurd>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={PROFILE} element={<Profile />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={SIGNUP_SUCCESS} element={<AccoutSuccessfullyCreated />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthGaurd>
  );
};

export default RouterConfig;
