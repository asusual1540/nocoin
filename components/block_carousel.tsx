import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSpringCarousel } from 'react-spring-carousel';


import { Block } from '../interfaces/interfaces'

import { NocoinState } from "../src/reducers/rootReducer";
import * as blockActions from "../src/reducers/blockchain/actionTypes"




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
    const chain = useSelector((state: NocoinState) => state.blockchain.chain)
    const blockchain_loading = useSelector((state: NocoinState) => state.blockchain.loading)

    useEffect(() => {
        dispatch({ type: blockActions.GET_BLOCKCHAIN_REQUEST })

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
        items: chain.length != 0 ? chain.map((block) => ({
            id: block.timestamp.toString(),
            renderItem: (
                <div className='relative cursor-pointer bg-helix-light p-6 rounded-md flex flex-col 3xl:w-1/4 2xl:w-1/4 xl:w-1/3 lg:w-1/2 mlg:w-1/2 md:w-2/3 sm:w-full xsm:w-full xxsm:w-full'>
                    
                        <div className="text-helix-sky">

                            <div className="mb-3 flex">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                </svg>


                                <h3 className="text-lg font-bold ml-2">
                                    BLOCK
                                </h3>




                            </div>
                            <table className="table-auto">
                                <tbody>
                                    <tr>
                                        <td className='font-bold py-1 px-3 flex'>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                            </svg>

                                            <p className="ml-3">Hash: </p>
                                        </td>
                                        <td>{block.hash}</td>

                                    </tr>
                                    <tr>
                                        <td className='font-bold py-1 px-3 flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                            </svg>

                                            <p className="ml-3">Last Hash: </p>
                                        </td>
                                        <td>{block.last_hash}</td>

                                    </tr>
                                    <tr>
                                        <td className='font-bold py-1 px-3 flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                            </svg>


                                            <p className="ml-3">Question: </p>
                                        </td>
                                        <td>{block.puzzle.description}</td>

                                    </tr>
                                    <tr>
                                        <td className='font-bold py-1 px-3 flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                            </svg>



                                            <p className="ml-3">Answer: </p>
                                        </td>
                                        <td>{block.answer}</td>

                                    </tr>


                                    <tr>
                                        <td className='font-bold py-1 px-3 flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#78e3ec" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>



                                            <p className="ml-3">Timestamp: </p>
                                        </td>
                                        <td>{block.timestamp}</td>

                                    </tr>
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