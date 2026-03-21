import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { logout } from "../services/authService";


const Navbar = () => {
  const { userData, loading, setUserData } = useContext(UserContext)
  const navigate = useNavigate()
  if (loading) return null

  const userLogout = async () => {
    await logout()
    setUserData(null)
    navigate('/')
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
          {!userData ? (
            <li>
              <NavLink to="/register" className="hover:text-gray-200">Register</NavLink>
            </li>
          ) : (
            <li onClick={userLogout}>
              <NavLink to="#" className="hover:text-gray-200">Logout</NavLink>
            </li>
          )}

          {
            userData?.role === "admin" && (
              <li>
                <NavLink to="/admin" className="hover:text-gray-200">Admin</NavLink>
              </li>
            )
          }

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;