'use client';
import React, { useEffect, useState } from 'react';
import GuagesDisplay from '../components/GuagesDisplay';
import FormBuilder from '@/dynamics/FormBuilder';
import { meterTopicQuery } from '@/queries/dashboardQuery';
import { meterForm } from '../data/meterForm';
import { registerDataConsumer } from '@/store/slices/meterSlice';
import { useDispatch, useSelector } from 'react-redux';
import BackInfo from '@/components/BackInfo';

function DeviceDetails() {
  const { dataPipe } = useSelector((state) => state.meter);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    meterTopic: 'device/kodehauz/2B74A838',
  });
  const [meterOptions, setMeterOptions] = useState([]);
  const query = meterTopicQuery('testing');

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
      <div className="flex justify-between items-center">
        <div className="w-full pt-5">
          <BackInfo
            main={'Device Details'}
            sub={'View your device details here'}
          />
        </div>
        <div className="w-full ">
          <FormBuilder
            elements={meterForm(meterOptions || [])}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>
      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* Meter Details Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">
                Meter Details
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500">Device ID</p>
                  <p className="text-gray-900">012</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Serial No.</p>
                  <p className="text-gray-900">PHED5UV#PHED5UV#</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Meter Type</p>
                  <p className="text-gray-900">Prepaid</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phase Type</p>
                  <p className="text-gray-900">Single</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Power Rating (W)</p>
                  <p className="text-gray-900">240</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Voltage(V)</p>
                  <p className="text-gray-900">120</p>
                </div>
              </div>
            </div>

            {/* Installation Details Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">
                Installation Details
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500">Communication Method</p>
                  <p className="text-gray-900">Single</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Firmware Version</p>
                  <p className="text-gray-900">Prepaid</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Currency Rating</p>
                  <p className="text-gray-900">240</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Accuracy Class</p>
                  <p className="text-gray-900">Class A</p>
                </div>
              </div>
            </div>

            {/* Certification and Compliance Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">
                Certification and Compliance
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500">Certification Number</p>
                  <p className="text-gray-900">Single</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Standards Compliance</p>
                  <p className="text-gray-900">Prepaid</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Utility Approval</p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Click to view
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <GuagesDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceDetails;
