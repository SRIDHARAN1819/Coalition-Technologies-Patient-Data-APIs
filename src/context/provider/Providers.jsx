import React from "react";
import { ErrorAndLoadingProvider } from "../ErrorLoadingContext";

const Providers = ({ children }) => {
  return (
    <ErrorAndLoadingProvider>
        {children}
    </ErrorAndLoadingProvider>
  );
};

export default Providers;
