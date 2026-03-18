import React from "react";

const Topbar = ({ activeTab }) => {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold capitalize">{activeTab}</h1>
      <p className="text-gray-500">Admin Panel</p>
    </div>
  );
};

export default Topbar;