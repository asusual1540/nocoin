import { useState, useEffect, useRef } from 'react';
import Image from "next/image"
import { useTransition, config } from 'react-spring';
import { useSpringCarousel } from 'react-spring-carousel';


import { Game } from '../interfaces/interfaces'
import HelixGame from './helix_game';
import HelixGameMobile from './helix_game_mobile';


import dataStore from "../data/data.json";


export default function HelixCarousel(props: { title: String, alwaysOpen: boolean, sideBarShown: boolean }) {
  const [gamesLoaded, setGamesLoaded] = useState<boolean>(false);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedState, setSelectedState] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(1);
  const [selectedGame, setSelectedGame] = useState<Game>({
    id: 1,
    name: "Apex Legends",
    detail: "",
    publisher: "Valve",
    developer: "Ice Frog",
    release_date: "1-1-2001",
    genre: "Strategy",
    rating: 3,
    global_rating: 1,
    cover_pic: "/game/apex_legends/TV_BANNER.jpg",
    profile_pic: "/game/apex_legends/GAME_BOX_ART.jpg",
    ingame_pic: [
      "/game/apex_legends/SCREENSHOT_01.jpg",
      "/game/apex_legends/SCREENSHOT_02.jpg",
      "/game/apex_legends/SCREENSHOT_03.jpg",
      "/game/apex_legends/SCREENSHOT_04.jpg",
      "/game/apex_legends/SCREENSHOT_05.jpg",
      "/game/apex_legends/SCREENSHOT_06.jpg"
    ]

  })
  const [viewArrow, setViewArrow] = useState<boolean>(false);
  const [hoveredState, setHoveredState] = useState<boolean>(false);
  const [hoveredGame, setHoveredGame] = useState<Game>();
  const [viewDetail, setViewDetail] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    let games = dataStore.store.games
    let game_details = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

    games = shuffle(games)

    let games_arr: Game[] = []

    for (let i = 0; i < games.length; i++) {
      let temp_game: Game = {
        id: i,
        name: games[i].name,
        detail: shuffle(game_details.split(" ")).join(" "),
        release_date: `${randomDate(new Date(2012, 0, 1), new Date()).toDateString()}`,
        publisher: generate_name(),
        developer: generate_name(),
        genre: get_genre(),
        rating: getRandomInt(1, 5),
        global_rating: getRandomInt(1000, 5000),

        cover_pic: games[i].cover_pic,
        profile_pic: games[i].profile_pic,
        ingame_pic: games[i].ingame_pic.map(pic => pic)
      }

      games[i] && games_arr.push(temp_game)
    }

    setGames(games_arr)
    setGamesLoaded(true)




    setSelectedGame(games_arr[0])
    if (props.alwaysOpen && !isMobile && !isTablet) {

      setSelectedState(true)
    }
    if (window.innerWidth < 640) setIsMobile(true)
    if (window.innerWidth < 768) setIsTablet(true)

    if (window.innerWidth < 320) setItemsPerSlide(1)
    if (window.innerWidth > 320) setItemsPerSlide(2)
    if (window.innerWidth > 480) setItemsPerSlide(2)
    if (window.innerWidth > 640) setItemsPerSlide(3)
    if (window.innerWidth > 768) setItemsPerSlide(4)
    if (window.innerWidth > 990) setItemsPerSlide(5)
    if (window.innerWidth > 1200) setItemsPerSlide(6)
    if (window.innerWidth > 1600) setItemsPerSlide(7)
    if (window.innerWidth > 1900) setItemsPerSlide(7)
    if (window.innerWidth > 2200) setItemsPerSlide(8)
    if (window.innerWidth > 2600) setItemsPerSlide(8)
    if (window.innerWidth > 3200) setItemsPerSlide(9)
    if (window.innerWidth > 4000) setItemsPerSlide(9)


  }, []);



  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    gutter: 24,
    itemsPerSlide: itemsPerSlide,
    withLoop: true,
    items: gamesLoaded ? games.map((game) => ({
      id: game.id.toString(),
      renderItem: (
        <div onClick={() => showDetail(game)} onMouseEnter={() => hoverGame(game)} onMouseLeave={() => setHoveredState(false)} >
          <div className={`relative cursor-pointer`}>

            <div className='bg-white border-2' style={{ height: "153", width: "272" }}>
              <div className="p-6 bg-gray-100 rounded-lg">

                <div className="mb-3 flex">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>


                  <h3 className="text-lg font-bold ml-2">
                    QUESTION
                  </h3>




                </div>


                <p className="text-sm leading-6 text-gray-600">
                  Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus.
                </p>

              </div>
            </div>


            {/* {selectedState && <div className={`w-full absolute bottom-0 z-50 bg-helix-sky origin-top transition-all ${hoveredGame?.id === game.id ? "h-2" : "h-0"}`}></div>} */}

            {/* <div className='absolute z-50 bottom-0 border-t-2 w-full flex justify-between items-center origin-bottom'>
              <p className='text-sm text-helix-dark font-bold uppercase truncate text-center w-full'>2023-01-12T18:51:32+00:00</p>
            </div>

            <div className='absolute z-50 top-0 bg-helix-dark w-full flex justify-between items-center origin-bottom'>
              <p className='text-sm font-bold uppercase truncate text-center w-full' style={{ color: "#D1D5DB" }}>#BLOCK#</p>
            </div> */}

          </div>
        </div>

      )
    })) : [{ id: '1', renderItem: (<div className='text-white font-bold'>Loading...</div>) }]
  })


  let popTransition = useTransition(hoveredGame, {
    from: { opacity: 0, scaleY: 0 },
    enter: { opacity: 1, scaleY: 1.0 },
    leave: { opacity: 0 },
    config: config.stiff,
  })



  function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generate_name() {
    let firstnames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
    let lastnames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]
    return firstnames[getRandomInt(0, firstnames.length)] + ' ' + lastnames[getRandomInt(0, lastnames.length)]
  }

  function get_genre() {
    let genres = ["Sandbox",
      "Real-time strategy (RTS)",
      "Shooters (FPS and TPS)",
      "Multiplayer online battle arena (MOBA)",
      "Role-playing (RPG, ARPG, and More)",
      "Simulation and sports",
      "Puzzlers and party games",
      "Action-adventure",
      "Survival and horror",
      "Platformer"]
    return genres[getRandomInt(0, genres.length)]
  }

  function shuffle(arr: any[]) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }

    return arr;
  }




  const showArrow = () => {
    !props.sideBarShown && setViewArrow(true)
  }
  const hideArrow = () => {
    !props.sideBarShown && setViewArrow(false)
  }


  const showDetail = (gm: Game) => {
    // setSelectedGame(gm)
    // setViewDetail(true)
    // setSelectedState(true)
    if (!isMobile && !isTablet) {
      setTimeout(() => {
        sliderRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }

  }
  const hideDetail = () => {
    setViewDetail(false)
    setSelectedState(false)
  }


  const hoverGame = (game: Game) => {
    if (!isMobile && !isTablet) {
      setHoveredGame(game)
      setHoveredState(true)
    }
    if (selectedState) {
      setSelectedGame(game)
      setViewDetail(true)
      setSelectedState(true)
    }

  }



  return (
    <div className='m-3' >
      <div ref={sliderRef}></div>
      <div className='relative' onMouseEnter={() => showArrow()} onMouseLeave={() => hideArrow()}>
        <div className='flex items-center'>
          <p className="sm:text-sm md:text-md xl:text-xl 2xl:text-2xl text-gray font-bold my-3 ml-1 mr-3">{props.title}</p>
          <div className="cursor-pointer border-2 rounded-3xl mr-3 p-1" onClick={slideToPrevItem}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
          </div>
          
          <div className="cursor-pointer border-2 rounded-3xl mr-3 p-1" onClick={slideToNextItem}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
          </div>
        </div>



        <div className='py-3 overflow-x-hidden'>
          {carouselFragment}
        </div>




      </div>

      {!isMobile && !isTablet && viewDetail &&
        <HelixGame game={selectedGame} hideDetail={hideDetail} hoveredState={hoveredState} alwaysOpen={props.alwaysOpen} selectedState={selectedState} />}
      {viewDetail && (isMobile || isTablet) && <HelixGameMobile game={selectedGame} hideDetail={hideDetail} />}

    </div>

  )

}