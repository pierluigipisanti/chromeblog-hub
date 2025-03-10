
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
        to="/news/chromebook"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        ChromeBook
      </Link>
      <Link
        to="/news/chromeos"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        ChromeOS
      </Link>
      <Link
        to="/news/android"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        Android
      </Link>
      <Link
        to="/news/chrome"
        className="text-cb-dark hover:text-cb-green transition-colors"
      >
        Chrome
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
