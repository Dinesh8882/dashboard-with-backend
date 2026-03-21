import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function PageNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
            <div className="text-center max-w-xl">
                {/* Animated 404 */}
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
                >
                    404
                </motion.h1>

                {/* Message */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-lg text-gray-300"
                >
                    Oops! The page you are looking for does not exist.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg"
                    >
                        Go Home
                    </Link>
                </motion.div>

                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-10"
                >
                    <div className="w-full h-40 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-400">Lost in space 🚀</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// Usage in React Router
// import PageNotFound from './PageNotFound';
//
// <Routes>
//   <Route path="*" element={<PageNotFound />} />
// </Routes>
