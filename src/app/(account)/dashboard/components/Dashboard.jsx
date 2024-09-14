import React from 'react';
import BuyerDashboard from './buyer/BuyerDashboard';
import SellerDashboard from './seller/SellerDashboard';

function Dashboard() {
  const user = 'buyer';
  return (
    <div>
      {(user === 'buyer' && <BuyerDashboard />) ||
        (user === 'seller' && <SellerDashboard />) || <div>Invalid User</div>}
    </div>
  );
}

export default Dashboard;
