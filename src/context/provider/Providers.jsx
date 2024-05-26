import React from "react";
import { ErrorAndLoadingProvider } from "../ErrorLoadingContext";
import { SelectedIndexProvider } from "../SelectedIndexContext";


const Providers = ({ children }) => {
  return (
    <ErrorAndLoadingProvider>
      <SelectedIndexProvider>
        {children}
      </SelectedIndexProvider>
    </ErrorAndLoadingProvider>
  );
};

export default Providers;
