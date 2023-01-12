import { useRef, useEffect, useState } from 'react';
import { useSpring, animated, useTransition, config } from 'react-spring';
import { useTransitionCarousel } from 'react-spring-carousel'
import Image from "next/image"

import { Game } from '../interfaces/interfaces'


export default function HelixGame(props: { game: Game, hoveredState: boolean, hideDetail: any, alwaysOpen: boolean, selectedState: boolean }) {

    const [activeBanner, setActiveBanner] = useState(0)


    const ref = useRef<HTMLDivElement>(null);

    const [style, openDiv] = useSpring(() => ({ height: "0px", opacity: 0.0 }), []);

    let detailTransition = useTransition(props.game, {
        from: { opacity: 0, x: 20 },
        enter: { opacity: 1, x: 0 },
        config: config.stiff,

    })



    useEffect(() => {
        openDiv({
            height: (props.selectedState ? ref.current?.offsetHeight : 0) + "px",
            opacity: (props.selectedState ? 1 : 0)
        });
    }, [openDiv, ref, props.selectedState]);

    const {
        carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem, slideToItem, useListenToCustomEvent } = useTransitionCarousel({
            withLoop: true,
            withThumbs: true,

            items: props.game.ingame_pic.map((i: String, index: Number) => ({
                id: index.toString(),
                renderItem: (
                    <div className="h-full w-full flex justify-end relative ingame_image">
                        <Image
                            alt=""
                            src={props.game ? `${i}` : '/fallback/INGAME.jpg'}
                            fill
                            sizes="(max-width: 768px) 100%,
            (max-width: 1200px) 100%,
            100%"
                        />
                    </div>
                ),
                renderThumb: (
                    <span className={`cursor-pointer`}
                        onClick={() => slideToItem(Number(index))}
                    >
                        <Image src="/helix-bullet.svg" alt="" className={`${activeBanner === index ? 'opacity-100' : 'opacity-60'}`} width={36} height={36} />
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
        <animated.div style={{ ...style }}>
            <div ref={ref} className={`h-144 bg-gradient-to-br from-helix-light to-helix-dark origin-top`}>
                <div className={`relative origin-top bg-no-repeat bg-contain h-full`} style={{ backgroundImage: `url(${props.game.cover_pic})` }}>
                    <div className={`glass flex flex-col-reverse justify-between overflow-hidden  mlg:flex-col-reverse lg:flex-row h-full`}>
                        {!props.alwaysOpen && <button className="absolute top-5 right-5 z-20" onClick={props.hideDetail}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#fff" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>}
                        <div className="w-full h-full xsm:w-full mlg:w-full lg:w-[45%]">
                            {detailTransition((style, item) => (
                                <animated.div style={{ ...style }} className="p-6">
                                <div className="flex justify-between w-full h-full">
                                    <div className="hidden lg:block w-1/5 h-56 drop-shadow-[2px_2px_1px_rgba(0,0,0,.7)]">
                                        <Image
                                            className='rounded'
                                            src={props.game ? `${props.game.profile_pic}` : '/fallback/PROFILE.jpg'}
                                            alt="..."
                                            width={178}
                                            height={252}
                                        />
                                    </div>
                                    <div className="w-100 lg:w-4/5 px-6">
                                        <h1 className="text-4xl font-extrabold text-white uppercase">{props.game?.name}</h1>
                                        <div className="my-3">

                                            <p className="text-sm font-medium text-white">
                                                {`${props.game?.global_rating} global ratings`}
                                            </p>


                                        </div>
                                        <div className="my-3 flex">

                                            <div className='flex bg-helix-sky py-2 px-4 mr-2 rounded-full hover:scale-105 transform transition-all cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                </svg>

                                                <p className="mx-1 text-helix-dark font-medium">PLAY</p>
                                            </div>
                                            <div className='flex bg-helix-sky py-2 px-4 mr-2 rounded-full hover:scale-105 transform transition-all cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>

                                                <p className="mx-1 text-helix-dark font-medium">GET</p>
                                            </div>
                                            <div className='flex bg-helix-sky py-2 px-4 mr-2 rounded-full hover:scale-105 transform transition-all cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>

                                                <p className="mx-1 text-helix-dark font-medium">LIBRARY</p>
                                            </div>


                                        </div>

                                        <div className="overflow-hidden h-96">
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


                            </animated.div>
                            ))}
                        </div>






                        <div className="w-full xsm:w-full mlg:w-full lg:w-[55%] h-auto items-center overflow-hidden relative">



                            <div className="absolute top-1/2 left-3 z-10 origin-center translate-y-[-50%] cursor-pointer" onClick={slideToPrevItem}>
                                <Image
                                    width={44} height={44}
                                    src='/previous_arrow.svg'
                                    alt={''} />
                            </div>
                            {carouselFragment}
                            <div className="absolute top-1/2 right-3 z-10 origin-center  translate-y-[-50%] cursor-pointer" onClick={slideToNextItem}>
                                <Image
                                    width={44} height={44}
                                    src='/next_arrow.svg'
                                    alt={''} />
                            </div>
                            <div className="absolute bottom-0  origin-center translate-x-[-50%] translate-y-[-50%] left-[50%]">{thumbsFragment}</div>

                        </div>
                    </div>


                </div>
            </div>
        </animated.div>
    )
}