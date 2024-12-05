import React, { useEffect, useState } from "react";
import slotMachineImg from "../assets/bgif2.gif";
import rouletteImg from "../assets/bgif3.gif";
import chipsImg from "../assets/gif1.gif";

const Promotions = () => {
  const promotions = [
    {
      title: "💎 Welcome Bonus",
      description: `Unlock up to $2000 in bonus credits on your first deposit! Double your chances to hit the jackpot 
      with this incredible offer. Plus, enjoy exclusive games available only for our premium members.`,
      graphic: slotMachineImg,
    },
    {
      title: "🎲 Weekend Roulette Madness",
      description: `Every weekend, dive into high-stakes roulette tables with boosted payouts. Experience thrilling
      gameplay and maximize your wins during these exclusive events.`,
      graphic: rouletteImg,
    },
    {
      title: "🔥 Daily Free Spins",
      description: `Spin the reels for free every single day and stand a chance to win jaw-dropping prizes. From 
      instant cash rewards to lucrative bonus credits, there's something for everyone!`,
      graphic: chipsImg,
    },
  ];

  const [typingText, setTypingText] = useState("");
  const headerText = "Unbeatable Deals & Exciting Offers";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(headerText.slice(0, i + 1));
      i++;
      if (i === headerText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [headerText]);

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-black to-hot-pink py-16 px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold text-yellow-400 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 animate-pulse">
          {typingText}
        </h2>
        <p className="text-xl mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Discover the latest offers that take your gaming experience to the next level. Don’t miss out on
          these deals that are designed to reward and excite you.
        </p>
      </div>

      {/* Promotions Layout */}
      <div className="space-y-20">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className={`relative flex flex-col-reverse md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left px-6">
              <h3 className="text-5xl font-bold text-yellow-400 mb-4">{promo.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{promo.description}</p>
              <button className="mt-8 px-10 py-4 text-lg font-bold bg-black text-yellow-400 rounded-full shadow-lg hover:scale-110 hover:bg-yellow-500 hover:text-black transition-transform">
                Claim Now
              </button>
            </div>

            {/* Graphic Section */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src={promo.graphic}
                alt={promo.title}
                className="w-90 h-90 md:w-90 md:h-90 object-contain transform hover:rotate-6 hover:scale-105 transition-transform"
              />
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 opacity-30 blur-3xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-20">
        <button className="px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:scale-105 transition-transform">
          View All Promotions
        </button>
      </div>

      {/* Subtle Background Decorations */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-yellow-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-20 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Promotions;
