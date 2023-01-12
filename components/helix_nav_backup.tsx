import React, { useState, useEffect } from 'react'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'



export default function helix_nav(props: any) {
    const { isConnected, address } = useAccount()
    const [viewMobileSearch, setViewMobileSearch] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { open, close } = useWeb3Modal()

    const activateMobileSearch = () => {
        setViewMobileSearch(true)
    }
    const deActivateMobileSearch = (e: any) => {
        e.preventDefault()
        setSearchTerm("")
        setViewMobileSearch(false)
        
    }

    function handleChange (event: any) {
        setSearchTerm(event.target.value)
      }




    return (
        <nav className={`sticky top-0 z-20 flex justify-between py-2 bg-gradient-to-b from-helix-light to-helix-dark drop-shadow-[0px_2px_2px_rgba(0,0,0,1)]`}>
            {!viewMobileSearch && <div className='flex ml-3'>
                <img className="hover:cursor-pointer" src="/hamburger.svg" width={30} onClick={() => props.toogleSideBar()} />
                <img className="hover:cursor-pointer ml-3" src="/helix-logo2.svg" width={90} />

            </div>}
            <form className={`flex mx-auto  ${viewMobileSearch ? "w-2/3 xxsm:flex xsm:flex sm:flex" : " w-1/3 hidden xxsm:hidden xsm:hidden sm:hidden md:flex"} items-center justify-center`}>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 hover:cursor-pointer">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" value={searchTerm} onChange={(e) => handleChange(e)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find your games" />
                    <button className="absolute top-2 right-3 z-20" onClick={(e) => deActivateMobileSearch(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={2} stroke="#6B7280" className="w-5 h-5 rounded">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </form>
            {!viewMobileSearch && <div className="flex justify-center items-center ">
                <button className={`md:hidden px-2 py-2 rounded hover:bg-helix-light ${viewMobileSearch ? "hidden" : "block"}`} onClick={() => activateMobileSearch()}>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd">
                        </path>
                    </svg>
                </button>
                <div className="flex justify-center items-center px-2 py-1 mr-3 rounded hover:bg-helix-light">
                    <img className="mr-3" src="/helix-avatar.svg" width={31} />
                    {!isConnected && (<button onClick={() => open()}><p className="text-white text-1xl font-medium mr-3">Connect Wallet</p></button>)}
                    {isConnected && (<p className="text-white text-1xl font-medium mr-3">{address}</p>)}
                </div>
            </div>}


        </nav>
    )
}
