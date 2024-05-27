import React from "react";
import { components } from "../components";
import "../assets/styles/dashboard_grid.css";

function Dashboard() {
  const { Header, LeftSidebar, Main, RightSidebar } = components;

  return (
    <div className="w-full h-[100%] bg-custom-lightGray p-[1.5rem]">
      <Header />
      {/* Dashboard Grid */}
      <div className="dashboard_grid w-full mt-[1.5rem]">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
