import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../../modules";

const Landing = ({ children, customStyle }) => {
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
      <Navbar auth={isAuth} customStyle={customStyle} />

      <div className={`${pathname === "/" && "pt-0"} lg:pt-0`}>{children}</div>
    </div>
  );
};

export default Landing;
