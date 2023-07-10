import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../../modules";

const Auth = ({ children, message }) => {
  const { pathname } = useLocation();
  const data = localStorage.getItem("userData");
  const [isAuth, setIsAuth] = useState(true);

  const getActiveUser = useCallback(() => {
    if (!data) {
      setIsAuth(false);
    }
  }, [data]);

  useEffect(() => {
    getActiveUser();
  }, [getActiveUser]);
  return (
    <div className="relative w-full min-h-screen">
      <Navbar auth={isAuth} />
      {message && (
        <div
          className={`${pathname === "/" ? "pt-0" : "pt-0"} pt-14 pb-28 px-9`}
        >
          <div className="flex items-center bg-white py-14 px-6 rounded-[14px] shadow-md">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
