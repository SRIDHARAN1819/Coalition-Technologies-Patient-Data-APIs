import React, { createContext, useState, useContext } from "react";

const SelectedIndexContext = createContext();
export const useSelectedIndex = () => useContext(SelectedIndexContext);

export const SelectedIndexProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(3);
  const staticIndex = 3;

  const updateSelectedIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <SelectedIndexContext.Provider
      value={{ selectedIndex, updateSelectedIndex }}
    >
      {children}
    </SelectedIndexContext.Provider>
  );
};
