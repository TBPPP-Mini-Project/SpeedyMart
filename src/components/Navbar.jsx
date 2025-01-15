import { useState } from 'react';
import { ShoppingCart, Bell, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full bg-green-500 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0 flex items-center">
            <ShoppingCart size={20} className="text-white" />
            <h1 className="text-xl font-bold text-white ml-2">SpeedyMart</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-white hover:text-gray-200 px-2 py-1 text-sm rounded-md transition-all">
              Home
            </a>
            <a href="#shop" className="text-white hover:text-gray-200 px-2 py-1 text-sm rounded-md transition-all">
              Shop
            </a>
            <a href="#deals" className="text-white hover:text-gray-200 px-2 py-1 text-sm rounded-md transition-all">
              Deals
            </a>
            <a href="#categories" className="text-white hover:text-gray-200 px-2 py-1 text-sm rounded-md transition-all">
              Categories
            </a>
            <a href="#about" className="text-white hover:text-gray-200 px-2 py-1 text-sm rounded-md transition-all">
              About Us
            </a>
            <a href="#contact" className="text-white hover:text-gray-200 px-2 py-1 text-sm rounded-md transition-all">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-green-600">
              <Bell className="h-4 w-4 text-white" />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-green-600"
              >
                <User className="h-4 w-4 text-white" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1">
                  <a href="#profile" className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#orders" className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
                    My Orders
                  </a>
                  <button className="flex items-center w-full px-3 py-1 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="h-3 w-3 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
