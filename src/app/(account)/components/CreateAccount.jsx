import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@/components/Modal';
import FormBuilder from '@/dynamics/FormBuilder';
import { createSeller, createBuyer } from '@/store/slices/userSlice';
import {
  setLoading,
  setOpenCreateAccountModal,
} from '@/store/slices/generalSlice';
import { createSellerFormElements } from '../data/createSellerFormElements';
import { createBuyerFormElements } from '../data/createBuyerFormElements';
import { setCurrentUser } from '@/store/slices/authSlice';

function CreateAccount() {
  const dispatch = useDispatch();
  const { openCreateAccountModal } = useSelector((state) => state.general);
  const { loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [accountType, setAccountType] = useState(null);

  const handleAccountTypeSelect = (type) => {
    setAccountType(type);
  };

  const onSubmit = async (values) => {
    dispatch(setLoading(true));
    try {
      if (accountType === 'seller') {
        const account = await dispatch(createSeller(values)).unwrap();
        dispatch(setCurrentUser({ type: 'buyer', account }));
      } else if (accountType === 'buyer') {
        const account = await dispatch(createBuyer(values)).unwrap();
        dispatch(setCurrentUser({ type: 'buyer', account }));
      }
      dispatch(setOpenCreateAccountModal(false));
    } catch (error) {
      console.error('Failed to submit form:', error);
      dispatch(setLoading(false));
      setAccountType(null);
    } finally {
      dispatch(setLoading(false));
      setAccountType(null);
    }
  };

  const handleBack = () => {
    setAccountType(null);
  };

  return (
    <Modal
      isOpen={openCreateAccountModal}
      onClose={() => {
        dispatch(setOpenCreateAccountModal(false)), setAccountType(null);
      }}
      maxWidth="700px"
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
        Create Account
      </h1>

      {!accountType ? (
        <div className="flex justify-center space-x-5 md:space-x-20 px-5 md:px-20 py-10">
          <button
            onClick={() => handleAccountTypeSelect('seller')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md h-20 md:h-40 w-full flex items-center justify-center"
          >
            Create Seller Account
          </button>
          <button
            onClick={() => handleAccountTypeSelect('buyer')}
            className="px-4 py-2 bg-green-500 text-white rounded-md h-20 md:h-40 w-full flex items-center justify-center"
          >
            Create Buyer Account
          </button>
        </div>
      ) : (
        <>
          <FormBuilder
            elements={
              accountType === 'seller'
                ? createSellerFormElements(handleBack)
                : createBuyerFormElements(handleBack)
            }
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            loadingState={loading}
          />
        </>
      )}
    </Modal>
  );
}

export default CreateAccount;
