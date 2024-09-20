'use client'
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const GoBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center space-x-2 text-pri cursor-pointer"
    >
      <FaArrowLeft className="text-lg" />
      <span className="font-medium">Back</span>
    </button>
  );
};

export default GoBack;
