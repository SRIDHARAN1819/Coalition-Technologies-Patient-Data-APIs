import React from "react";
import "../../assets/styles/chart_grid.css";

const ChartGridCards = ({ index, icon, title, value, status, arrowIcon }) => {
  const applyBgColor = index === 0 ? "bg-custom-lightBlue" : "bg-custom-lightPink";

  return (
    <div className={`gridchild_div ${applyBgColor} p-[0.8rem]`}>
      <img src={icon} alt="icon" className="w-[60px] h-[60px]" />
      <p className="font-semibold pt-3 text-sm">{title}</p>
      <h1 className="text-2xl font-bold pb-3">{value}</h1>
      <p className="text-sm flex items-center gap-2">
        <span>{index === 2 && <img src={arrowIcon} alt="arrow down" />}</span>
        {status}
      </p>
    </div>
  );
};

export default ChartGridCards;
