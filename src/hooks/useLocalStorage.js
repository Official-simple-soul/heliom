import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    try {
      const value = window?.localStorage.getItem(key);
      if (value) {
        setState(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, [key]);
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
