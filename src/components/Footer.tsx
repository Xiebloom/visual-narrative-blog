
import { Camera, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">PhotoJournal</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Capturing life's precious moments through the art of photography. 
              Join me on this visual journey as we explore the world together.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors duration-200" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors duration-200" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Portrait</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Landscape</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Street</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Nature</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Travel</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PhotoJournal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
