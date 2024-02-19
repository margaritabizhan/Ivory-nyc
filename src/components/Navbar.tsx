"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="hidden md:block w-full h-20 shadow-lg z-50 bg-[#ab988e]">
        <ul className="flex justify-center items-center h-full">
          <Link href="/">
            <li className="ml-20 text-2xl uppercase hover:border-b text-white cursor-pointer">About Us</li>
          </Link>
          <Link href="/">
            <li className="ml-20 text-2xl uppercase hover:border-b text-white cursor-pointer">Services</li>
          </Link>
          <Link href="/">
            <li className="ml-20 text-2xl uppercase hover:border-b text-white cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
      <div onClick={showNav} className="md:hidden p-2">
        <RxHamburgerMenu size={30}/>
      </div>
      <div className={nav ? `fixed left-0 top-0 w-full h-screen bg-black/70` : " "}>
        <div className={nav ? `fixed left-0 top-0 w-[80%] sm:w-[45%] h-screen bg-[#dfd4ce] p-4 ease-in duration-500` : `fixed left-[-100%] top-0 w-[80%] sm:w-[45%] h-screen bg-[#dfd4ce] p-4 ease-in duration-500`}>
          <div className="flex w-full items-end justify-between">
            <Image src="/assets/ivory-logo.png" alt="Ivory Logo" 
              width={120} height={120}
            />
            <div onClick={showNav} className="rounded-full shadow-lg shadow-stone-700 cursor-pointer p-2 bg-[#ebe7e5] hover:scale-110">
              <IoMdClose size={20} />
            </div>
          </div>
          <div className="border-b border-stone-700 uppercase text-sm p-2 my-5 mx-4">
            <p className="w-[90%] text-[#8d7f78]">Where opulence meets indulgence</p>
          </div>
          <div className="py-6 flex-col">
            <ul className="uppercase text-lg tracking-wider">
              <Link href="/">
                <li className="cursor-pointer py-4 px-2 transition duration-400 ease-in-out transform origin-left hover:scale-110">About Us</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer py-4 px-2 transition duration-400 ease-in-out transform origin-left hover:scale-110">Services</li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer py-4 px-2 transition duration-400 ease-in-out transform origin-left hover:scale-110">Contact</li>
              </Link>
            </ul>
            <div className="pt-40 flex flex-col items-center">
              <p className="border-t py-2 border-stone-700 uppercase text-[#8d7f78]">Connect with us</p>
              <div className="flex justify-center">
                <div className="text-[#8d7f78] flex">
                  <div className="rounded-full shadow-lg shadow-slate-700 cursor-pointer p-2 bg-[#ebe7e5] m-2 hover:scale-110">
                    <FaInstagram size={25}/>
                  </div>
                  <div className="rounded-full shadow-lg shadow-slate-700 cursor-pointer p-2 bg-[#ebe7e5] m-2 hover:scale-110">
                    <FaTelegramPlane size={25}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Navbar;