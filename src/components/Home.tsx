"use client";
import { useEffect } from 'react';

const Home : React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-[650px] md:h-screen w-full bg-cover bg-center overflow-hidden text-center"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
         id="home-background-img"
         >
      
      <div className="w-full flex flex-col items-center justify-center p-5"
           style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <h3 className="text-[#5c4339] uppercase">Welcome to</h3>
        <h1 className="text-[#5c4339] uppercase">Ivory</h1>
        <h6 className="text-[#5c4339] uppercase">Beauty Studio</h6>
      </div>
    </div>
  )
};

export default Home;