// In Production
'use client';
import React, { useContext, useState } from 'react';

const RestContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const [formValues, setFormValues] = useState({})
  return (
    <RestContext.Provider value={{ userProfile, setUserProfile, formValues, setFormValues }}>
      {children}
    </RestContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { ContextProvider, useGlobalContext };
