import React from "react";
import { Link } from "react-router-dom";

interface MobileNavProps {
  text: string;
  to: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  text,
  to,
  onClick,
  showIcon = true,
  className = "",
}) => {
  return (
    <li>
      <Link
        to={to}
        className={`mt-2 flex w-full justify-between gap-2 font-lato-regular sm:mt-0 ${className}`}
        onClick={onClick}
      >
        {text}
        
      </Link>
    </li>
  );
};

export default MobileNav;
