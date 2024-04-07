"use client"
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { MoralisProvider } from "react-moralis";
import ClipboardJS from "clipboard";
import { useEffect } from "react";

export default function Home() {
//  useEffect(() => {
//   const clipboard = new ClipboardJS()

//   return () => {
//     clipboard.destroy()
//   }
//  })

  return (
    
      
    <main>
      {/* the navbar */}
      {/* <div className="h-full items-center justify-between flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-base bg-[#07091a]"> */}
      
      {/* logo */}
      {/* <div className="">
        <Link href="/" className="text-sm rounded-md p-1 font-semibold flex justify-center items-center">
        <img src="/bits.png" alt="bits" />
        </Link>
      </div>
   */}
  
    {/* the social icons */}

    
    {/* <div className="flex gap-4">
    <button className="px-4 py-2 border-2 rounded-md text-[#d64f27] border-[#d64f27] hover:bg-[#d64f27] hover:border-slate-600 hover:text-black">Connect Wallet</button>
    </div>
    </div>
       */}
    {/* the other part of the website */}
    
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#07091a]">
      <div className="flex flex-col border-4 border-[#334155] rounded-lg p-10 gap-6 bg-[#060816]">
        <h1 className="text-[#cfd2ea] font-extrabold text-5xl">PRESALE <span className="text-[#d0a862]">INFO</span></h1>
        
          <div className="flex gap-2 items-center">
          <img src="/chinese.png" alt="coin"  className="w-10 h-10"/>
          <h4 className="text-[#cfd2ea] text-xl font-bold">Token Symbol <span className="text-[#d0a862]">BLAB</span></h4>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-xl">contract adress</h4>
            <div className="flex flex-row gap-2">
            <p className="p-2 border-2 border-[#d0a862] r rounded-md"></p>
            <button className="px-4 py-2 bg-white text-black">Copy</button>
            </div>
            
          </div>
      </div>
      </div>
      
    </main>
   
  );
}

