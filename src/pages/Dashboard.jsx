import React from "react";
import { components } from "../components";
import "../assets/styles/dashboard_grid.css";

const { Header, LeftSidebar, Main, RightSidebar } = components;

function Dashboard() {
  return (
    <div className="w-full h-[100%] bg-custom-lightGray p-8">
      <Header />
      {/* Dashboard Grid */}
      <div className="dashboard_grid w-full mt-10">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
