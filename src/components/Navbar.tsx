import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif tracking-wider">ESSENCE</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">New</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Perfumes</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Skincare</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Collections</a>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-gray-800 cursor-pointer" />
            <User className="w-5 h-5 text-gray-800 cursor-pointer" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-800 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}