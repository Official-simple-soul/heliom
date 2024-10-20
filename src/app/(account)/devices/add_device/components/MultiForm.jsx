'use client';
import { useState } from 'react';
import TechnicalSpecifications from './TechnicalSpecifications';
import MeterDetails from './MeterInventory';
import RegulatoryCompliance from './RegulatoryCompliance';
import StatusModal from '@/components/StatusModal';
import { FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createNewDevice, fetchDevices } from '@/store/slices/deviceSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function MultiForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [confirmModal, setConfirmModal] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useRouter();

  const tabs = [
    'Meter Inventory Details',
    'Technical Specifications',
    'Certification and Compliance',
  ];

  const handleFormSubmission = (currentIndex) => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(currentIndex + 1);
    } else {
      setConfirmModal(true);
    }
  };

  const handleBack = () => {
    setActiveTab(activeTab - 1);
  };

  const handleAddDevice = async () => {
    setConfirmModal(false);
    const deviceData = {
      ...formValues,
      seller_id: currentUser?.account.id,
    };
    try {
      await dispatch(
        createNewDevice({
          orgType: currentUser?.type,
          orgId: currentUser?.account.id,
          deviceData,
        })
      ).unwrap();

      dispatch(
        fetchDevices({
          orgType: currentUser?.type,
          orgId: currentUser.account?.id,
        })
      );
      toast.success('Device created successfully');
      navigation.back();
      console.log('Device added successfully!');
    } catch (error) {
      toast.success('Error while creating device', error + '');
      console.error('Failed to add device:', error);
    } finally {
      setConfirmModal(false);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-row mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            disabled={index > activeTab}
            className={`min-w-[198px] h-[44px] flex justify-center items-center px-[10px] mx-2 rounded-lg text-center leading-5  ${
              activeTab === index
                ? 'bg-[#EEF0FE] text-pri font-h-medium border border-pri'
                : 'bg-[#E0E0E01A] font-h-light text-[#8D8E96]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 0 && (
        <MeterDetails
          setActiveTab={() => handleFormSubmission(0)}
          isLastStep={false}
          setFormValues={setFormValues}
        />
      )}
      {activeTab === 1 && (
        <TechnicalSpecifications
          setActiveTab={() => handleFormSubmission(1)}
          isLastStep={false}
          handleBack={handleBack}
          setFormValues={setFormValues}
        />
      )}
      {activeTab === 2 && (
        <RegulatoryCompliance
          setActiveTab={() => handleFormSubmission(2)}
          isLastStep={true}
          handleBack={handleBack}
          setFormValues={setFormValues}
        />
      )}

      {confirmModal && (
        <StatusModal
          statusText="Confirm"
          statusDesc="Are you sure you want to add this device"
          onClick={handleAddDevice}
          type="success"
          icon={<FaQuestion color="blue" size={40} />}
          btnText="Continue"
        />
      )}
    </div>
  );
}
