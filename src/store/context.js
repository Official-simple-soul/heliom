// In Production
'use client';
import React from 'react';

const RestContext = React.createContext();

const ContextProvider = ({ children }) => {
  return <RestContext.Provider value={{}}>{children}</RestContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { ContextProvider, useGlobalContext };
