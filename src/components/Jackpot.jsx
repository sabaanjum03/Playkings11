import React from "react";
import jackpot1 from "../assets/game1.jpeg";
import jackpot2 from "../assets/game3.jpeg";
import jackpot3 from "../assets/game4.jpeg";
import newGame from "../assets/game1.jpeg";

const Jackpot = () => {
  return (
    <section className="bg-gradient-to-r from-black via-purple-900 to-gray-900 py-20 px-8 relative">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-6xl font-extrabold text-yellow-400 neon-glow">
          🎉 Ultimate Jackpot Zone 🎰
        </h2>
        <p className="text-lg mt-4 text-gray-300 font-medium">
          Experience the thrill of winning big! Explore the best games, special bonuses, and life-changing jackpots.
        </p>
      </div>

      {/* Spotlight Section */}
      <div className="mt-16 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 py-10 px-6 rounded-xl shadow-lg relative text-center">
        <h3 className="text-4xl font-bold text-white">🔥 Weekly Jackpot Special 🔥</h3>
        <p className="text-lg mt-2 text-gray-200">
          Win up to <span className="text-yellow-300 font-bold">$50,000</span> in our featured games. Spin the reels and claim your fortune!
        </p>
        <button className="mt-6 px-8 py-3 text-lg font-bold bg-black text-yellow-400 rounded-full shadow-lg hover:scale-110 hover:bg-yellow-500 hover:text-black transition-transform">
          Join Now
        </button>
      </div>

      {/* Featured Games Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="relative bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src={jackpot1}
            alt="Mega Spin"
            className="w-full h-48 rounded-t-xl object-cover"
          />
          <div className="p-4">
            <h4 className="text-2xl font-bold text-yellow-300">Mega Spin 🎡</h4>
            <p className="text-gray-400 mt-2">
              Spin for a chance to win prizes up to <span className="text-yellow-300">$10,000</span>!
            </p>
            <button className="mt-4 px-6 py-2 text-sm font-bold bg-yellow-400 text-black rounded-full hover:scale-105">
              Play Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src={jackpot2}
            alt="High Stakes"
            className="w-full h-48 rounded-t-xl object-cover"
          />
          <div className="p-4">
            <h4 className="text-2xl font-bold text-yellow-300">High Stakes 💰</h4>
            <p className="text-gray-400 mt-2">
              Bet big and win bigger with massive multipliers and exclusive bonuses.
            </p>
            <button className="mt-4 px-6 py-2 text-sm font-bold bg-yellow-400 text-black rounded-full hover:scale-105">
              Play Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src={jackpot3}
            alt="Lucky 7"
            className="w-full h-48 rounded-t-xl object-cover"
          />
          <div className="p-4">
            <h4 className="text-2xl font-bold text-yellow-300">Lucky 7 🎲</h4>
            <p className="text-gray-400 mt-2">
              The classic slot machine that triples your luck and your winnings!
            </p>
            <button className="mt-4 px-6 py-2 text-sm font-bold bg-yellow-400 text-black rounded-full hover:scale-105">
              Play Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src={newGame}
            alt="Golden Jackpot"
            className="w-full h-48 rounded-t-xl object-cover"
          />
          <div className="p-4">
            <h4 className="text-2xl font-bold text-yellow-300">Golden Jackpot 🏆</h4>
            <p className="text-gray-400 mt-2">
              The ultimate jackpot game with dazzling gold prizes.
            </p>
            <button className="mt-4 px-6 py-2 text-sm font-bold bg-yellow-400 text-black rounded-full hover:scale-105">
              Play Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Promo */}
      <div className="mt-16 bg-gradient-to-r from-gray-800 via-black to-gray-900 py-8 px-4 rounded-xl text-center">
        <h4 className="text-3xl font-bold text-yellow-400">
          Don’t Miss Out on Big Wins!
        </h4>
        <p className="text-lg mt-2 text-gray-300">
          Sign up today and claim your exclusive <span className="text-red-400">welcome bonus</span> for new players!
        </p>
        <button className="mt-4 px-10 py-3 text-lg font-bold bg-yellow-400 text-black rounded-full hover:scale-105 hover:bg-yellow-500 transition-transform">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default Jackpot;
