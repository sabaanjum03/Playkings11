
// import React from "react";
// import logo from "../assets/logo2.png"; // Adjust the path to your logo

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 bg-gradient-to-r from-purple-900 to-black py-4 px-8 flex justify-between items-center shadow-lg z-50">
//       <div className="flex items-center space-x-4">
//         <img src={logo} alt="PlayKings11 Logo" className="h-16 w-auto" /> {/* Adjust size as needed */}
      
//       </div>
//       <ul className="flex space-x-6 text-lg text-white">
//         <li className="hover:text-pink-500 transition">Home</li>
//         <li className="hover:text-pink-500 transition">Games</li>
//         <li className="hover:text-pink-500 transition">Promotions</li>
//         <li className="hover:text-pink-500 transition">Contact</li>
//       </ul>
//       <button className="bg-pink-500 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition">
//         Login
//       </button>
//     </nav>
//   );
// };

// export default Navbar;























import React from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon
import { FaMoneyBillWave, FaGift, FaSearch, FaTrophy, FaEllipsisH } from "react-icons/fa"; // Navigation icons
import logo from "../assets/logo2.png"; // Replace with your actual logo path

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-black to-gray-900 text-white py-5 px-6 md:px-14">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Menu */}
        <div className="flex items-center space-x-4">
          <FiMenu className="text-3xl cursor-pointer" />
          <img src={logo} alt="NetBet Logo" className="h-10" /> {/* Logo */}
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition" onClick={() => console.log("Cashier clicked")}>
            <FaMoneyBillWave className="text-xl" />
            <span>Cashier</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition" onClick={() => console.log("Promotions clicked")}>
            <FaGift className="text-xl" />
            <span>Promotions</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition" onClick={() => console.log("Search clicked")}>
            <FaSearch className="text-xl" />
            <span>Search</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition" onClick={() => console.log("Players Club clicked")}>
            <FaTrophy className="text-xl" />
            <span>Players Club</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition" onClick={() => console.log("More clicked")}>
            <FaEllipsisH className="text-xl" />
            <span>More</span>
          </div>
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-6">
          <button
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white text-lg font-semibold transition duration-300"
            onClick={() => console.log("Register clicked")}
          >
            Register
          </button>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-lg font-semibold transition duration-300"
            onClick={() => console.log("Log in clicked")}
          >
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
