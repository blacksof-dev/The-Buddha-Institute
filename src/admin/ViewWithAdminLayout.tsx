import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/authProvider";

const navItems = [
  { text: "Home", route: "/admin/home" },
  // { text: "News and Articles", route: "/admin/news" },
  { text: "Contact", route: "/admin/contact" },
  // { text: "Brochures", route: "/admin/brochures" },
  { text: "Partners And Supporters", route: "/admin/partners-and-supporters" },
  // { text: "Case Study", route: "/admin/case-study" },
  // { text: "Updates", route: "/admin/updates" },
  { text: "Impact", route: "/admin/impact" },
  {
    text: "Budha Fellowship Program",
    route: "/admin/budha-fellowship-program",
  },
  { text: "Budha Fellow", route: "/admin/budha-fellow" },
  // { text: "Donate Us", route: "/admin/donate-us" },
  { text: "Awards", route: "/admin/awards" },
  { text: "Resources", route: "/admin/resources" },
  { text: "Newsletter", route: "/admin/newsletter" },
  { text: "About Us", route: "/admin/about-us" },
];

const ViewWithAdminLayout = () => {
  const [activebtn, setActiveBtn] = useState<number>(0);
  const [windowInnerWidth, setWindowInnerWidth] = useState<number>(0);
  const { logOut } = useAuth();
  useEffect(() => {
    const width = window.innerWidth;
    // console.log(width)
    setWindowInnerWidth(width);
  }, []);
  const handleBtn = (index: number) => {
    setActiveBtn(index);
  };
  return (
    <div className="flex gap-12">
      <div className="xlg:w-80 h-auto px-5 pt-5  bg-teal flex  flex-col justify-between">
        <div className="">
          <div className="flex justify-center items-center  w-32 ">
            <Link to='/'>
              <img

                src={`/buddha-logo.png`}
                alt="Sidebar Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <ul key={item.text}>
                <Link
                  to={item.route}
                  onClick={() => handleBtn(index)}
                  className={`flex rounded-md items-center px-4 py-2 ${activebtn === index
                    ? "bg-white/90 text-black"
                    : "bg-transparent text-white"
                    } hover:bg-gray-100/20 hover:text-white transition-colors`}
                >
                  <li className="flex items-center justify-center">
                    <span className="font-lato-regular md:text-base text-nowrap">
                      {item.text}
                    </span>
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
        <div className=" mb-5">
          <Link to={"/admin/dashboard"}>
            <button
              className={`flex rounded-lg m-auto items-center p-2 bg-pear w-full text-black  transition-colors  justify-center font-lato-regular md:text-lg text-nowrap `}
            >
              <span>Admin</span>
            </button>
          </Link>

          <button
            onClick={() => {
              logOut();
            }}
            className={`flex rounded-lg m-auto items-center p-2  bg-red-500/80 mt-2 w-full text-white hover:bg-red-400 transition-colors  justify-center font-lato-regular md:text-lg text-nowrap `}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1 h-screen overflow-y-scroll">
        {windowInnerWidth >= 1023 ? (
          <Outlet />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <h2 className="font-lato-regular text-center text-xl text-gray-600">
              {"Please view this page on a desktop or laptop :)"}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewWithAdminLayout;
