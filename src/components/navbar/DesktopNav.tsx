
import React from "react";
import { Link } from "react-router-dom";

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link
        to="/"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        Home
      </Link>
      <Link
        to="/news"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        News
      </Link>
      <Link
        to="/recensioni"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        Recensioni
      </Link>
      <Link
        to="/trucchi-consigli"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        Trucchi&Consigli
      </Link>
      <Link
        to="/faq"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        FAQ
      </Link>
      <Link
        to="/forum"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        Forum
      </Link>
    </nav>
  );
};

export default DesktopNav;
