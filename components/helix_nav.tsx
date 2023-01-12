import React, { useState } from 'react'




export default function helix_nav(props: any) {


    return (
        <nav className={`sticky top-0 z-20 flex justify-between py-2 bg-gradient-to-b from-helix-light to-helix-dark drop-shadow-[0px_2px_2px_rgba(0,0,0,.1)]`}>
            <div className='flex ml-3'>
                <img className="hover:cursor-pointer" src="/hamburger.svg" width={30} onClick={() => props.sideBarShown ? props.closeSidebar() : props.openSideBar()} />
                <img className="hover:cursor-pointer ml-3" src="/helix-logo2.svg" width={90} />
            </div>
            
            <div className="flex justify-center items-center ">
                
                <div className="flex justify-center items-center px-2 py-1 mr-3 rounded hover:bg-helix-light">
                    <img className="mr-3" src="/helix-avatar.svg" width={31} />
                    <button onClick={props.openLogInUser}><p className="text-white text-1xl font-medium mr-3">Connect Wallet</p></button>

                    {/* {!isConnected && (<button onClick={() => open()}><p className="text-white text-1xl font-medium mr-3">Connect Wallet</p></button>)}
                    {isConnected && (<p className="text-white text-1xl font-medium mr-3">{address}</p>)} */}
                </div>
            </div>


        </nav>
    )
}
