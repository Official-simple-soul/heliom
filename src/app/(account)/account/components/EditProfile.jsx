'use client';
import React, { useState } from 'react';
import BackInfo from '@/components/BackInfo';
import FormBuilder from '@/dynamics/FormBuilder';
import { useRouter } from 'next/navigation';
import { editProfileFormElement } from '../data/editProfileFormElement';
import { CiCamera } from 'react-icons/ci';
import { useGlobalContext } from '@/store/context';

function EditProfile() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const {userProfile} = useGlobalContext()

  // Handle the image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
console.log(selectedImage);
  const handleSubmit = () => {
    setLoading(true);
    console.log('Info values:', formData);
    setLoading(false);
  };

  return (
    <div>
      <BackInfo main={'Edit Profile'} sub={'Edit your profile here'} />
      <div className="bg-[#FFFFFF] p-6 rounded-[20px] flex flex-col justify-between min-h-[607px]">
      <div className="flex items-center space-x-4">
      {/* Image Picker */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300">
        {/* Background Image or placeholder */}
        <label
          className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          {!selectedImage && (
            <div className="text-gray-500 text-sm flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7H5"
                />
              </svg>
              <span>Upload</span>
            </div>
          )}
          {selectedImage && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xs opacity-0 hover:opacity-100">
              <CiCamera className='text-2xl' />
            </div>
          )}
        </label>
      </div>

      {/* User Info */}
      <div>
        <h1 className="text-lg font-h-medium text-gray-900">
          {'PHED LTD'}
        </h1>
        <p className="text-gray-500">{'info@phed.com.ng'}</p>
      </div>
    </div>

        <FormBuilder
          elements={editProfileFormElement(userProfile?.user)}
          formData={formData}
          setFormData={setFormData}
          loadingState={loading}
        />
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => navigate.replace('/account')}
            className="min-w-[188px] px-[16px] py-[8px] text-pri font-h-medium rounded-[8px] border border-pri"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="min-w-[188px] px-[16px] py-[8px] font-h-medium rounded-[8px] bg-pri text-[#FFFFFF]"
            disabled={loading}
          >
            {loading ? 'loading ...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
