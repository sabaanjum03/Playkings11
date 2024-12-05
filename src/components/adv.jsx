

// src/components/CasinoSection.jsx
import React from 'react';
import heroImage from '../assets/i1.png'; // Replace with your image path
import { FaArrowRight } from 'react-icons/fa'; // Using react-icons for the button icon

const adv = () => {
  return (
    <div className='p-20   bg-white' >
    
    <section className=" rounded-3xl bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white py-12 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fadeIn">
            Welcome to NetBet Casino
          </h1>
          <p className="mt-4 text-lg">
            Dive into an unforgettable online gaming experience. Enjoy hundreds of casino games, 
            including slots, roulette, blackjack, and live dealer games—all tailored to bring excitement 
            to your fingertips.
          </p>
          <p className="mt-4 text-lg">
            Grab our exclusive welcome bonuses and take your chances on the jackpot! Whether you're a 
            beginner or a seasoned player, NetBet Casino is your ultimate destination for online entertainment.
          </p>
          <button className="mt-6 flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 transition duration-300 ease-in-out rounded-full text-lg font-semibold shadow-lg">
            Join Now <FaArrowRight className="ml-2" />
          </button>
        </div>
        {/* Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Casino Games"
            className="w-full h-auto rounded-lg  transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default adv;
