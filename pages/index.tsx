import { useState, useEffect } from 'react'
import { useTransition } from 'react-spring';
import Head from 'next/head'
import PuzzleCarousel from "../components/puzzle_carousel"
import TransactionCarousel from "../components/transaction_carousel"
import BlockCarousel from "../components/block_carousel"
import NocoinNav from "../components/nocoin_nav"
import SendCoinModal from "../components/send_coin_modal"
import PuzzleCreateModal from "../components/puzzle_create_modal"
import PuzzleSolveModal from "../components/puzzle_solve_modal"
import NocoinSidebar from "../components/nocoin_sidebar"
// import NocoinTransfer from "../components/nocoin_transfer"

export default function Home() {
  const [contentHeight, setContentHeight] = useState<String>("1080");
  const [sideBarShown, setsideBarShown] = useState<boolean>(false);

  const [sendCoinModal, setsendCoinModal] = useState<boolean>(false);
  const [puzzleCreateModal, setPuzzleCreateModal] = useState<boolean>(false);
  const [puzzleSolveModal, setPuzzleSolveModal] = useState<boolean>(false);


  useEffect(() => {
    setContentHeight(`${window.innerHeight - 55}`) // navbar height subtracted
  }, []);

  const coin_transitions = useTransition(sendCoinModal, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" }
  });
  const puzzle_transitions = useTransition(puzzleCreateModal, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" }
  });
  const puzzle_solution = useTransition(puzzleSolveModal, {
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


  function openPuzzleCreateModal() {
    setPuzzleCreateModal(true)
  }
  function closePuzzleCreateModal() {
    setPuzzleCreateModal(false)
  }


  function openPuzzleSolveModal() {
    setPuzzleSolveModal(true)
  }
  function closePuzzleSolveModal() {
    setPuzzleSolveModal(false)
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
      <NocoinNav sideBarShown={sideBarShown} openSideBar={openSideBar} closeSidebar={closeSidebar} openSendCoinModal={openSendCoinModal} openPuzzleCreateModal={openPuzzleCreateModal}/>
      {coin_transitions((style, item) => item && <SendCoinModal style={style} closeSendCoinModal={closeSendCoinModal} />)}
      {puzzle_transitions((style, item) => item && <PuzzleCreateModal style={style} closePuzzleCreateModal={closePuzzleCreateModal}  />)}
      {puzzle_solution((style, item) => item && <PuzzleSolveModal style={style} setPuzzleSolveModal={setPuzzleSolveModal} closePuzzleSolveModal={closePuzzleSolveModal} />)}
      
      <NocoinSidebar sideBarShown={sideBarShown} openSendCoinModal={openSendCoinModal}/>
      
      <main onClick={() => closeSidebar()} className="overflow-y-auto" style={{ height: `${contentHeight}px` }}>

        <BlockCarousel title="Blocks" alwaysOpen={false} sideBarShown={sideBarShown} />
        <PuzzleCarousel title="Knowledges" alwaysOpen={false} sideBarShown={sideBarShown} openPuzzleSolveModal={openPuzzleSolveModal} />
        <TransactionCarousel title="Transactions" alwaysOpen={false} sideBarShown={sideBarShown} />



        

      </main>

    </div>
  )
}
