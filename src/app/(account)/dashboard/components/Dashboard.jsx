'use client';
import React, { useState, useEffect } from 'react';
import BuyerDashboard from './buyer/BuyerDashboard';
import SellerDashboard from './seller/SellerDashboard';
import { useGlobalContext } from '@/store/context';
import FormBuilder from '@/dynamics/FormBuilder';
import { meterTopicQuery } from '@/queries/dashboardQuery';
import { meterForm } from '../data/meterForm';

function Dashboard() {
  const { userProfile, dataPipe, registerDataConsumer } = useGlobalContext();
  const user = userProfile.user;
  const [formData, setFormData] = useState({
    meterTopic: 'device/kodehauz/2B74A838',
  });
  const [meterOptions, setMeterOptions] = useState([]);

  const query = meterTopicQuery('testing');

  useEffect(() => {
    registerDataConsumer(`meterTopic`, query, 5000);
  }, []);

  useEffect(() => {
    const options = dataPipe['meterTopic']?.map((topic) => ({
      value: topic.value,
      text: topic.value.split('/')[2],
    }));

    setMeterOptions(options);
  }, [dataPipe['meterTopic']]);

  return (
    <div className="">
      <FormBuilder
        elements={meterForm(meterOptions || [])}
        formData={formData}
        setFormData={setFormData}
      />
      {user === 'buyer' ? (
        <BuyerDashboard meterTopic={formData.meterTopic} />
      ) : user === 'seller' ? (
        <SellerDashboard />
      ) : (
        <div>Invalid User</div>
      )}
    </div>
  );
}

export default Dashboard;
