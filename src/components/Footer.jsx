



import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo2.png'; // Corrected logo import

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-400 px-6 py-12 md:px-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Logo & Call to Action */}
        <div className="space-y-6">
          <img
            src={logo}
            alt="Casino Logo"
            className="h-24 w-32 md:h-24 md:w-56 mx-auto md:mx-0 transform transition-transform duration-500 hover:scale-110"
          />
          <p className="text-lg text-gray-300">
            Your ultimate destination for thrilling casino games and betting!
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-red-600 text-black text-lg px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            Join Now
          </button>
          <a
            href="#!"
            className="block mt-4 text-xl text-gray-400 hover:text-yellow-400 transition-colors duration-300 underline"
          >
            View Promotions
          </a>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="font-bold text-2xl text-gray-300">Contact Us</h4>
          <p className="hover:text-yellow-400 transition-colors duration-300 text-lg">
            support@casinobetting.com
          </p>
          <p className="hover:text-yellow-400 transition-colors duration-300 text-lg">
            Tel: +1-800-CASINO
          </p>
          <p className="hover:text-yellow-400 transition-colors duration-300 text-lg">
            777 Lucky Street,<br />
            Las Vegas, NV 89109
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-2xl text-gray-300">Quick Links</h4>
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Games
          </a>
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Betting Guide
          </a>
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Promotions
          </a>
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            Responsible Gaming
          </a>
        </div>

        {/* Social Media Links with Icons */}
        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-gray-300">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#!"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#!"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#!"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#!"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Casino Betting. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Terms of Use
          </a>
          <a
            href="#!"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
