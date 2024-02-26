"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

import { Scrollbar, Keyboard, Mousewheel, FreeMode } from 'swiper/modules';
import Image from 'next/image';

const Carousel: React.FC = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        
        freeMode={{
          "enabled": true,
        }}

        scrollbar={{
          "draggable": true
        }}
        keyboard={{
          "enabled": true
        }}
        mousewheel={{
          "forceToAxis": true
        }}
        modules={[Scrollbar, Keyboard, Mousewheel, FreeMode]}

        className='max-w-[90%]'>
          <SwiperSlide key='1'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure1.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='2'>
            <div className='bbg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure2.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='3'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure3.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='4'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure4.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='5'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure5.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='6'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure6.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='7'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure7.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='8'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure8.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='9'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure9.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='10'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure10.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='11'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure11.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='12'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure12.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='13'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure13.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='14'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure14.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='15'>
            <div className='bg-[#f6f3f6] w-full aspect-w-1 aspect-h-1'>
              <Image src='/assets/carousel/manicure15.png' alt='Manicure sample' height={400} width={400} loading='lazy' />
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
};

export default Carousel;
