'use client';
import React, { useState } from 'react';
import FormBuilder from '@/dynamics/FormBuilder';
import { signUpFormElements } from '../data/signUpForm';
import StatusModal from '@/components/StatusModal';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '@/store/slices/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setLoading } from '@/store/slices/generalSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { loading } = useSelector((state) => state.auth);
  const [successModal, setSuccessModal] = useState(false);

  const handleSignUp = async (formValues) => {
    const payload = {
      email: formValues.email,
      phone: formValues.phone,
      status: 'active',
      role: 'user',
      password: formValues.password,
      profile: {
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        date_of_birth: formValues.date_of_birth,
        gender: formValues.gender,
        marital_status: formValues.marital_status,
        address: formValues.address,
      },
    };
    dispatch(setLoading(true));
    try {
      await dispatch(signUpUser(payload)).unwrap();
      setSuccessModal(true);
    } catch (error) {
      toast.error(`Sign-up failed: ${error}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleBackButtonClick = () => {
    navigate.back();
  };

  return (
    <>
      <div className="w-full h-[90vh] overflow-auto bg-gray-50">
        <div className="max-w-lg mx-auto p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
            Sign Up
          </h1>
          <p className="mb-2 text-gray-500 text-center">
            Fill in the accurate information below
          </p>

          <FormBuilder
            elements={signUpFormElements(handleBackButtonClick)}
            onSubmit={handleSignUp}
            loadingState={loading}
          />

          <div className="my-4 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?
              <a
                href="/login"
                className="text-pri font-semibold hover:underline ml-2"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
      {successModal && (
        <StatusModal
          statusText="Account Created!"
          statusDesc="You have successfully signed up."
          onClick={() => navigate.replace('/dashboard')}
          type="success"
          btnText="Proceed to Dashboard"
        />
      )}
      <ToastContainer />
    </>
  );
};

export default SignUp;
