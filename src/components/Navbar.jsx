import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

function Navbar({ openMenu }) {
  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center">
      <nav className="w-full max-w-6xl mx-4 bg-white/60 backdrop-blur-lg rounded-full shadow-lg border border-white/20">
        <div className="flex justify-between items-center px-6 py-2">
          {/* Circular Logo */}
          <Link to="/">
            <motion.img 
              src={logoImg} 
              alt="Royal Myanmar Travels Logo" 
              className="h-10 w-10 rounded-full object-cover filter drop-shadow-md transition-all duration-300 hover:drop-shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          
          {/* Modern Menu Button */}
          <div className="ml-8">
            <motion.button 
              onClick={openMenu} 
              className="text-gray-800 focus:outline-none w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="block w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-blue-600"></span>
              <span className="block w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:w-2/3"></span>
              <span className="block w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-blue-600"></span>
            </motion.button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;