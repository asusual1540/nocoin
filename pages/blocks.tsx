import { useState, useEffect } from 'react'
import { useTransition } from 'react-spring';
import Head from 'next/head'
// import NocoinCarousel from "../components/puzzle_carousel"
import BlockCarousel from "../components/block_carousel"
import NocoinNav from "../components/nocoin_nav"
import SendCoinModal from "../components/send_coin_modal"
import NocoinSidebar from "../components/nocoin_sidebar"
// import NocoinTransfer from "../components/nocoin_transfer"

export default function Home() {
  const [contentHeight, setContentHeight] = useState<String>("1080");
  const [sideBarShown, setsideBarShown] = useState<boolean>(false);

  const [sendCoinModal, setsendCoinModal] = useState<boolean>(false);


  useEffect(() => {
    setContentHeight(`${window.innerHeight - 55}`) // navbar height subtracted
  }, []);

  const transitions = useTransition(sendCoinModal, {
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
  
  function openSendCoinModal() {
    setsendCoinModal(true)
  }
  function closeSendCoinModal() {
    setsendCoinModal(false)
  }




  return (
    <div className='top_nocoin relative'>
      <Head>
        <title>NoCoin</title>
        <meta name="description" content="Created by Nocoin" />
        <meta name="viewport" content="width=device-width; height=device-height; initial-scale=1; viewport-fit=cover"></meta>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NocoinNav sideBarShown={sideBarShown} openSideBar={openSideBar} closeSidebar={closeSidebar} openSendCoinModal={openSendCoinModal}/>

      {transitions((style, item) => item && <SendCoinModal style={style} closeSendCoinModal={closeSendCoinModal} openSendCoinModal={openSendCoinModal} sendCoinModal={sendCoinModal} />)}
      <NocoinSidebar sideBarShown={sideBarShown} openSendCoinModal={openSendCoinModal} />
      <main onClick={() => closeSidebar()} className="overflow-y-auto" style={{ height: `${contentHeight}px` }}>

        {/* <NocoinBanner sideBarShown={sideBarShown}/> */}

        <BlockCarousel title="Blocks" alwaysOpen={false} sideBarShown={sideBarShown} />


      </main>

    </div>
  )
}
