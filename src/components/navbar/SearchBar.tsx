
import React from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onToggle }) => {
  if (!isOpen) return null;

  return (
    <div className="py-2 px-4 animate-fade-in">
      <div className="relative">
        <Input
          type="search"
          placeholder="Cerca nel sito..."
          className="w-full pr-10"
          autoFocus
        />
        <button
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-cb-dark hover:text-cb-green"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
