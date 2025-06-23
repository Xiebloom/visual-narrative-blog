
import { useState } from "react";
import { Camera, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">PhotoJournal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Blog</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
