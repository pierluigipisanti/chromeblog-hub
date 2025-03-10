
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import NavLogo from "./navbar/NavLogo";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";
import SearchBar from "./navbar/SearchBar";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="cb-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLogo />
            {!isMobile && <DesktopNav />}
          </div>

          <div className="flex items-center space-x-2">
            {!isMobile && !isSearchOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                className="text-cb-dark hover:text-cb-green"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            {!isMobile && (
              <Link to="/chat">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-cb-dark hover:text-cb-green"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </Link>
            )}

            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            )}
          </div>
        </div>

        {isSearchOpen && !isMobile && (
          <SearchBar isOpen={isSearchOpen} onToggle={toggleSearch} />
        )}

        <MobileNav isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default Navbar;
