import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ["dashboard", "users", "products","add product", "orders", "settings"];

 
  return (
    <div className="w-64 bg-blue-600 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>

      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`p-2 rounded cursor-pointer capitalize mb-2 ${activeTab === tab
            ? "bg-white text-blue-600 font-semibold"
            : "hover:bg-blue-500"
            }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;