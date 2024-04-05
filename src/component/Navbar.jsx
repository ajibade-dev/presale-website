"use client"
import Link from "next/link"
import { useMoralis } from "react-moralis"
import { useEffect } from "react"
const Navbar = () => {
  const {enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3} = useMoralis()

//to connect to metamask and store in localstorage
  useEffect(() => {
    if(isWeb3Enabled) return 
    if(typeof window !== "undefined"){
      if (window.localStorage.getItem("connected")){
        enableWeb3()
      }
    }
  }, [isWeb3Enabled])

useEffect(() => {
  Moralis.onAccountChanged((account) => {
    console.log(`Account changed to ${account}`)
    if(account == null){
      window.localStorage.removeItem("connected")
      deactivateWeb3()
      console.log("Null account found")
    }
  })
})

  return (
     <div>
      <div className="h-full items-center justify-between flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-base bg-[#07091a]">
      
      {/* logo */}
      <div className="">
        <Link href="/" className="text-sm rounded-md p-1 font-semibold flex justify-center items-center">
        <img src="/bits.png" alt="bits" />
        </Link>
      </div>
  
  
    {/* the social icons */}

    
    <div className="flex gap-4">
      {account ? (<button className="px-4 py-2 border-2 rounded-md text-[#d64f27] border-[#d64f27] hover:bg-[#d64f27] hover:border-slate-600 hover:text-black">Connected to {account.slice(0,6)}...{account.slice(account.length - 4)}</button>) :
       (<button onClick={async () =>{
        await enableWeb3()
      if(typeof window !== "undefined"){
        window.localStorage.setItem("connected", "injected")
      }
      
      }} className="px-4 py-2 border-2 rounded-md text-[#d64f27] border-[#d64f27] hover:bg-[#d64f27] hover:border-slate-600 hover:text-black">Connect Wallet</button>)}
    
    </div>
    </div>
  
  </div>
  )
}

export default Navbar