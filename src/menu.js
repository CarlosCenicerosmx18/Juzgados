import React, { useState } from "react";
import logo from './logo.png';
<img src={logo} className="App-logo" alt="logo" />
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className="bg-gray-500 p-4 flex flex-col lg:flex-row justify-between items-center">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      {/* Menú de hamburguesa para dispositivos móviles */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 14H5v-1h14v1zM19 7H5V6h14v1zM19 21H5v-1h14v1z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm16 4H4v-1h16v1z"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Menú de navegación */}
      <div className={`lg:flex lg:flex-row ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-8">
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block lg:inline-block">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block lg:inline-block">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block lg:inline-block">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block lg:inline-block">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block lg:inline-block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
