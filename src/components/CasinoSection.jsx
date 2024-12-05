import React from "react";
import backgroundImage from "../assets/r1.png"; // Replace with your actual image path

const CasinoSection = () => {
  return (
    <div className="bg-black p-16">
    <div className="relative bg-gradient-to-b rounded-3xl from-gray-900 via-gray-800 to-black py-16 px-8 md:px-20 lg:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-500 opacity-30 blur-3xl animate-ping"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Image Section */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src={backgroundImage} // Replace with your slot machine image here
              alt="Slot Machines"
              className="object-cover rounded-xl"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent opacity-30 blur-lg"></div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 bg-gradient-to-r from-gray-800 to-transparent p-10 rounded-xl shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Why Playkings11 Online Casino Could Be for You
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Here at PlayKings11, we’re dedicated to giving our customers a fantastic
            experience with our amazing online casino games. Our site gives you
            the opportunity to play a whole host of games from the best
            providers around. Some old favourites such as Blackjack and roulette
            are flexible and can be played freely, and you can also make the
            most of our live and virtual games either on your computer or
            through a mobile device. With all that on offer, NetBet is the place
            to be for the ultimate casino experience – sign up now!
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-lg font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
            Play Online Casino Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CasinoSection;









