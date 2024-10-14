import React from 'react';
import DeviceDetails from '../components/DeviceDetails';
import { generateStaticParams } from '@/dynamics/generateStaticParams';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  console.log(id);
  return <DeviceDetails />;
}

export { generateStaticParams };
