'use client';
import React, { useState, useEffect } from 'react';
import BuyerDashboard from './buyer/BuyerDashboard';
import SellerDashboard from './seller/SellerDashboard';
import { useGlobalContext } from '@/store/context';
import FormBuilder from '@/dynamics/FormBuilder';
import { meterTopicQuery } from '@/queries/dashboardQuery';
import { meterForm } from '../data/meterForm';
import { registerDataConsumer } from '@/store/slices/meterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
  const { userProfile } = useGlobalContext();
  const { dataPipe } = useSelector((state) => state.meter);
  const { accountProfile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = userProfile.user;
  const [formData, setFormData] = useState({
    meterTopic: 'device/kodehauz/2B74A838',
  });
  const [meterOptions, setMeterOptions] = useState([]);
  console.log('pipe', dataPipe);
  const query = meterTopicQuery('testing');

  console.log('profile', accountProfile);

  useEffect(() => {
    dispatch(
      registerDataConsumer({ key: `meterTopic`, query, interval: 5000 })
    );
  }, [dispatch, query]);

  useEffect(() => {
    const options = dataPipe?.['meterTopic']?.map((topic) => ({
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
