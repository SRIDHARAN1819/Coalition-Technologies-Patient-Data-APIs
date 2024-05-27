import React from "react";
import logo from "../assets/svgs/TestLogo.svg";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-custom-white grid place-content-center">
      <img src={logo} alt="logo" />
      <h1 className="text-2xl font-semibold text-center my-5 text-black">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
