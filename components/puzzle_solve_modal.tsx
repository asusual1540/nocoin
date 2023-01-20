import React, { useEffect, useState } from "react";
import { animated } from "react-spring";

import { useDispatch, useSelector } from "react-redux"

import { NocoinState } from "../src/reducers/rootReducer";
import * as puzzleAction from "../src/reducers/puzzle/actionTypes"


export default function PuzzleSolveModal({ style, closePuzzleSolveModal }: any) {


    const [solution, setSolution] = useState('')
    const [loading, setLoading] = useState<boolean>()



    const dispatch = useDispatch()
    const puzzle = useSelector((state: NocoinState) => state.puzzle)

    useEffect(() => {

        if (puzzle.current) {

            setLoading(false)

        }


    }, [puzzle])




    const handleSubmit = (e: any) => {
        setLoading(true)
        e.preventDefault();
        const payload = { "puzzle_id": puzzle.current?.id, "solution": solution, "invalid": false }
        console.log("request sign up", payload)
        dispatch({ type: puzzleAction.SOLVE_PUZZLE_REQUEST, payload })
    }

    const handleClose = () => {
        setLoading(false)
        // setPuzzleCreated(false)
        closePuzzleSolveModal()
    }



    return (
        <animated.div style={{ ...style, translateX: '-50%', translateY: '-50%' }}
            className="w-full h-auto bg-gradient-to-l from-helix-light to-helix-dark drop-shadow-[0px_2px_2px_rgba(0,0,0,.1)] p-6 absolute z-100 top-[50%] left-[50%] rounded-md flex flex-col 3xl:w-1/4 2xl:w-1/4 xl:w-1/3 lg:w-1/2 mlg:w-1/2 md:w-2/3 sm:w-full xsm:w-full xxsm:w-full">
            <div className="mx-8 mt-6 flex justify-between">
                <div></div>
                <img className="hover:cursor-pointer ml-3" src="/nocoin-logo.svg" width={120} />
                <button className="cursor-pointer" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#fff" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="my-4 mx-8">
                <form className="">
                    <div className="mb-4">
                        <label className="block text-black text-md mb-2 text-white" htmlFor="question">
                            Question
                        </label>
                        <textarea readOnly className="shadow rounded-xl appearance-none border w-full py-2 px-3 caret-black leading-tight focus:outline-none focus:shadow-outline" id="question">{puzzle.current?.input.description}</textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-md mb-2 text-white" htmlFor="answer">
                            Answer
                        </label>
                        <input value={solution} onChange={e => setSolution(e.target.value)} className="shadow rounded-xl appearance-none border w-full py-2 px-3 caret-black leading-tight focus:outline-none focus:shadow-outline" id="answer" type="text" placeholder="Type your answer here" />
                    </div>


                    <div className="flex">
                        <div className="flex justify-center">

                            <button type="button" className="helix-auth-button relative flex justify-center items-center" onClick={(e) => false}>
                                <p>{loading && "Loading" || "Invalid"} </p>
                                <span className="absolute right-6">{loading && <img className="" src="/helix-loader.svg" width={30} />}

                                </span>
                            </button>
                        </div>
                        <div className="flex justify-center">

                            <button type="submit" className="helix-auth-button relative flex justify-center items-center" onClick={(e) => handleSubmit(e)}>
                                <p>{loading && "Loading" || "Solve"} </p>
                                <span className="absolute right-6">{loading && <img className="" src="/helix-loader.svg" width={30} />}

                                </span>
                            </button>
                        </div>
                    </div>



                </form>
            </div>


        </animated.div>
    )
}
