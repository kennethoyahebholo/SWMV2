import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  SERVICES,
  SIGNUP,
} from "./routes/CONSTANTS";
import { SWM_USER_DATA, SWM_USER_EMAIL } from "./services/CONSTANTS";
import { useDispatch } from "react-redux";
import { getUserByEmail } from "./redux/slices/user.slice";

const AuthGaurd = ({ children }) => {
  const dispatch = useDispatch();
  const userToken = JSON.parse(localStorage.getItem(SWM_USER_DATA));
  const userEmail = JSON.parse(localStorage.getItem(SWM_USER_EMAIL));
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
        dispatch(getUserByEmail(userEmail));
      }
    }
  }, [localStorage?.SWM_USER_DATA, shouldGetProfile]);

  return children;
};

export default AuthGaurd;
