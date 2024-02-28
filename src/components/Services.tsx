import React from 'react';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <div className='w-full p-2 pt-10 mt-'>
      <div className='max-w-[1240px] mx-auto flex flex-col items-center h-full'>
        <h6 className='text-4xl py-4'>Our Services</h6>
        <div className='grid md:grid-cols-2 md:gap-x-20 md:gap-y-6'>


          <div className='py-3 md:w-[370px] w-[300px] relative'>
            <div className='relative w-full h-full'>
              <Image 
                src='/assets/services/manicure.png'
                width={400}
                height={530}
                objectFit='cover'
                alt='Russian Manicure'
                style={{ zIndex: 10 }}
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='bg-black opacity-50 z-10' style={{ height: '20%', width: '100%' }} />
                <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
                  <button className='bg-transparent text-white text-center text-3xl pt-3 border-none hover:scale-105 ease-in duration-500 uppercase'>Russian Nails</button>                
                </div>
              </div>
            </div>
          </div>

          <div className='py-3 md:w-[370px] w-[300px] relative'>
            <div className='relative w-full h-full'>
              <Image 
                src='/assets/services/skin-care.png'
                width={400}
                height={530}
                objectFit='cover'
                alt='Skin Care'
                style={{ zIndex: 10 }}
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='bg-black opacity-50 z-10' style={{ height: '20%', width: '100%' }} />
                <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
                  <button className='bg-transparent text-white text-center text-3xl pt-3 border-none hover:scale-105 ease-in duration-500 uppercase'>Skin Care</button>                
                </div>
              </div>
            </div>
          </div>

          <div className='py-3 md:w-[370px] w-[300px] relative'>
            <div className='relative w-full h-full'>
              <Image 
                src='/assets/services/laser.png'
                width={400}
                height={530}
                objectFit='cover'
                alt='Laser'
                style={{ zIndex: 10 }}
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='bg-black opacity-50 z-10' style={{ height: '20%', width: '100%' }} />
                <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
                  <button className='bg-transparent text-white text-center text-3xl pt-3 border-none hover:scale-105 ease-in duration-500 uppercase'>Laser</button>                
                </div>
              </div>
            </div>
          </div>

          <div className='py-3 md:w-[370px] w-[300px] relative'>
            <div className='relative w-full h-full'>
              <Image 
                src='/assets/services/eyelashes.png'
                width={400}
                height={530}
                objectFit='cover'
                alt='Russian Manicure'
                style={{ zIndex: 10 }}
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='bg-black opacity-50 z-10' style={{ height: '20%', width: '100%' }} />
                <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
                  <button className='bg-transparent text-white text-center text-3xl pt-3 border-none hover:scale-105 ease-in duration-500 uppercase'>Eyelashes</button>                
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
