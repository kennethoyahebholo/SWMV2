import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`${
        pathname === to
          ? "text-[#628c23] border-b-2 border-b-primary"
          : "text-white hover:text-[#628c23]"
      } pb-px px-1 font-['Spectral'] text-[20px] font-[600]`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
