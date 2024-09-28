import React from 'react'
import Image from 'next/image';
import { FaPen } from 'react-icons/fa';
import { useGlobalContext } from '@/store/context';
import { useRouter } from 'next/navigation';

function UserProfile() {
    const { userProfile } = useGlobalContext();
    const navigate = useRouter();

    const handleEditClick = () => {
      navigate.push('/account/edit-profile');
    };
  
    const seller = userProfile?.user === 'seller';
  return (

         <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:flex items-center gap-4">
            <Image
              src="/phed.svg"
              alt="Company Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-0"
            />
            <div className="text-center md:text-left">
              <h1 className="text-lg md:text-2xl font-medium text-gray-800">
                PHED LTD
              </h1>
              <p className="text-sm md:text-base text-gray-500">
                info@phed.com.ng
              </p>
              <p className="text-sm md:text-base text-gray-500">
                #36 Alhaji Abubakar Avenue, Lagos, Nigeria
              </p>
            </div>
          </div>
          <button
            className="flex items-center space-x-2 border border-pri rounded px-2 py-1 md:px-4 md:py-1 md:mr-32 mt-4 md:mt-0 text-pri hover:bg-blue-50"
            onClick={handleEditClick}
          >
            <FaPen className="text-pri" />
            <span className="font-normal text-[14px] md:text-[16px]">Edit</span>
          </button>
        </div>

        <div className="mt-8 text-gray-500 font-h-normal">
          <h2 className="text-lg md:text-xl font-h-medium text-gray-700 border-b pb-2 mb-4">
            {seller ? 'Company Information' : 'User Information'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-base md:text-lg text-gray-600">
                {seller ? 'Company Name' : 'Full Nmae'}
              </p>
              <p className="">PHED LTD</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-600">
                {seller ? 'Company Address' : 'Address'}
              </p>
              <p className="">#36 Alhaji Abubakar Avenue, Lagos, Nigeria</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-600">
                {seller ? 'Company Email Address' : 'Email Address'}
              </p>
              <p className="">info@phed.com.ng</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-600">
                {seller ? 'Company Phone' : 'Phone'}
              </p>
              <p className="">+234 9078954312</p>
            </div>
          </div>

          {seller && (
            <div className="mt-8">
              <h2 className="text-lg md:text-xl font-h-medium text-gray-700 border-b pb-2 mb-4">
                Others
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-base md:text-lg text-gray-600">
                    CAC Registration Number
                  </p>
                  <p className="">WH67495736J</p>
                </div>
                <div>
                  <p className="text-base md:text-lg text-gray-600">
                    Tax Identification Number
                  </p>
                  <p className="">GT678980K653L</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  
  )
}

export default UserProfile
