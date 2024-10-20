'use client';
import React, { useState, useEffect } from 'react';
import Top from './common/Top';
import TableSection from './common/TableSection';
import NoDevice from '@/components/NoDevice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '@/store/slices/deviceSlice';

function Devices() {
  const [activeTab, setActiveTab] = useState('added');
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.devices);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser?.account) {
      dispatch(
        fetchDevices({
          orgType: currentUser?.type,
          orgId: currentUser.account?.id,
        })
      );
    }
  }, [dispatch, currentUser]);

  const data = activeTab === 'added' ? devices : [];

  return (
    <div>
      <Top activeTab={activeTab} setActiveTab={setActiveTab} />

      {data.length > 0 ? (
        <TableSection tableData={data} />
      ) : (
        <div className="flex flex-col justify-center items-center h-96">
          <NoDevice
            text={`No Device ${activeTab === 'added' ? 'Added' : 'Registered'}`}
            subText={'All your devices will be displayed here'}
          />
        </div>
      )}
    </div>
  );
}

export default Devices;
