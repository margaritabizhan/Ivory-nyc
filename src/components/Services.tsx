"use client"

import React from 'react'
import Image from 'next/image'

const Services: React.FC = () => {
  return (
    <div className='w-full lg:h-screen p-2 pt-10'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h6 className='text-4xl text-center font-bold py-4'>Our Services</h6>
        <div className='grid md:grid-cols-2'>
          <div className='w-[400px] rounded-xl hover:scale-110 ease-in duration-500'>
            <div>
              <Image src='/assets/services/eyelashes.png' width={400} height={400} alt='Eyelashes' loading='lazy'
                className='rounded-xl shadow-lg shadow-stone-700'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services