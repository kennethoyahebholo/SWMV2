import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  SERVICES,
  SIGNUP,
} from "./routes/CONSTANTS";
import { SWM_USER_DATA } from "./services/CONSTANTS";

const AuthGaurd = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem(SWM_USER_DATA));
  let decodedToken = null;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const shouldGetProfile = ![
    LOGIN,
    SIGNUP,
    FORGOT_PASSWORD,
    HOME,
    SERVICES,
  ].includes(pathname);
  const handleError = useCallback(() => {
    navigate(LOGIN);
    // To clear the current profile and its associated Redux store.
    window.location.reload();
  }, [navigate]);

  useEffect(() => {
    if (!localStorage?.SWM_USER_DATA && shouldGetProfile) {
      handleError();
    }
  }, [localStorage?.SWM_USER_DATA, shouldGetProfile, pathname]);

  useEffect(() => {
    if (localStorage?.SWM_USER_DATA && shouldGetProfile) {
      if (userToken) {
        try {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          decodedToken = jwt_decode(userToken);
          console.log(decodedToken);
        } catch (error) {
          console.error("Error decoding token:", error);
          // Handle the error or set default values if necessary
        }
      } else {
        // Handle the case when the token is not found in localStorage
      }
    }
  }, [localStorage?.SWM_USER_DATA, shouldGetProfile]);

  return children;
};

export default AuthGaurd;
