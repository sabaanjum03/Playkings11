

import React from "react";
import player1Avatar from "../assets/g1.png";
import player2Avatar from "../assets/g2.png";
import player3Avatar from "../assets/g3.png";

const Leaderboard = () => {
  const players = [
    { name: "AceMaster", avatar: player1Avatar, score: "1,200,000", games: 150 },
    { name: "LuckyStrike", avatar: player2Avatar, score: "950,000", games: 125 },
    { name: "SpinWizard", avatar: player3Avatar, score: "800,000", games: 100 },
    { name: "JackpotPro", avatar: player1Avatar, score: "600,000", games: 90 },
    { name: "CasinoKing", avatar: player2Avatar, score: "550,000", games: 85 },
    { name: "SlotStar", avatar: player3Avatar, score: "450,000", games: 75 },
    { name: "WheelMaster", avatar: player1Avatar, score: "400,000", games: 70 },
    { name: "LuckyCharm", avatar: player2Avatar, score: "350,000", games: 65 },

  ];

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen py-12 px-6">
      {/* Header */}
      <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-8 neon-glow">
        🎲 Casino Leaderboard 🎰
      </h2>

      {/* Table */}
      <div className="max-w-7xl mx-auto bg-black bg-opacity-80 p-8 rounded-2xl shadow-2xl">
        <table className="w-full text-center table-auto border-collapse border-spacing-0">
          <thead className="bg-gradient-to-r from-purple-700 via-black to-yellow-600">
            <tr>
              <th className="p-4 text-xl text-yellow-300 border-b border-yellow-500">#</th>
              <th className="p-4 text-xl text-yellow-300 border-b border-yellow-500">Player</th>
              <th className="p-4 text-xl text-yellow-300 border-b border-yellow-500">Games Played</th>
              <th className="p-4 text-xl text-yellow-300 border-b border-yellow-500">Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-gray-900 to-black"
                    : "bg-gradient-to-r from-black to-gray-900"
                } hover:scale-105 hover:shadow-lg`}
              >
                <td className="p-4 text-lg font-bold text-yellow-400">{index + 1}</td>
                <td className="p-4 flex items-center gap-4 justify-center">
                  <img
                    src={player.avatar}
                    alt={`${player.name}'s avatar`}
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                  />
                  <span className="text-white text-lg">{player.name}</span>
                </td>
                <td className="p-4 text-lg text-gray-300">{player.games}</td>
                <td className="p-4 text-lg font-bold text-yellow-400">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Leaderboard;


























// // src/components/Leaderboard.jsx
// import React from "react";
// import trophyImage from "../assets/r1.png"; // Replace with your trophy image path

// const Leaderboard = () => {
//   const winners = [
//     { name: "K.S.", date: "DEC-05", amount: "11450 ₹" },
//     { name: "S.A.", date: "DEC-05", amount: "10500 ₹" },
//     { name: "C.A.", date: "DEC-05", amount: "8974 ₹" },
//     { name: "R.D.", date: "DEC-05", amount: "6716 ₹" },
//     { name: "R.E.", date: "DEC-05", amount: "4132 ₹" },
//   ];

//   return (
//     <section className="bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 rounded-2xl shadow-2xl p-8 md:p-12">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Text & Table Section */}
//         <div className="flex-1">
//           <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-wide">
//             Today's Top Winners
//           </h2>
//           <table className="w-full text-white text-left border-collapse">
//             <thead>
//               <tr className="border-b border-white/60 text-yellow-300">
//                 <th className="py-3 px-5 text-lg">WINNER</th>
//                 <th className="py-3 px-5 text-lg">DATE</th>
//                 <th className="py-3 px-5 text-lg">AMOUNT</th>
//               </tr>
//             </thead>
//             <tbody>
//               {winners.map((winner, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-white/10" : "bg-transparent"
//                   } hover:bg-white/20 transition-all`}
//                 >
//                   <td className="py-3 px-5 text-yellow-100">{winner.name}</td>
//                   <td className="py-3 px-5 text-yellow-100">{winner.date}</td>
//                   <td className="py-3 px-5 text-yellow-100">{winner.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Trophy Image Section */}
//         <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-lg opacity-50 animate-spin-slow"></div>
//             <img
//               src={trophyImage}
//               alt="Trophy"
//               className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-[0_10px_20px_rgba(255,255,255,0.8)]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Leaderboard;
