
// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import backgroundImage from '../assets/img6.jpeg';
// import videoSource from '../assets/vid.mp4';

// const Betting = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           videoElement.play();
//         } else {
//           videoElement.pause();
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       threshold: 0.5,
//     });

//     observer.observe(videoElement);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   const matches = [
//     {
//       id: 1,
//       image: '../assets/img1.jpg',
//       teams: 'Team A vs Team B',
//       odds: '2.5',
//       score: '120 - 115',
//     },
//     {
//       id: 2,
//       image: '../assets/img4.jpg',
//       teams: 'Team C vs Team D',
//       odds: '1.8',
//       score: '95 - 100',
//     },
//   ];

//   return (
//     <section
//       className="bg-black text-white py-20 px-8 md:px-24 flex flex-col md:flex-row items-center md:space-x-12 text-left relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Left Content */}
//       <div className="flex-1 flex flex-col space-y-8 p-12 rounded-lg shadow-lg">
//         <motion.h2
//           className="text-6xl font-extrabold text-white neon-glow mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           🎰 Hot Betting Zone 🔥
//         </motion.h2>

//         <p className="text-lg text-white leading-relaxed">
//           Experience the thrill of live betting! Watch real-time scores, place your bets, and feel the heat of competition. Unbeatable odds and electrifying action await you.
//         </p>

//         {/* Matches */}
//         <div className="grid grid-cols-1 gap-6">
//           {matches.map((match) => (
//             <motion.div
//               key={match.id}
//               className="flex items-center bg-black bg-opacity-80 rounded-lg p-6 shadow-xl hover:scale-105 transition-transform"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <img
//                 src={match.image}
//                 alt={match.teams}
//                 className="w-20 h-20 object-cover rounded-full mr-6"
//               />
//               <div>
//                 <h3 className="text-2xl font-bold text-yellow-400">{match.teams}</h3>
//                 <p className="text-lg text-white mb-2">Odds: {match.odds}</p>
//                 <p className="text-lg text-pink-300 font-semibold">Score: {match.score}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action Button */}
//         <div className="flex">
//           <button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-600 text-black rounded-lg hover:scale-105 shadow-md neon-glow">
//             Bet Now
//           </button>
//         </div>
//       </div>

//       {/* Right Video */}
//       <div className="flex-1 md:ml-12">
//         <div className="w-full border-4 border-yellow-500 rounded-lg overflow-hidden">
//           <video
//             ref={videoRef}
//             src={videoSource}
//             className="w-full h-[60vh] object-cover transform transition-transform duration-1000 hover:scale-105 hover:rotate-3 hover:-translate-y-1"
//             muted
//             loop
//             playsInline
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Betting;




































import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import videoSource from '../assets/vid.mp4';

const Betting = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const matches = [
    {
      id: 1,
      image: '../assets/img1.jpg',
      teams: 'Team A vs Team B',
      odds: '2.5',
      score: '120 - 115',
    },
    {
      id: 2,
      image: '../assets/img4.jpg',
      teams: 'Team C vs Team D',
      odds: '1.8',
      score: '95 - 100',
    },
  ];

  return (
   
    <section
      className="py-20 rounded-3xl px-8 md:px-16 bg-gradient-to-b from-black via-pink-900 to-black flex flex-col  md:flex-row items-center md:space-x-12 text-left relative"
   
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col space-y-8 p-8 md:p-12 rounded-lg shadow-xl bg-opacity-80">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-white neon-glow mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🎰 Hot Betting Zone 🔥
        </motion.h2>

        <p className="text-lg text-white leading-relaxed mb-8">
          Immerse yourself in the world of live betting, with the best odds and thrilling real-time action! The stakes are high, and the excitement is endless. Will you be the next big winner?
        </p>

        {/* Highlights Section */}
        <motion.div
          className="bg-black bg-opacity-70 p-6 rounded-lg shadow-xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Platform Highlights</h3>
          <ul className="space-y-2 text-lg">
            <li>⚡ Live updates for every match</li>
            <li>🔥 Real-time betting odds</li>
            <li>🏆 High-stakes games & tournaments</li>
            <li>💥 Interactive betting experience</li>
          </ul>
        </motion.div>

        {/* Matches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <motion.div
              key={match.id}
              className="flex items-center bg-black bg-opacity-80 rounded-lg p-6 shadow-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={match.image}
                alt={match.teams}
                className="w-20 h-20 object-cover rounded-full mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">{match.teams}</h3>
                <p className="text-lg text-white mb-2">Odds: {match.odds}</p>
                <p className="text-lg text-pink-300 font-semibold">Score: {match.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center md:justify-start">
          <button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-600 text-black rounded-lg hover:scale-105 shadow-md neon-glow">
            Bet Now
          </button>
        </div>
      </div>

      {/* Right Video */}
      <div className="flex-1 md:ml-12 mt-8 md:mt-0">
        <div className="w-full border-4 border-yellow-500 rounded-lg overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src={videoSource}
            className="w-full h-[60vh] object-cover"
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  
  );
};

export default Betting;
