'use client';
import React, { useState } from 'react';
import Top from './common/Top';
import TableSection from './common/TableSection';
import { tableData } from '../data/tableData';
import NoDevice from '@/components/NoDevice';

function Devices() {
  const [activeTab, setActiveTab] = useState('added');


  const data = activeTab === 'added' ? tableData : [];

  return (
    <div>
      <Top activeTab={activeTab} setActiveTab={setActiveTab} />

      {data.length > 0 ? (
        <TableSection tableData={data} />
      ) : (
        <div className="flex flex-col justify-center items-center h-96">
          <NoDevice text={`No Device ${activeTab==='added'?'Added':'Registered'}`} subText={'All your devices will be displayed here'} />
        </div>
      )}
    </div>
  );
}

export default Devices;
