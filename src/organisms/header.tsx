import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLink from "./link-header";
import MobileNav from "./mobile-nav";
import PopUp from "molecules/PopUp";
import ApplicationProcess from "molecules/applicationPopup";
import dummyImg from "../assets/dummy-profile.png";
import { getToken } from "auth/authenticationFunction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Profile from "auth/profile";

const Navnew = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const navRef = useRef<any>(null);
  const [showPopup, setshowPopup] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);

  const location = useLocation();
  const token = getToken();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlePopUp = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const width = window.innerWidth;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
      lastScrollY = window.scrollY;
    };

    if (width >= 1280) window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hideNavOnPaths = [
      "/forgot-admin-password",
      "/admin",
      "/new-password",
      "/signin",
    ];
    const currentPath = window.location.pathname;
    if (
      currentPath.includes("/admin") ||
      (hideNavOnPaths.includes(currentPath) && navRef.current)
    ) {
      navRef.current.style.display = "none";
    } else if (navRef.current) {
      navRef.current.style.display = "block";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tbi_token");
    toast.success("Logout successful!");
    navigate("/");
  };
  const handleProfile = () => {
    setProfile(false);
  };

  useEffect(() => {
    setProfile(false);
  }, [token]);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setProfile(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[999] bg-darkGreen text-white"
    >
      {/* Desktop Navbar */}
      <div
        className={`${
          isScrolling ? "-translate-y-[10rem]" : ""
        } transition-all duration-700 hidden xl:block`}
      >
        <div className=" flex justify-end gap-8 bg-darkCyan text-sm">
          <button
            onClick={() => handlePopUp()}
            className="my-auto font-lato-regular 2xl:text-[18px] text-white"
          >
            Subscribe to our newsletter
          </button>
          <h6 className="flex  justify-center items-center gap-x-12 py-3 font-lato-regular 2xl:text-[16px]">
            <HeaderLink
              text=" Contact Us "
              to="/contact-us"
              className="font-lato-regular 2xl:text-[18px]"
              iconClassName="custom-icon-class"
            />

            <button
              onClick={() => setshowPopup(true)}
              className="my-auto font-lato-regular 2xl:text-[18px] text-white"
            >
              Become a Buddha Fellow
            </button>

            <div className="  relative">
              {/* Show Profile Icon if Logged In */}
              {token ? (
                <>
                  <button
                    onClick={() => setProfile((prev) => !prev)}
                    className="w-6 h-6 rounded-full cursor-pointer relative"
                  >
                    <img
                      src={dummyImg}
                      className="rounded-full border border-white"
                      alt="Profile"
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {profile && (
                    <div
                      className="absolute mt-2 left-1 right-0 w-36 bg-white py-1 shadow-lg rounded-lg p-1 z-50 border border-lightPurple"
                      ref={dropdownRef}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProfile();
                        }}
                        className="cursor-pointer text-black font-lato-regular block w-full text-left"
                      >
                        <Profile />
                      </button>

                      <a
                        href="https://application.thebuddhainstitute.org/demo_file_step1"
                        className="cursor-pointer text-nowrap text-black font-lato-regular text-sm block w-full text-left"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View application
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLogout();
                        }}
                        className="cursor-pointer text-black text-sm font-lato-regular block w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>

            {showPopup && (
              <ApplicationProcess onclose={() => setshowPopup(false)} />
            )}
          </h6>
          <h4 className="bg-pear px-2  font-lato-bold">
            <Link to="/donate-us">
              <button className="px-8 py-2 text-black ">Donate</button>
            </Link>
          </h4>
        </div>
        <div
          className={`absolute inset-x-0 ${
            ["/contact-us", "/donate-usa", "/donate-india", "/awards"].includes(
              location.pathname
            ) || isScrolled
              ? "bg-darkGreen"
              : "bg-customGray backdrop-blur-[18.4px]"
          } transition-all duration-300`}
        >
          <div className="w-container-xl flex items-center  py-3 ">
            <div className=" flex items-center">
              <Link to="/" target="" rel="noopener noreferrer">
                <img
                  src="/final-logo-new.svg"
                  alt="Buddha Institute"
                  className="w-[15%]"
                />
              </Link>
            </div>
            <ul className="flex 2xl:gap-12 gap-6 2xl:text-[16px] ">
              <HeaderLink
                text="About Us"
                to="/about-us"
                className="custom-class"
                iconClassName="custom-icon-class"
              />
              <HeaderLink
                text="Buddha Fellowship Program"
                to="/budha-fellowship-program"
                className="custom-class"
                iconClassName="custom-icon-class"
              />
              <HeaderLink
                text="Buddha Fellows"
                to="/buddha-fellows"
                className="custom-class"
                iconClassName="custom-icon-class"
              />
              <HeaderLink
                text=" Impact"
                to="/impact"
                className="custom-class"
                iconClassName="custom-icon-class"
              />
              <HeaderLink
                text="Partners & Supporters"
                to="/partners-and-supporters"
                className="custom-class"
                iconClassName="custom-icon-class"
              />
              <HeaderLink
                text="Awards"
                to="/awards"
                className="custom-class"
                iconClassName="custom-icon-class"
              />

              <li className="cursor-pointer hover:text-pear font-lato-regular transition-all duration-500 xl:text-[14px] 2xl:text-[16px]">
                <HeaderLink
                  text="Resources"
                  to="/resources"
                  className="custom-class"
                  iconClassName="custom-icon-class"
                />
              </li>
            </ul>
          </div>
        </div>
        {isPopupOpen && <PopUp handleClose={() => setIsPopupOpen(false)} />}
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between  px-4   xl:hidden">
        <Link to="/" target="" rel="noopener noreferrer">
          <img src="/final-logo.svg" alt="Buddha Institute" className="w-24" />
        </Link>

        <div className="flex flex-row gap-4 sm:gap-4">
          <button
            onClick={() => handlePopUp()}
            className="my-auto font-lato-regular text-sm text-white"
          >
            Subscribe to our newsletter
          </button>
          <div className="xl:hidden block  relative">
            {/* Show Profile Icon if Logged In */}
            {token ? (
              <>
                <button
                  onClick={() => setProfile((prev) => !prev)}
                  className="w-6 h-6 rounded-full cursor-pointer relative"
                >
                  <img
                    src={dummyImg}
                    className="rounded-full border border-white"
                    alt="Profile"
                  />
                </button>

                {/* Dropdown Menu */}
                {profile && (
                  <div
                    className="absolute mt-2 left-1 right-0 w-24 bg-white py-1 shadow-lg rounded-lg p-1 z-50 border border-lightPurple"
                    ref={dropdownRef}
                  >
                    <button
                      onClick={handleProfile}
                      className="cursor-pointer text-black font-lato-regular block w-full text-left"
                    >
                      <Profile />
                    </button>

                    {/* ✅ FIX HERE */}
                    <a
                      href="https://application.thebuddhainstitute.org/demo_file_step1"
                      className="cursor-pointer text-nowrap text-black font-lato-regular text-xs block w-full text-left"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View applic..
                    </a>

                    <button
                      onClick={handleLogout}
                      className="cursor-pointer text-black text-xs font-lato-regular  block w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            <svg
              className=" h-6 w-6 sm:h-8 sm:w-8 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-darkCyan  transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex   justify-end p-4">
          <div className="flex w-full  justify-between">
            <Link
              onClick={toggleDrawer}
              to="/"
              target=""
              rel="noopener noreferrer"
            >
              <img
                src="/final-logo.svg"
                alt="The Buddha Institute Logo"
                className="w-[25%]"
              />
            </Link>
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-white">
          <MobileNav text="About Us" to="/about-us" onClick={toggleDrawer} />

          <MobileNav
            text="Buddha Fellowship Program"
            to="/budha-fellowship-program"
            onClick={toggleDrawer}
          />
          <MobileNav
            text="Buddha Fellows"
            to="/buddha-fellows"
            onClick={toggleDrawer}
          />
          <MobileNav text="Impact" to="/impact" onClick={toggleDrawer} />
          <MobileNav
            text="Partners & Supporters"
            to="/partners-and-supporters"
            onClick={toggleDrawer}
          />
          <MobileNav text="Awards" to="/awards" onClick={toggleDrawer} />
          {/*  Resources */}
          <MobileNav text="Resources" to="/resources" onClick={toggleDrawer} />
          <MobileNav
            text="Contact Us"
            to="/contact-us"
            onClick={toggleDrawer}
          />

          {token ? (
            <MobileNav
              text="Became a Buddha Fellow"
              to="https://application.thebuddhainstitute.org/demo_file_step1/"
              onClick={toggleDrawer}
            />
          ) : null}

          <a href="/donate-us">
            <button className="fixed inset-x-4 bottom-6 mx-auto bg-pear px-2 py-2 text-black font-lato-bold">
              Donate
            </button>
          </a>
        </ul>
      </div>
      <div className="xl:hidden block">
        {isPopupOpen && <PopUp handleClose={() => setIsPopupOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navnew;
