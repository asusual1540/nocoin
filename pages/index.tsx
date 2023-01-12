import { useState, useEffect } from 'react'
import { useTransition } from 'react-spring';
import Head from 'next/head'
import HelixCarousel from "../components/helix_carousel"
import BlockCarousel from "../components/block_carousel"
import HelixNav from "../components/helix_nav"
import HelixBanner from "../components/helix_banner"
import HelixSidebar from "../components/helix_sidebar"
import HelixAuthentication from "../components/helix_authentication"

export default function Home() {
  const [contentHeight, setContentHeight] = useState<String>("1080");
  const [sideBarShown, setsideBarShown] = useState<boolean>(false);
  const [logInUser, setLogInUser] = useState<boolean>(false);
  const [signUpUser, setSignUpUser] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setContentHeight(`${window.innerHeight - 55}`) // navbar height subtracted
  }, []);

  const transitions = useTransition(showAuthModal, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" }
  });


  function openSideBar() {
    setsideBarShown(true)
  }
  function closeSidebar() {
    setsideBarShown(false)
  }
  function openLogInUser() {
    setLogInUser(true)
    setSignUpUser(false)
    setShowAuthModal(!showAuthModal)
  }
  function openSignUpUser() {
    setSignUpUser(true)
    setLogInUser(false)
    setShowAuthModal(!showAuthModal)
  }
  function closeAuthModal() {
    setShowAuthModal(false)
  }


  const cancelSearch = (e: any) => {
    e.preventDefault()
    setSearchTerm("")

  }




  function handleChange(event: any) {
    setSearchTerm(event.target.value)
  }



  return (
    <div className='top_helix relative'>
      <Head>
        <title>NoCoin</title>
        <meta name="description" content="Created by Helix" />
        <meta name="viewport" content="width=device-width; height=device-height; initial-scale=1; viewport-fit=cover"></meta>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HelixNav sideBarShown={sideBarShown} openSideBar={openSideBar} closeSidebar={closeSidebar} openLogInUser={openLogInUser}/>

      {transitions((style, item) => item && <HelixAuthentication style={style} closeAuthModal={closeAuthModal} logInUser={logInUser} signUpUser={signUpUser} />)}
      <HelixSidebar sideBarShown={sideBarShown} openLogInUser={openLogInUser} openSignUpUser={openSignUpUser} />
      <main onClick={() => closeSidebar()} className="overflow-y-auto" style={{ height: `${contentHeight}px` }}>

        {/* <HelixBanner sideBarShown={sideBarShown}/> */}

        <BlockCarousel title="Blocks" alwaysOpen={false} sideBarShown={sideBarShown} />



        <p className="sm:text-sm md:text-md xl:text-xl 2xl:text-2xl text-gray text-center font-bold my-3 uppercase">Knowledge Base</p>
        <form className={`flex mx-auto w-1/3 xxsm:w-2/3 xsm:w-2/3 sm:w-2/3 md:w-1/2 mlg:w-1/3 items-center justify-center`}>
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 hover:cursor-pointer">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" value={searchTerm} onChange={(e) => handleChange(e)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find your topics" />
            <button className="absolute top-2 right-3 z-20" onClick={(e) => cancelSearch(e)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={2} stroke="#6B7280" className="w-5 h-5 rounded">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </form>



        <HelixCarousel title="Mathematics/Algebra" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Science/Chemestry" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Agriculture" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Physics/Momentum" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Philosophy" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Science/Computer" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Religion/Hinduism" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="History/BronzeAge" alwaysOpen={false} sideBarShown={sideBarShown} />
        <HelixCarousel title="Computer/DistributedSystems" alwaysOpen={false} sideBarShown={sideBarShown} />

      </main>

    </div>
  )
}
