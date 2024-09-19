'use client';
import React, { useState } from 'react';
import FormBuilder from '@/dynamics/FormBuilder';
import { loginFormElements } from './data/loginForm';

const Login: React.FC = () => {
  const [formData] = useState({});
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const handleLogin = (formValues: FormData) => {
    setLoadingState(true);
    console.log('Login Data:', formValues);
    setLoadingState(false);
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
          loadingState={loadingState}
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
    </div>
  );
};

export default Login;
