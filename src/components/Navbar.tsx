
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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
            <Link to="/" className="flex items-center mr-6">
              <img
                src="/lovable-uploads/8491c047-d089-4ccb-9662-84da916131ba.png"
                alt="ChromeBookItalia"
                className="h-8"
              />
            </Link>

            {!isMobile && (
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
            )}
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
          <div className="py-2 px-4 animate-fade-in">
            <div className="relative">
              <Input
                type="search"
                placeholder="Cerca nel sito..."
                className="w-full pr-10"
                autoFocus
              />
              <button
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cb-dark hover:text-cb-green"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {isMenuOpen && isMobile && (
          <div className="md:hidden px-4 py-4 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <div className="relative mb-2">
                <Input type="search" placeholder="Cerca nel sito..." />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cb-dark" />
              </div>
              <Link
                to="/"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/news/chromebook"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                ChromeBook
              </Link>
              <Link
                to="/news/chromeos"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                ChromeOS
              </Link>
              <Link
                to="/news/android"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                Android
              </Link>
              <Link
                to="/news/chrome"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                Chrome
              </Link>
              <Link
                to="/forum"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                Forum
              </Link>
              <Link
                to="/chat"
                className="text-cb-dark hover:text-cb-green transition-colors"
                onClick={toggleMenu}
              >
                ChatBot
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
