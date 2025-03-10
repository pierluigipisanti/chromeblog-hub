
import React from "react";
import { Link } from "react-router-dom";

const NavLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center mr-6">
      <img
        src="/lovable-uploads/8491c047-d089-4ccb-9662-84da916131ba.png"
        alt="ChromeBookItalia"
        className="h-12" // Aumentato da h-10 a h-12
      />
    </Link>
  );
};

export default NavLogo;
