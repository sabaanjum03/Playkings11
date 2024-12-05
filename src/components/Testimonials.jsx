

import React from "react";
import profileImage1 from "../assets/pin1.jpeg";
import profileImage2 from "../assets/pin2.jpeg";
import profileImage3 from "../assets/pin3.jpeg";

const ReviewsSection = () => {
  const testimonials = [
    {
      title: "Won ₹5 Lakhs",
      name: "Sumit Sarkar",
      location: "Nadia, West Bengal",
      description:
        "PlayKings11 changed my life! Winning ₹5 lakhs was like a dream come true. Highly recommend this amazing platform!",
      image: profileImage1,
    },
    {
      title: "Won iPhone",
      name: "Ahmed Shah",
      location: "Kutubpur, UP",
      description:
        "Can you believe ₹1 turned into an iPhone? With PlayKings11, anything is possible. It's thrilling and rewarding!",
      image: profileImage2,
    },
    {
      title: "Won iPhone",
      name: "Sandeep Patel",
      location: "Jabalpur, MP",
      description:
        "Luck and skill combined on PlayKings11. Winning an iPhone for ₹1 felt absolutely magical!",
      image: profileImage3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-pink-900 to-black py-16 px-8">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center">
        {/* mine left side */}
        <div className="w-full md:w-3/5 text-left md:pr-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 uppercase tracking-wide glowing-text">
            Trusted By Millions of Winners
          </h1>
          <p className="text-lg mt-4 text-gray-300 max-w-xl">
            Welcome to PlayKings11 — where every game is a chance to change your
            life. Win incredible prizes, compete with friends, and experience
            the thrill of luck and strategy!
          </p>
          <button className="mt-6 px-6 py-3 text-lg font-bold bg-yellow-500 hover:bg-yellow-400 transition-all rounded-full text-black shadow-lg">
            Join Now
          </button>
        </div>

        {/* mine right side */}
        <div className="w-full md:w-2/5 bg-gradient-to-tr from-purple-800 to-black p-8 rounded-3xl shadow-lg mt-12 md:mt-0 hover:scale-105 transition-transform">
          <div className="flex items-center justify-center">
            <span className="text-6xl font-bold text-yellow-500 animate-bounce">
              4.8
            </span>
            <div className="ml-4 flex flex-col">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 ${
                      i === 4 ? "text-gray-500" : "drop-shadow-glow"
                    }`}
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 mt-2 text-sm italic">
                Based on 1M+ player reviews
              </p>
            </div>
          </div>
          <div className="mt-6">
            {["5", "4", "3", "2", "1"].map((rating, index) => {
              const colors = [
                "bg-green-500",
                "bg-green-400",
                "bg-yellow-500",
                "bg-orange-500",
                "bg-red-500",
              ];
              const widths = ["90%", "75%", "50%", "25%", "10%"];
              return (
                <div className="flex items-center mb-2" key={rating}>
                  <span className="text-sm text-gray-300">{rating}</span>
                  <div className="w-full h-2 bg-gray-700 mx-2 rounded-full">
                    <div
                      className={`h-2 ${colors[index]} rounded-full`}
                      style={{ width: widths[index] }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-300">
                    {widths[index]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          What Our Players Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-green-700  to-black  border-[5px] border-yellow-400 text-white p-6 rounded-3xl shadow-lg relative hover:scale-105 transition-transform"
            >
              <div className="absolute top-0 left-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                {item.title}
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-yellow-300 shadow-lg animate-spin-slow"
                />
                <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                <p className="italic text-yellow-200">{item.location}</p>
                <p className="mt-4 text-center text-gray-200 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
