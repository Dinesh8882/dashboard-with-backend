import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const { userData, loading } = useContext(UserContext)
  const navigate = useNavigate()
  
  
  if (loading) return null
  const handleNavigate = ()=>{
    navigate("/profile")
  }


  return (
    <nav className="bg-blue-500 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        <h1 className="text-xl font-bold">MyApp</h1>

        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product" className="hover:text-gray-200">Product</NavLink>
          </li>
          {
            userData?.role === "admin" && (
              <li>
                <NavLink to="/admin" className="hover:text-gray-200">Admin</NavLink>
              </li>
            )
          }
          {!userData ? (
            <li>
              <NavLink to="/register" className="hover:text-gray-200">Register</NavLink>
            </li>
          ) : (
            <li onClick={handleNavigate} className="cursor-pointer flex justify-center items-center text-xl">
              <CgProfile />
            </li>
          )}



        </ul>

      </div>
    </nav>
  );
};

export default Navbar;