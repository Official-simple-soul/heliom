'use client'
import React from 'react';
import BuyerDashboard from './buyer/BuyerDashboard';
import SellerDashboard from './seller/SellerDashboard';
import { useGlobalContext } from '@/store/context';

function Dashboard() {
  const {userProfile} = useGlobalContext()

  const user = userProfile.user;
  return (
    <div>
      {(user === 'buyer' && <BuyerDashboard />) ||
        (user === 'seller' && <SellerDashboard />) || <div>Invalid User</div>}
    </div>
  );
}

export default Dashboard;
