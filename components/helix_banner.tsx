import React, {useEffect, useState} from "react";
import Image from "next/image";


import { useSpringCarousel } from 'react-spring-carousel'


import { Banner } from "../interfaces/interfaces"


const banner_images: Banner[] = [
  {
    id: 0,
    image: "/banner/slider-astroverse.jpg",
    icon: "/helix-bullet.svg"
  },
  {
    id: 1,
    image: "/banner/slider-cyber-punk.jpg",
    icon: "/helix-bullet.svg"
  },
  {
    id: 2,
    image: "/banner/slider-nebula.jpg",
    icon: "/helix-bullet.svg"
  },
  {
    id: 3,
    image: "/banner/slider-fortnite.jpg",
    icon: "/helix-bullet.svg"
  },
  {
    id: 4,
    image: "/banner/slider-metro.jpg",
    icon: "/helix-bullet.svg"
  }

]



export default function helix_banner(props: {sideBarShown: boolean}) {

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const [viewArrow, setViewArrow] = useState<boolean>(false);
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true)
    if (window.innerWidth < 768) setIsTablet(true)
  }, [])

  const {
    carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem, slideToItem, useListenToCustomEvent} = useSpringCarousel({
    withLoop: true,
    withThumbs: true,

    items: banner_images.map((i: any) => ({
      id: i.id,
      renderItem: (
        <div className="fade_to_bottom h-56 sm:h-64 xl:h-144 w-full flex justify-center">
          <Image width={1920} height={1080} className="h-full w-full object-cover object-center" src={`${i.image}`} alt="" priority={i.id === 0 ? true : false} />
        </div>
      ),
      renderThumb: (
        <span className={`cursor-pointer`}
          onClick={() => slideToItem(Number(i.id))}
        >
          <Image src={`${i.icon}`} width={36} height={36} alt="" className={`${activeBanner === i.id ? 'opacity-100' : 'opacity-60'}`}/>
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


  const showArrow = () => {
    !props.sideBarShown && setViewArrow(true)
  }
  const hideArrow = () => {
    !props.sideBarShown && setViewArrow(false)
  }

  return (
    <div className="relative h-56 sm:h-64 xl:h-144 overflow-hidden" onMouseEnter={() => showArrow()} onMouseLeave={() => hideArrow()}>

      {!isMobile && !isTablet && viewArrow && <div className="absolute top-1/2 left-3 z-10 origin-center translate-y-[-50%] cursor-pointer" onClick={slideToPrevItem}>
        <Image
        width={44} height={44}
        src='/previous_arrow.svg'
        alt={''} />
        </div>}
      {carouselFragment}
      {!isMobile && !isTablet && viewArrow && <div className="absolute top-1/2 right-3 z-10 origin-center  translate-y-[-50%] cursor-pointer" onClick={slideToNextItem}>
        <Image
        width={44} height={44}
        src='/next_arrow.svg'
        alt={''} />
        </div>}
      <div className="absolute bottom-0  origin-center translate-x-[-50%] translate-y-[-50%] left-[50%]">{thumbsFragment}</div>

    </div>

  )
}


