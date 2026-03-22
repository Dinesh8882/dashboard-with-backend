import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../services/authService";

const UpdateProfile = () => {
    const { userData, setUserData} = useContext(UserContext);

    const [formData, setFormData] = useState({
        name: userData?.name || "",
        email: userData?.email || "",
    });

    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading ] = useState(false)

    // handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // handle update
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage("");
            setLoading(true)

            const res = await updateProfile(formData)
            if (res.data.success) {
                setUserData(res.data.user)
                setMessage("Profile updated successfully ");
                setTimeout(() => {
                    navigate("/profile");
                }, 1500)

            } else {
                setMessage(res.data.message || "Update failed ");
            }

        } catch (error) {
            setMessage("Something went wrong ");
            console.log(error.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Update Profile
                </h2>

                {/* Message */}
                {message && (
                    <p className="text-center mb-4 text-sm text-blue-600">
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-1/2 py-2 rounded-lg text-white transition ${loading
                                ? "bg-blue-300 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            {loading ? "Updating..." : "Save"}
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/profile")}
                            className="w-1/2 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;