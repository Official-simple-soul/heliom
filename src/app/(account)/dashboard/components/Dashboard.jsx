'use client';
import React from 'react';
import BuyerDashboard from './buyer/BuyerDashboard';
import SellerDashboard from './seller/SellerDashboard';
import { useSelector } from 'react-redux';
import BackInfo from '@/components/BackInfo';

function Dashboard() {
  const { accountProfile } = useSelector((state) => state.auth);
  return (
    <div className="">
      <BackInfo
        main={'Dashboard'}
        sub={'View information about all devices'}
        back={false}
      />
      <div className="bg-white rounded-lg h-screen w-full shadow">
        {accountProfile?.user?.type === 'buyer' ? (
          <BuyerDashboard meterTopic={formData.meterTopic} />
        ) : accountProfile?.user?.type === 'seller' ? (
          <SellerDashboard />
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
