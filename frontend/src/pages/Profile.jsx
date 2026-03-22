import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { userLogout, userData } = useContext(UserContext);
    const navigate = useNavigate();


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

                {/* Profile Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                        {userData?.name?.charAt(0).toUpperCase()}
                    </div>
                    <h2 className="text-xl font-semibold mt-3">{userData?.name}</h2>
                    <p className="text-gray-500 text-sm">{userData?.email}</p>
                </div>

                {/* Info Section */}
                <div className="space-y-4 mb-6">
                    <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{userData?.name}</p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{userData?.email}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate("/update-profile")}
                        className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Update Profile
                    </button>

                    <button
                        onClick={userLogout}
                        className="w-1/2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;