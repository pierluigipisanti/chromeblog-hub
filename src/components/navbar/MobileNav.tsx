
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden px-4 py-4 bg-white animate-fade-in">
      <nav className="flex flex-col space-y-4">
        <div className="relative mb-2">
          <Input type="search" placeholder="Cerca nel sito..." />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cb-dark" />
        </div>
        <Link
          to="/"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          Home
        </Link>
        <Link
          to="/news"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          News
        </Link>
        <Link
          to="/recensioni"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          Recensioni
        </Link>
        <Link
          to="/trucchi-consigli"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          Trucchi&Consigli
        </Link>
        <Link
          to="/faq"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          FAQ
        </Link>
        <Link
          to="/forum"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          Forum
        </Link>
        <Link
          to="/chat"
          className="text-cb-dark hover:text-cb-green transition-colors"
          onClick={onToggle}
        >
          ChatBot
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
