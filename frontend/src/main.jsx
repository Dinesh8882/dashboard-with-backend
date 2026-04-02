import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import ContextProvider from "./context/userContext.jsx";
import Loader from "./components/Loader.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer />
    <Loader />
    <ContextProvider>
      <Navbar />
      <App />
    </ContextProvider>
  </BrowserRouter>
);
