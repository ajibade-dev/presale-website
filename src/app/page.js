"use client"
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { MoralisProvider } from "react-moralis";

export default function Home() {
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
    
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-blue-500">Hello there</h1>
      </div>
      
    </main>
   
  );
}

