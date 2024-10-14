'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormBuilder from '@/dynamics/FormBuilder';
import { loginFormElements } from './data/loginForm';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/store/slices/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDispatch, RootState } from '@/store';
import { setLoading } from '@/store/slices/generalSlice';

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useRouter();
  const [formData] = useState({});
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleLogin = async (formValues: FormData) => {
    dispatch(setLoading(true));
    try {
      await dispatch(loginUser(formValues)).unwrap();

      toast.success('Login successful!');
      navigate.replace('/dashboard');
    } catch (error) {
      toast.error(`Login failed: ${error}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md md:bg-white p-8 md:shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome Back
        </h1>
        <p className="mb-4 text-gray-500 text-center">
          To sign in, please type in your email and password
        </p>

        <FormBuilder
          elements={loginFormElements}
          formData={formData}
          onSubmit={handleLogin}
          loadingState={loading}
        />

        <div className=" text-right">
          <a
            href="#"
            className="text-sm text-pri font-semibold hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don’t have an account?
            <a
              href="/signup"
              className="text-pri font-semibold hover:underline ml-2"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
