import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSpringCarousel } from 'react-spring-carousel';


import { Block } from '../interfaces/interfaces'

import { NocoinState } from "../src/reducers/rootReducer";
import * as puzzleActions from "../src/reducers/puzzle/actionTypes"


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
    const puzzle = useSelector((state: NocoinState) => state.puzzle)

    useEffect(() => {
        dispatch({ type: puzzleActions.GET_PUZZLE_REQUEST })

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
        items: puzzle.pool.length != 0 ? puzzle.pool.map((puzz) => ({
            id: puzz.id.toString(),
            renderItem: (
                <div >
                    <div className={`relative cursor-pointer`}>

                        <div className='bg-white border-2' style={{ height: "153", width: "272" }}>
                            <div className="p-6 bg-gray-100 rounded-lg">

                                <div className="my-3 flex">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                    </svg>


                                    <h3 className="text-lg font-bold ml-2">
                                        Puzzle
                                    </h3>




                                </div>
                                <table className="table-auto">
                                    <tbody>
                                        <tr>
                                            <td className='font-bold py-1 px-3'>Question: </td>
                                            <td>{puzz.description}</td>

                                        </tr>
                                        <tr>
                                            <td className='font-bold py-1 px-3'>Hash:</td>
                                            <td>{puzz.puzzle_hash}</td>

                                        </tr>
                                        
                                    </tbody>
                                </table>



                            </div>
                        </div>


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