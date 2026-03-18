import React from "react";
import StatsCard from "../../components/StatsCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatsCard title="Users" value="120" />
      <StatsCard title="Products" value="45" />
      <StatsCard title="Revenue" value="₹80,000" />
    </div>
  );
};

export default Dashboard;