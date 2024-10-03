// In Production
'use client';
import React, { useContext, useEffect, useState } from 'react';
import { fetchfluxDBData } from '@/services/fluxdata.service';

const RestContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({ user: 'buyer' });
  const [formValues, setFormValues] = useState({});
  const [dataPipe, setDataPipe] = useState({});
  const [consumers, setConsumers] = useState([]);

  const registerDataConsumer = (key, query, interval) => {
    setConsumers((prev) => [...prev, { key, query, interval, last_update: 0 }]);
  };

  useEffect(() => {
    const updater = setInterval(() => {
      const currentTime = Date.now();

      consumers.forEach(({ key, query, last_update, interval }) => {
        if (currentTime - last_update > interval) {
          fetchfluxDBData(query)
            .then((response) => {
              setDataPipe((prev) => ({ ...prev, [key]: response }));
              setConsumers((prevConsumers) =>
                prevConsumers.map((consumer) =>
                  consumer.key === key
                    ? { ...consumer, last_update: currentTime }
                    : consumer
                )
              );
            })
            .catch((err) => {
              console.error(`Error fetching data for ${key}:`, err);
            })
            .finally(() => {
              console.log(`data fetched for consumer ${key} ${query}`);
            });
        }
      });
    }, 1000);

    return () => {
      clearInterval(updater);
    };
  }, [consumers]);

  return (
    <RestContext.Provider
      value={{
        userProfile,
        setUserProfile,
        formValues,
        setFormValues,
        dataPipe,
        setDataPipe,
        registerDataConsumer,
      }}
    >
      {children}
    </RestContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { ContextProvider, useGlobalContext };
