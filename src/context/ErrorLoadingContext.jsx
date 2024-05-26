import React, { createContext, useState, useContext, useEffect } from "react";

const ErrorLoadingContext = createContext();
export const useErrorAndLoading = () => useContext(ErrorLoadingContext);
export const ErrorAndLoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  useEffect(() => {
  setTimeout(() => {
    setLoading(false); 
  }, 2000); 
  },[])

  return (
    <ErrorLoadingContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </ErrorLoadingContext.Provider>
  );
};
