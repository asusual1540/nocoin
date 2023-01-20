import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSpringCarousel } from 'react-spring-carousel';


import { Block, Puzzle } from '../interfaces/interfaces'

import { NocoinState } from "../src/reducers/rootReducer";
import * as puzzleActions from "../src/reducers/puzzle/actionTypes"


export default function BlockCarousel(props: { title: String, alwaysOpen: boolean, sideBarShown: boolean, openPuzzleSolveModal: any }) {
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
        itemsPerSlide: puzzle.pool.length < itemsPerSlide ? puzzle.pool.length || 1 : itemsPerSlide,
        withLoop: true,
        items: puzzle.pool.length != 0 ? puzzle.pool.map((puz) => ({
            id: puz.id.toString(),
            renderItem: (
                <div className="relative cursor-pointer bg-helix-light p-6 rounded-md flex flex-col ">

                    <form className='text-helix-sky rounded-md'>

                        <div className="mb-3 flex">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#78e3ec" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>



                            <h3 className="text-lg font-bold ml-2">
                                Puzzle
                            </h3>




                        </div>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className='font-bold py-1 px-3 flex'>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#78e3ec" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>


                                        <p className="ml-3">Creator: </p>
                                    </td>
                                    <td>{puz.input.address}</td>

                                </tr>

                                <tr>
                                    <td className='font-bold py-1 px-3 flex'>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#78e3ec" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                        </svg>



                                        <p className="ml-3">Question: </p>
                                    </td>
                                    <td>{puz.input.description}</td>

                                </tr>
                                <tr>
                                    <td className='font-bold py-1 px-3 flex'>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#78e3ec" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                        </svg>

                                        <p className="ml-3">Hash: </p>
                                    </td>
                                    <td className='text-ellipsis'>{puz.input.hash.substring(0, 19)}</td>

                                </tr>


                            </tbody>
                        </table>

                        <div className="flex mt-3">
                            
                            <div className="flex justify-center">

                                <button type="button" className="nocoin-submit-button relative flex justify-center items-center" onClick={() => selectPuzzle(puz)}>
                                    <p>Solve</p>
                                   
                                </button>
                            </div>
                        </div>



                    </form>


                </div>

            )
        })) : [{ id: '1', renderItem: (<div className='text-white font-bold'>Loading...</div>) }]
    })


    const selectPuzzle = (puz : any) => {
        dispatch({type: puzzleActions.SELECT_PUZZLE, payload: {puzzle: puz}})
        props.openPuzzleSolveModal()
    }
    const handleSubmit = (e: any) => {
        setLoading(true)
        e.preventDefault();
        // const payload = { "description": question, "answer": answer }
        // console.log("request sign up", payload)
        // dispatch({ type: puzzleAction.CREATE_PUZZLE_REQUEST, payload })
    }

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