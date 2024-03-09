import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light01.png";
import logo2 from "../../assets/TimeLineLogo/Logo4.svg";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../Core/Auth/ProfileDropDown";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { FaChevronDown } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "Web Development",
//     link: "/catalog/web-development",
//   },
// ];
import { useRef } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { logout } from "../../services/operations/authAPI";

const Navbar = () => {
  // The required data from the redux store has been fetched out here
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result.data.data);
    } catch (error) {
      // console.log("Cannot able to fetch the category");
    }
  };
  useEffect(() => {
    fetchSubLinks();
    // console.log("User:", user?.image);
  }, []);

  const location = useLocation();
  const matchRoutes = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const { loading } = useSelector((state) => state.profile);

  // const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"} className="flex">
          {/* <img src={logo2} alt={"logo"} width={30} height={42} /> */}
          <PiStudentFill className="text-white size-11" />
          <img
            src={logo}
            alt={"logo"}
            width={145}
            height={30}
            className="mt-1"
          />
          {/* <p className="text-white font-semibold text-2xl">STUDY NOTION</p> */}
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoutes("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <FaChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks && subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoutes(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/Signup and extras */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType != "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Log In
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && (
            <button
              className="relative cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="flex items-center gap-x-1">
                <img
                  src={user?.image}
                  alt={`profile-${user?.firstName}`}
                  className="aspect-square w-[30px] rounded-full object-cover"
                />
                <AiOutlineCaretDown className="text-sm text-richblack-100" />
              </div>
              {open && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
                  ref={ref}
                >
                  <Link
                    to="/dashboard/my-profile"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                      <VscDashboard className="text-lg" />
                      Dashboard
                    </div>
                  </Link>
                  <div
                    onClick={() => {
                      dispatch(logout(navigate));
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
                  >
                    <VscSignOut className="text-lg" />
                    Logout
                  </div>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;