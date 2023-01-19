import React, { useEffect, useState } from "react";
import { animated } from "react-spring";

import { useDispatch, useSelector } from "react-redux"

import { NocoinState } from "../src/reducers/rootReducer";
import * as puzzleAction from "../src/reducers/puzzle/actionTypes"


export default function PuzzleCreateModal({ style, closePuzzleCreateModal, puzzleCreateModal, openPuzzleCreateModal }: any) {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    const [puzzleCreated, setPuzzleCreated] = useState<boolean>()

    const dispatch = useDispatch()
    const puzzle = useSelector((state: NocoinState) => state.puzzle)

    useEffect(() => {
        if (puzzle.recent) {
            setLoading(false)
            setPuzzleCreated(true)
        }
    }, [puzzle])


    const handleSubmit = (e: any) => {
        setLoading(true)
        e.preventDefault();
        const payload = { "description": question, "answer": answer }
        console.log("request sign up", payload)
        dispatch({ type: puzzleAction.CREATE_PUZZLE_REQUEST, payload })
    }



    return (
        <animated.div style={{ ...style, translateX: '-50%', translateY: '-50%' }}
            className="w-full h-auto bg-gradient-to-l from-helix-light to-helix-dark drop-shadow-[0px_2px_2px_rgba(0,0,0,.1)] p-6 absolute z-100 top-[50%] left-[50%] rounded-md flex flex-col 3xl:w-1/4 2xl:w-1/4 xl:w-1/3 lg:w-1/2 mlg:w-1/2 md:w-2/3 sm:w-full xsm:w-full xxsm:w-full">
            <div className="mx-8 mt-6 flex justify-between">
                <div></div>
                <img className="hover:cursor-pointer ml-3" src="/nocoin-logo.svg" width={120} />
                <button className="cursor-pointer" onClick={closePuzzleCreateModal}>
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
                        <textarea onChange={e => setQuestion(e.target.value)} className="shadow rounded-xl appearance-none border w-full py-2 px-3 caret-black leading-tight focus:outline-none focus:shadow-outline" id="question" placeholder="Type your question here">{question}</textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-md mb-2 text-white" htmlFor="answer">
                            Answer
                        </label>
                        <input value={answer} onChange={e => setAnswer(e.target.value)} className="shadow rounded-xl appearance-none border w-full py-2 px-3 caret-black leading-tight focus:outline-none focus:shadow-outline" id="answer" type="text" placeholder="Type your answer here" />
                    </div>

                    <div className="flex justify-center">

                    <button type="submit" className="helix-auth-button relative flex justify-center items-center" onClick={(e) => handleSubmit(e)}>
                            <p>{loading && "Loading" || puzzleCreated && "Created" || "Create"} </p>
                            <span className="absolute right-6">{loading && <img className="" src="/helix-loader.svg" width={30} />}
                                {puzzleCreated && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#78e3ec" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>}
                            </span>
                        </button>
                    </div>



                </form>
            </div>


        </animated.div>
    )
}
