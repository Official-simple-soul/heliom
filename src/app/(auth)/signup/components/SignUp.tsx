"use client";
import React, { useState } from "react";
import FormBuilder from "@/dynamics/FormBuilder";
import { signUpFormElements } from "../data/signUpForm";
import StatusModal from "@/components/StatusModal";

const SignUp = ({ setPage }) => {
  const [formData] = useState<FormData>({});
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [succesModal, setSuccesModal] = useState(false);

  const handleSignUp = (formValues: FormData) => {
    setLoadingState(true);
    console.log("Login Data:", formValues);
    setSuccesModal(true);
    setLoadingState(false);
  };

  const handleBackButtonClick = () => {
    setPage(1);
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
            formData={formData}
            onSubmit={handleSignUp}
            loadingState={loadingState}
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
      {succesModal && (
        <StatusModal
          statusText="Account Created!"
          statusDesc="You have successfully signed up as a buyer. Please go ahead and update your profile."
          onClick={() => setSuccesModal(false)}
          type="success"
        />
      )}
    </>
  );
};

export default SignUp;
