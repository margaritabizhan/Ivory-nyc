"use client";
import Link from "next/link";


const Navbar: React.FC = () => {
  return (
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
  )
};

export default Navbar;