import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  //   ABOUT_ME,
  //   CUSTOMER_SUPPORT,
  //   HELP_CENTER,
  HOME,
  LOGIN,
  SERVICES,
} from "../../../routes/CONSTANTS";
import { SWMimages } from "../../../assets";
import { Button } from "../../widgets";
import NavLink from "./NavLink";
import { MdPerson } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ auth, breadCrumbs, breadCrumbsLinks, customStyle }) => {
  const [showAuthComp, setShowAuthComp] = useState(false);
  const handleShowAuthComp = () => {
    setShowAuthComp(!showAuthComp);
  };
  const Navigate = useNavigate();
  return (
    <div className="bg-gray-100 sticky top-0 left-0 right-0 text-white z-50">
      <div className="relative w-full h-[90px]  px-2 md:px-5 xl:px-5 py-4 flex items-center justify-between z-50">
        <Link to={HOME}>
          <img
            src={SWMimages.eco_gaurd_logo}
            className="object-contain max-w-[72px]"
            alt="logo"
          />
        </Link>

        <div className="inline-flex lg:inline-flex items-center space-x-20">
          <NavLink className="hidden lg:inline-flex" to={SERVICES}>
            Services
          </NavLink>
          <NavLink className="hidden lg:inline-flex" to="/">
            Help
          </NavLink>
          <div className="flex items-center space-x-10">
            {auth ? (
              <div className="relative">
                <div
                  className="cursor-pointer"
                  // onMouseEnter={handleShowAuthComp}
                  onClick={handleShowAuthComp}
                >
                  <div className="flex items-center justify-center bg-[#628c23] w-10 h-10 rounded-full">
                    <MdPerson />
                  </div>
                </div>
                {showAuthComp && (
                  <div className="absolute bg-slate-200 right-0 top-16 w-[10rem] md:w-[15rem] transition-transform ">
                    <div className="p-3 lg:p-3 space-y-4 z-50 w-full">
                      <NavLink to="#" className="inline-flex">
                        <div className="bg-green-700 py-2 px-[20px] lg:px-[50px] rounded-full flex items-center justify-center w-full">
                          <h6 className="font-bold text-white text-[12px] lg:text-[14px] ">
                            View Profile
                          </h6>
                        </div>
                      </NavLink>
                      <NavLink to="#" className="inline-flex">
                        <div
                          onClick={() => {
                            toast.success("User logged out successfully");
                            localStorage.clear();
                          }}
                          className="border border-green-700 py-2 px-[20px] lg:px-[50px] rounded-full flex items-center justify-center text-white w-full"
                        >
                          <h6 className="font-bold text-green-800 text-[12px] lg:text-[14px] ">
                            Log Out
                          </h6>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                to={LOGIN}
                size="md"
                className="flex items-center justify-center text-[14px]"
                variant="outline"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
