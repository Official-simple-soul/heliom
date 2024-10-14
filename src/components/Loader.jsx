'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector((state) => state.general.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex justify-end items-end bg-black bg-opacity-50 z-50 pointer-events-auto">
      <div className="absolute bottom-4 right-4">
        <div className="loader border-4 border-dashed border-pri rounded-full w-12 h-12 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
