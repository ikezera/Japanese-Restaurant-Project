import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Combos',
    'Mais Pedidos',
    'Entradas',
    'Monte seu Poke',
    'Pokes',
    'Monte seu Burrito',
    'Poke Burrito',
    'Sobremesas',
    'Bebidas',
    'Extras'
  ];

  const topMenuItems = ['Cardápio', 'Sobre', 'Contato'];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      {/* Top section with centered logo */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="w-12"></div> {/* Spacer for centering */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold text-[rgb(119,218,206)] japanese-heading">Poke You</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[rgb(119,218,206)]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section with main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 hidden md:flex items-center justify-center space-x-8">
          {topMenuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="menu-link text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-6">
              {/* Main navigation items */}
              {topMenuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-700 hover:text-[rgb(119,218,206)] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>
              
              {/* Menu items */}
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-700 hover:text-[rgb(119,218,206)] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;