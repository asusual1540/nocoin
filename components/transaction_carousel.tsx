import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSpringCarousel } from 'react-spring-carousel';


import { Block } from '../interfaces/interfaces'

import { NocoinState } from "../src/reducers/rootReducer";
import * as transactionActions from "../src/reducers/transaction/actionTypes"




export default function BlockCarousel(props: { title: String, alwaysOpen: boolean, sideBarShown: boolean }) {
    const [selectedBlock, setSelectedBlock] = useState<Block>();
    const [hoveredBlock, setHoveredBlock] = useState<Block>();
    const [loading, setLoading] = useState<boolean>(true)


    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [itemsPerSlide, setItemsPerSlide] = useState<number>(1);


    const [selectedState, setSelectedState] = useState<boolean>(false);
    // const [hoveredState, setHoveredState] = useState<boolean>(false);

    // const [viewDetail, setViewDetail] = useState<boolean>(false);

    const sliderRef = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch()
    const transaction = useSelector((state: NocoinState) => state.transaction)

    useEffect(() => {
        dispatch({ type: transactionActions.GET_TRANSACTION_REQUEST })

        if (window.innerWidth < 640) setIsMobile(true)
        if (window.innerWidth < 768) setIsTablet(true)

        if (window.innerWidth < 320) setItemsPerSlide(1)
        if (window.innerWidth > 320) setItemsPerSlide(1)
        if (window.innerWidth > 480) setItemsPerSlide(1)
        if (window.innerWidth > 640) setItemsPerSlide(2)
        if (window.innerWidth > 768) setItemsPerSlide(3)
        if (window.innerWidth > 990) setItemsPerSlide(4)
        if (window.innerWidth > 1200) setItemsPerSlide(5)
        if (window.innerWidth > 1600) setItemsPerSlide(6)
        if (window.innerWidth > 1900) setItemsPerSlide(7)
        if (window.innerWidth > 2200) setItemsPerSlide(7)
        if (window.innerWidth > 2600) setItemsPerSlide(7)
        if (window.innerWidth > 3200) setItemsPerSlide(8)
        if (window.innerWidth > 4000) setItemsPerSlide(8)


    }, []);



    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        gutter: 24,
        itemsPerSlide: 1,
        withLoop: true,
        items: transaction.pool.length != 0 ? transaction.pool.map((transaction) => ({
            id: transaction.id.toString(),
            renderItem: (
                <div className="relative cursor-pointer bg-helix-light p-6 rounded-md flex flex-col 3xl:w-1/4 2xl:w-1/4 xl:w-1/3 lg:w-1/2 mlg:w-1/2 md:w-2/3 sm:w-full xsm:w-full xxsm:w-full">

                    <div className='text-helix-sky rounded-md'>

                        <div className="mb-3 flex">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>


                            <h3 className="text-lg font-bold ml-2">
                                Transaction
                            </h3>




                        </div>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className='font-bold py-1 px-3 flex'>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>


                                        <p className="ml-3">Sender: </p>
                                    </td>
                                    <td>{transaction.input.address}</td>

                                </tr>
                                {Object.keys(transaction.output).map((addr) => {
                                    if (addr != transaction.input.address) {
                                        return <>
                                            <tr>
                                                <td className='font-bold py-1 px-3 flex'>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                                </svg>

                                                    <p className="ml-3">Receiver: </p>
                                                </td>
                                                <td>{addr}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-bold py-1 px-3 flex'>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>


                                                    <p className="ml-3">Amount: </p>
                                                </td>
                                                <td>{transaction.output[addr]}</td>

                                            </tr>
                                        </>

                                    }
                                    return
                                })}

                            </tbody>
                        </table>




                    </div>


                </div>


            )
        })) : [{ id: '1', renderItem: (<div className='text-white font-bold'>Loading...</div>) }]
    })




    const showDetail = (gm: Block) => {
        // setSelectedGame(gm)
        // setViewDetail(true)
        // setSelectedState(true)
        if (!isMobile && !isTablet) {
            setTimeout(() => {
                sliderRef.current?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }

    }
    // const hideDetail = () => {
    //     setViewDetail(false)
    //     setSelectedState(false)
    // }


    const hoverBlock = (block: Block) => {
        if (!isMobile && !isTablet) {
            setHoveredBlock(block)
            // setHoveredState(true)
        }
        if (selectedState) {
            setSelectedBlock(block)
            // setViewDetail(true)
            setSelectedState(true)
        }

    }



    return (
        <div className='m-3' >
            <div ref={sliderRef}></div>
            <div className='flex justify-between items-center'>
                <div className="cursor-pointer rounded-3xl ml-3 p-2 bg-helix-light" onClick={slideToPrevItem}>


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78E3EC" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </div>
                <p className="sm:text-sm md:text-md xl:text-xl 2xl:text-2xl text-gray text-center font-bold my-3 uppercase">{props.title}</p>
                <div className="cursor-pointer rounded-3xl mr-3 p-2 bg-helix-light" onClick={slideToNextItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78E3EC" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>



            <div className="relative">



                <div className='py-3 overflow-x-hidden'>
                    {carouselFragment}
                </div>




            </div>





        </div>

    )

}