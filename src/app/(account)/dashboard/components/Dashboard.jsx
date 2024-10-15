'use client';
import React from 'react';
import BuyerDashboard from './buyer/BuyerDashboard';
import SellerDashboard from './seller/SellerDashboard';
import { useSelector } from 'react-redux';
import BackInfo from '@/components/BackInfo';
import NoDevice from '@/components/NoDevice';

function Dashboard() {
  const { accountProfile, currentUser } = useSelector((state) => state.auth);
  const { sellers, buyers } = useSelector((state) => state.user);

  return (
    <div className="h-screen flex flex-col">
      <BackInfo
        main={'Dashboard'}
        sub={'View information about all devices'}
        back={false}
      />
      <div className="bg-white rounded-lg flex-1 flex-col justify-center items-center w-full shadow">
        <p className="text-center my-4">
          I am a {currentUser?.type} and my account name is{' '}
          {currentUser?.account?.company_name ||
            currentUser?.account?.name ||
            accountProfile?.account?.email}
        </p>
        {currentUser?.type === 'buyer' && buyers?.devices?.lenght > 0 ? (
          <BuyerDashboard />
        ) : currentUser?.type === 'seller' && sellers?.devices?.lenght > 0 ? (
          <SellerDashboard />
        ) : (
          <NoDevice
            text={`No Analytics`}
            subText={'Create or register a device'}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
