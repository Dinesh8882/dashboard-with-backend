import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Products from "./admin/Products";
import Orders from "./admin/Orders";
import Settings from "./admin/Settings";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderPage = () => {
    switch (activeTab) {
      case "users":
        return <Users />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1">
        <Topbar activeTab={activeTab} />
        <div className="p-6">{renderPage()}</div>
      </div>
    </div>
  );
};

export default AdminLayout;