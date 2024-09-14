// In Production
'use client';
import React, { useContext, useState } from 'react';

const RestContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  return (
    <RestContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </RestContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { ContextProvider, useGlobalContext };
