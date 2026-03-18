import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product" className="hover:text-gray-200">Product</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="hover:text-gray-200">Register</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;