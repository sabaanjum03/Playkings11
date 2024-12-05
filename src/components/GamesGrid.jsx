import React, { useState } from "react";
import PokerImg from "../assets/img1.jpg";
import SlotsImg from "../assets/img2.jpg";
import BlackjackImg from "../assets/img4.jpg";
import RouletteImg from "../assets/img5.jpg";
import BingoImg from "../assets/img3.jpg";
import CrapsImg from "../assets/img1.jpg";
import DiceImg from "../assets/img6.jpeg";
import KenoImg from "../assets/img2.jpg";
import BaccaratImg from "../assets/img3.jpg";
import ScratchCardsImg from "../assets/img4.jpg";
import HorseRacingImg from "../assets/img5.jpg";
import SportsBettingImg from "../assets/img1.jpg";


const games = [
  { name: "Poker",  img: PokerImg, link: "/games/poker" },
  { name: "Slots",  img: SlotsImg, link: "/games/slots" },
  { name: "Blackjack",  img: BlackjackImg, link: "/games/blackjack" },
  { name: "Roulette",  img: RouletteImg, link: "/games/roulette" },
  { name: "Bingo",  img: BingoImg, link: "/games/bingo" },
  { name: "Craps",  img: CrapsImg, link: "/games/craps" },
  { name: "Dice Game", img: DiceImg, link: "/games/dice" },
  { name: "Keno",  img: KenoImg, link: "/games/keno" },
  { name: "Baccarat" , img: BaccaratImg, link: "/games/baccarat" },
  { name: "Scratch Cards",  img: ScratchCardsImg, link: "/games/scratchcards" },
  { name: "Horse Racing", img: HorseRacingImg, link: "/games/horseracing" },
  { name: "Sports Betting",  img: SportsBettingImg, link: "/games/sportsbetting" },
];

const GamesGrid = () => {
  const [visibleGames, setVisibleGames] = useState(8);

  const showMoreGames = () => {
    setVisibleGames((prev) => prev + 8);
  };

  return (
    <div className="bg-gradient-to-br from-black via-red-700 to-yellow-500 py-16 px-8 md:px-16 lg:px-24">
      

      {/* Header Section */}
      <div className="relative text-center mb-12">
        <div className="absolute inset-0 transform -skew-y-3 bg-gradient-to-r from-yellow-500 to-red-500 opacity-30"></div>
        

        <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-3">
          New Games
        </h2>
        <p className="relative z-10 mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Step into a world of unmatched excitement! Our wide range of games offers something for everyone. Spin, play, and win like never before!
        </p>
     
      </div>


      {/* Game Cards */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.slice(0, visibleGames).map((game, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-black to-gray-800 border-[5px] border-yellow-500 rounded-2xl shadow-2xl hover:shadow-gold-glow transition-shadow duration-500"
          >
            {/* Game Image */}
            <div className="relative  overflow-hidden rounded-t-lg">
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-60 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Game Info */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                {game.name}
              </h2>
              <p className="text-gray-400 text-sm mt-2">{game.category}</p>
              <p className="mt-4 text-gray-300 text-sm">
                A thrilling casino experience. Play now and try your luck to win BIG rewards!
              </p>

              {/* Play Button */}
              <a
                href={game.link}
                className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-all"
              >
                Play Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* "View More" Button */}
      {visibleGames < games.length && (
        <div className="text-center mt-12">
          <button
            onClick={showMoreGames}
            className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            View More Games
          </button>
        </div>
      )}
    </div>
  );
};

export default GamesGrid;








