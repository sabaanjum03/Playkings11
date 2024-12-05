
// import React from "react";
// import { motion } from "framer-motion";
// import LeftCornerImg from "../assets/r1.png"; 
// import RightCornerImg from "../assets/g5.png"; 

// const HeroSection = () => {
//   return (
//     <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 overflow-hidden">
//       {/* Background Glow Effects */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 right-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
//       </div>

//       {/* Left Corner Image */}
//       <div className="absolute top-5 left-0  z-10 bottom-0 w-2/4 md:w-1/4 lg:w-1/5">
//         <motion.img
//           src={LeftCornerImg}
//           alt="Left Corner Model"
//           className="w-full h-auto object-contain"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </div>

//       {/* Right Corner Image */}
//       <div className="absolute bottom-0 right-0 z-10 w-1/3 md:w-1/4 lg:w-1/5">
//         <motion.img
//           src={RightCornerImg}
//           alt="Right Corner Model"
//           className="w-full h-auto object-contain"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center">
      
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg tracking-wide uppercase"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Double Your Fun <br /> Up to ₹20,000 Bonus
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           className="mt-4 text-lg md:text-2xl font-medium text-white/80"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Play, win, and dive into the glitz of the ultimate casino experience.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           className="mt-8 flex justify-center gap-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           <button className="bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition">
//             Join Now
//           </button>
//           <button className="bg-gray-800 border border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-black transform transition">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Terms and Conditions */}
//         <motion.a
//           href="#"
//           className="mt-4 block text-sm text-gray-400 hover:text-yellow-300 underline"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           Terms & Conditions Apply
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


































































import React from "react";
import { motion } from "framer-motion";
import LeftCornerImg from "../assets/r2.png"; 
import RightCornerImg from "../assets/g5.png"; 

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Left Corner Image */}
      <div className="absolute top-5 left-0 z-10 w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4">
        <motion.img
          src={LeftCornerImg}
          alt="Left Corner Model"
          className="w-full h-auto object-contain scale-110 md:scale-125 transition-transform duration-500"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Right Corner Image */}
      <div className="absolute bottom-0 right-0 z-10 w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4">
        <motion.img
          src={RightCornerImg}
          alt="Right Corner Model"
          className="w-full h-auto object-contain scale-110 md:scale-125 transition-transform duration-500"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg tracking-wide uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Double Your Fun <br /> Up to ₹20,000 Bonus
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Play, win, and dive into the glitz of the ultimate casino experience.
        </motion.p>

        {/* Additional Section */}
        <motion.div
          className="mt-8 text-center px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h3 className="text-xl font-bold text-yellow-400">
            What are you waiting for? Join us today!
          </h3>
          <p className="mt-2 text-white/80">
            Start playing now and enjoy an unmatched casino experience with exciting rewards.
          </p>
        </motion.div>

        {/* Sign Up CTA */}
        <motion.div
          className="mt-8 flex justify-center gap-6 flex-col sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button className="bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300">
            Sign Up Now
          </button>
          <button className="bg-gray-800 border border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-black transform transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Terms and Conditions */}
        <motion.a
          href="#"
          className="mt-4 block text-sm text-gray-400 hover:text-yellow-300 underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Terms & Conditions Apply
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
