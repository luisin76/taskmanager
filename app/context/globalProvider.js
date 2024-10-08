"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";

// Create contexts
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>{children}</GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

// Custom hooks
export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
