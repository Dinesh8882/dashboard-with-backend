import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { UserContext } from "../context/userContext";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { setUserData, setLoading ,userData} = useContext(UserContext)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(formData)
            console.log(res);
            
            if (res.data.success) {
                setUserData(res.data.userWithoutPassword)
                navigate('/')
            }
            
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false)
        }
    };

    console.log(userData);
    

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-200">
            <form
                onSubmit={handleSubmit}
                className="w-[260px] flex flex-col gap-3"
            >
                <h2 className="text-lg font-semibold text-gray-800">Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
                <NavLink to='/register'>Don't have an account? <span className="text-blue-600 font-bold">Register</span></NavLink>

            </form>
        </div>
    );
};

export default Login;