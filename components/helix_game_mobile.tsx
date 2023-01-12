import { useState } from 'react';
import Image from "next/image"


import { useTransitionCarousel } from 'react-spring-carousel'

import { Game } from '../interfaces/interfaces'


export default function HelixGameMobile(props: { game: Game, hideDetail: any }) {

    const [activeBanner, setActiveBanner] = useState(0)

    const {
        carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem, slideToItem, useListenToCustomEvent } = useTransitionCarousel({
            withLoop: true,
            withThumbs: true,

            items: props.game.ingame_pic.map((i: String, index: Number) => ({
                id: index.toString(),
                renderItem: (
                    <div className="fade_to_bottom h-56 sm:h-64 xl:h-144 w-full flex justify-center search">
                        <Image width={1920} height={1080} className="h-full w-full object-cover object-center" src={`${i}`} alt="" priority />
                    </div>
                ),
                renderThumb: (
                    <span className={`cursor-pointer`}
                        onClick={() => slideToItem(Number(index))}
                    >
                        <Image src="/helix-bullet.svg" width={36} height={36} alt="" className={`${activeBanner === index ? 'opacity-100' : 'opacity-60'}`} />
                    </span>
                )
            })),
        })

    useListenToCustomEvent((event) => {
        // Triggered when the slide animation is completed
        if (event.eventName === "onSlideStartChange") {
            setActiveBanner(event.nextItem.index)
        }

    });

    return (
        <div className="flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-gradient-to-br from-helix-light to-helix-dark">
            <div className="relative w-[100vw] origin-top bg-no-repeat bg-cover h-full" style={{ backgroundImage: `url(${props.game?.cover_pic})` }}>
                <div className='glass h-full w-full'>
                    <button className="absolute top-5 left-5 z-20" onClick={props.hideDetail}>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#fff" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>

                    </button>
                    <button className="absolute top-5 right-5 z-20" onClick={props.hideDetail}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#fff" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>






                    <div className='h-64 relative'>
                        <div className="absolute top-1/2 left-3 z-10 origin-center translate-y-[-50%] cursor-pointer" onClick={slideToPrevItem}>
                            <Image
                                width={44} height={44}
                                src='/previous_arrow.svg'
                                alt={''} />
                        </div>


                        <div className="absolute top-1/2 right-3 z-10 origin-center  translate-y-[-50%] cursor-pointer" onClick={slideToNextItem}>
                            <Image
                                width={44} height={44}
                                src='/next_arrow.svg'
                                alt={''} />
                        </div>

                        <div className="absolute bottom-0 z-10 origin-center translate-x-[-50%] translate-y-[-50%] left-[50%]">{thumbsFragment}</div>
                        {carouselFragment}
                    </div>


                    <div className="w-full h-full xsm:w-full mlg:w-full lg:w-[45%]  overflow-y-scroll">

                        <div className="flex justify-between w-full h-full">
                            <div className="hidden lg:block w-1/5 h-56 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
                                <Image

                                    src={props.game ? `${props.game.profile_pic}` : '/fallback/PROFILE.jpg'}
                                    alt="..."
                                    width={178}
                                    height={252}
                                />
                            </div>
                            <div className="w-100 lg:w-4/5 px-6">
                                <h3 className="text-2xl font-extrabold text-white uppercase truncate">{props.game?.name}</h3>
                                <div className="my-3">

                                    <p className="text-sm font-medium text-white">
                                        {`${props.game?.global_rating} global ratings`}
                                    </p>


                                </div>
                                <div className="my-3 flex">

                                    <div className='flex bg-helix-sky py-2 px-4 mr-2 rounded-full hover:scale-105 transform transition-all'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>

                                        <p className="mx-1 text-helix-dark font-medium">PLAY</p>
                                    </div>
                                    <div className='flex bg-helix-sky py-2 px-4 mr-2 rounded-full hover:scale-105 transform transition-all'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                        <p className="mx-1 text-helix-dark font-medium">GET</p>
                                    </div>
                                    <div className='flex bg-helix-sky py-2 px-4 mr-2 rounded-full hover:scale-105 transform transition-all'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>

                                        <p className="mx-1 text-helix-dark font-medium">LIBRARY</p>
                                    </div>


                                </div>

                                <div className="h-96">
                                    <table className='w-full'>
                                        <tbody>
                                            <tr>
                                                <td className='text-white w-1/4'>Publisher</td>
                                                <td className='text-white w-3/4'>{props.game.publisher}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-white w-1/4'>Developer</td>
                                                <td className='text-white w-3/4'>{props.game.developer}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-white w-1/4'>Release Date</td>
                                                <td className='text-white w-3/4'>{props.game.release_date}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-white w-1/4'>Genre</td>
                                                <td className='text-white w-3/4'>{props.game.genre}</td>
                                            </tr>
                                        </tbody>

                                    </table>

                                    <p className="text-white my-5 capitalize">
                                        {props.game.detail} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
