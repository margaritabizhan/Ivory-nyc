"use client"

import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col items-center md:justify-around md:p-5">
      <div className="relative hidden md:block">
        <Image src="/assets/massage.png" alt="Holistic massage" width={250} height={200} className="absolute z-10" />
        <Image src="/assets/spa.png" alt="Spa" width={250} height={200} className="relative top-[250px] left-[85px]"/>
      </div>
      <div className="md:hidden">
        <Image src="/assets/massage.png" alt="Holistic massage" width={250} height={200} />
      </div>
      <div className="flex md:w-1/2 md:mt-[100px] mt-[10px]">
        <p className="py-4 px-10 text-justify lg:text-xl lg:tracking-wider">
          At Ivory opulence meets indulgence in the realm of beauty. Our salon draws inspiration from the rare and luxurious material, Ivory, known for its exclusivity and timeless elegance. Just like the precious material, IVORY Salon stands as a symbol of unparalleled luxury in the world of Russian-style manicure, pedicure, eyelashes, and skincare.
        </p>
      </div>
    </div>

    <div className="flex md:flex-row flex-col items-center md:justify-around md:pt-[10px]">
      <div className="md:hidden">
        <Image src="/assets/polish.png" alt="Manicure" width={250} height={200}/>
      </div>
      <div className="flex md:w-1/2 md:mt-[100px]">
        <p className="py-4 px-8 :text-justify lg:text-xl tracking-wider md:mt-[130px]">
         Our commitment to providing a truly luxurious experience is reflected in every meticulous detail, ensuring that our clients bask in the extravagance of Russian-style beauty treatments. Step into IVORY, where the name signifies more than just a salon; it embodies a commitment to delivering an experience so exquisite, it is reserved for those who appreciate the extraordinary. Elevate your beauty ritual with us - IVORY, where luxury becomes a personalized masterpiece.
        </p>
      </div>
      <div className="md:relative hidden md:block">
        <Image src="/assets/nails.png" alt="Manicure" width={250} height={200} className="absolute" />
        <Image src="/assets/polish.png" alt="Available Colors" width={250} height={200} className="relative top-[210px] right-[85px] z-20"/>
      </div>
    </div>
  </>
  )
}

export default About