import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  //   ABOUT_ME,
  //   CUSTOMER_SUPPORT,
  //   HELP_CENTER,
  HOME,
} from "../../../routes/CONSTANTS";
import { SWMimages } from "../../../assets";
import { Button } from "../../widgets";
import NavLink from "./NavLink";

const Navbar = ({ auth, breadCrumbs, breadCrumbsLinks, customStyle }) => {
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

        <div className="hidden lg:inline-flex items-center space-x-20">
          <NavLink to="/">Support</NavLink>
          <NavLink to="/">Help</NavLink>
          <div className="flex items-center space-x-10">
            {auth ? (
              <img
                src=""
                // src={VMSimages.profileIcon}
                className="object-contain max-w-[56px] cursor-pointer"
                alt="user_profile"
                // onClick={() => Navigate(ABOUT_ME)}
              />
            ) : (
              <Button
                to="#"
                // to={LOGIN}
                size="lg"
                className="text-[14px]"
                variant="outline"
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
