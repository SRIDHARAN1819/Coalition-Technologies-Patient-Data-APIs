import React, { useState } from "react";
import "../../assets/styles/table.css";

const Table = ({ details }) => {
  return (
    <div className="bg-custom-white p-4 rounded-[0.5rem]">
      <h1 className="font-semibold text-2xl">Diagnostic List</h1>
      <div className="table-container max-h-[180px]">
        <table className="mt-5 w-full">
          <thead>
            <tr className="text-xs font-semibold text-left bg-custom-lightGray">
              <th className="py-3 px-2">Problem/Diagnosis</th>
              <th className="py-3 px-2">Description</th>
              <th className="py-3 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {details &&
              details.diagnostic_list.map((item, index) => (
                <tr key={index} style={{ borderBottom: "1px solid rgb(246, 247, 248)" }}>
                  <td className="py-3 px-2">{item.name}</td>
                  <td className="py-3 px-2">{item.description}</td>
                  <td className="py-3 px-2">{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
