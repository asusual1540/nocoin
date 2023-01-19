import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";

import * as walletActions from "../src/reducers/wallet/actionTypes"
import { NocoinState } from "../src/reducers/rootReducer";


export default function NocoinNav(props: {sideBarShown: boolean, openSideBar: any, closeSidebar: any, openSendCoinModal:any, openPuzzleCreateModal:any}) {
    const dispatch = useDispatch()
    const wallet = useSelector((state: NocoinState) => state.wallet)
    useEffect(() => {
        dispatch({ type: walletActions.GET_WALLET_REQUEST })
    }, [])

    const router = useRouter();


    return (
        <nav className={`sticky top-0 z-20 flex justify-between py-2 bg-gradient-to-b from-helix-light to-helix-dark drop-shadow-[0px_2px_2px_rgba(0,0,0,.1)]`}>
            <div className='flex ml-3'>
                <img className="hover:cursor-pointer" src="/hamburger.svg" width={30} onClick={() => props.sideBarShown ? props.closeSidebar() : props.openSideBar()} />
                <Link href="/" className='flex justify-center items-center'><img className="hover:cursor-pointer ml-3 py-auto" src="/nocoin-logo.svg" width={90} /></Link>
            </div>

            <div>
                <ul className='flex'>
                    <li className={`mx-2 px-2 py-1 rounded-sm hover:bg-helix-light ${router.pathname == "/blocks" ? "bg-helix-light" : ""}`} style={{border: "1px solid #222243"}}>
                        <Link href="/blocks" className="flex justify-center items-center ">
                            <div className='px-2 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                                </svg>

                            </div>
                            

                            <p className="text-white text-1xl font-medium mr-3">Blocks</p>

                        </Link>
                    </li>
                    <li className={`mx-2 px-2 py-1 rounded-sm hover:bg-helix-light ${router.pathname == "/transactions" ? "bg-helix-light" : ""}`} style={{border: "1px solid #222243"}}>
                        <Link href="/transactions" className="flex justify-center items-center ">
                            <div className='px-2 py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                            </div>
                            

                            <p className="text-white text-1xl font-medium mr-3">Transactions</p>

                        </Link>
                    </li>
                    <li className={`mx-2 px-2 py-1 rounded-sm hover:bg-helix-light ${router.pathname == "/knowledges" ? "bg-helix-light" : ""}`} style={{border: "1px solid #222243"}}>
                        <Link href="/knowledges" className="flex justify-center items-center ">
                            <div className='px-2 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>

                            </div>
                            
                            <p className="text-white text-1xl font-medium mr-3">Knowledges</p>

                        </Link>
                    </li>
                    <li className='mx-2 px-2 py-1 rounded-sm hover:bg-helix-light' style={{border: "1px solid #222243"}}>
                        <button onClick={() => props.openSendCoinModal()} className="flex justify-center items-center ">
                            <div className='px-2 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                               
                            </div>
                            
                            <p className="text-white text-1xl font-medium mr-3">Send</p>

                        </button>
                    </li>
                    <li className='mx-2 px-2 py-1 rounded-sm hover:bg-helix-light' style={{border: "1px solid #222243"}}>
                        <button onClick={() => props.openPuzzleCreateModal()} className="flex justify-center items-center ">
                            <div className='px-2 py-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                               
                            </div>
                            
                            <p className="text-white text-1xl font-medium mr-3">Create</p>

                        </button>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center items-center ">

                <div className="px-2 py-1 mr-3 rounded">

                    <button className="flex justify-center items-center ">
                        {wallet.loading ? <p className="text-white text-1xl font-medium mr-3">Connect Wallet</p> :
                            <p className="text-white text-1xl font-medium mr-3">{`${wallet.details.address} (${wallet.details.balance})`}</p>}
                        <img className="mr-3" src="/helix-avatar.svg" width={31} />
                    </button>

                    {/* {!isConnected && (<button onClick={() => open()}><p className="text-white text-1xl font-medium mr-3">Connect Wallet</p></button>)}
                    {isConnected && (<p className="text-white text-1xl font-medium mr-3">{address}</p>)} */}
                </div>
            </div>


        </nav>
    )
}



