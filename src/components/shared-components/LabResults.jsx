import React, { useState } from "react";
import downloadIcon from "../../assets/svgs/download.svg";
import "../../assets/styles/scrollbar.css"

const LabResults = ({ details }) => {
  const testResults = details && details.lab_results;
  const [active, setActive] = useState(1);

  const handleSetActive = (index) => {
    setActive(index);
  };
  return (
    <div className="p-4 bg-custom-white rounded-[0.5rem]">
      <h1 className="font-semibold text-2xl">Lab Results</h1>

      <section id="cards" className="w-full mt-2 max-h-[100px] overflow-y-auto">
        {testResults &&
          testResults.map((item, index) => (
            <div
              className={`w-full flex items-center justify-between cursor-pointer ${
                active === index + 1 ? "bg-custom-lightGray" : ""
              } p-2`}
              key={index + 1}
              onClick={() => handleSetActive(index + 1)}
            >
              <span className="text-sm">{item}</span>
              <img src={downloadIcon} alt="download Icon" />
            </div>
          ))}
      </section>
    </div>
  );
};

export default LabResults;
