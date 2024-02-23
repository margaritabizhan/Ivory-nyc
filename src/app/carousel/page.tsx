"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/a11y';
import 'swiper/css/effect-coverflow';
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
            spaceBetween: 15,
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

        className='max-w-[80%] lg:max-w-[70%]'>
          <SwiperSlide key='1'>
            <div className='bg-stone-800 h-[250px] w-[250px]'>
              <Image src='/assets/carousel/manicure1.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='2'>
            <div className='bg-stone-700 h-[250px] w-[250px]'>
            <Image src='/assets/carousel/manicure2.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='3'>
            <div className='bg-stone-600 h-[250px] w-[250px]'>
            <Image src='/assets/carousel/manicure3.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='4'>
            <div className='bg-stone-500 h-[250px] w-[250px] px-6 py-6'>
            <Image src='/assets/carousel/manicure4.png' alt='Manicure sample' layout='fill'/>
            </div>
          </SwiperSlide>
          <SwiperSlide key='5'>
            <div className='bg-stone-300 h-[250px] w-[250px] px-6 py-6'>
            <Image src='/assets/carousel/manicure5.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='6'>
            <div className='bg-stone-200 h-[250px] w-[250px] px-6 py-6'>
            <Image src='/assets/carousel/manicure6.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='7'>
            <div className='bg-stone-100 h-[250px] w-[250px] px-6 py-6'>
            <Image src='/assets/carousel/manicure7.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
          <SwiperSlide key='8'>
            <div className='bg-stone-100 h-[250px] w-[250px] px-6 py-6'>
            <Image src='/assets/carousel/manicure8.png' alt='Manicure sample' layout='fill' />
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
};

export default Carousel;
