import Image from 'next/image'
import React from 'react'

function NoDevice({text, subText}) {
  return (
    <div className='flex flex-col items-center justify-center space-y-3'>
      <Image src={'/no-device.svg'} height={200} width={200} alt=''/>
      <div className="space-y-2 text-center">
      <p className='font-h-bold'>{text}</p>
      <p className='text-sm text-gray-500'>{subText}</p>
      </div>
    </div>
  )
}

export default NoDevice
