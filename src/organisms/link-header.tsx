import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderLinkProps {
  text: string;
  to: string;
  isDropdownOpen?: boolean;
  toggleDropdown?: () => void;
  className?: string;
  iconClassName?: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  text,
  isDropdownOpen = false,
  toggleDropdown = () => {},
  to,
  className = "",
  iconClassName = "",
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li
      className={`flex cursor-pointer gap-2 font-lato-regular xl:text-[14px] 2xl:text-[16px] ${className} ${
        isActive ? "text-pear" : ""
      }`}
      onClick={toggleDropdown}
    >
      <Link to={to}>
        <a
          className={`flex text-nowrap items-center gap-2 hover:text-pear transition-all duration-500 ${
            isActive ? "active" : ""
          }`}
        >
          {text}
          {/* <svg
            className={`h-4 mt-1 fill-white ${iconClassName} ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
          </svg> */}
        </a>
      </Link>
    </li>
  );
};

export default HeaderLink;
