import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const Component = motion.div;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-white text-black">
      <nav className="container flex items-center justify-between mx-auto">
        {/* Brand/Logo */}
        <Link to="/" className="text-2xl font-bold">
          Chandan's <span className="text-pink-400">NatureShots</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <Link to="/" className="hover:text-pink-400">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-pink-400">Products</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-400">About</Link>
          </li>
          <li>
            <Link to="/login" className="px-4 py-2 font-semibold text-white transition-colors duration-300 bg-pink-600 rounded-full hover:bg-pink-700">Login</Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button 
          onClick={toggleMenu} 
          className="z-50 text-black md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 flex flex-col items-center justify-center h-screen bg-white bg-opacity-95 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 text-2xl font-bold">
              <li>
                <Link to="/" onClick={toggleMenu} className="hover:text-pink-400">Home</Link>
              </li>
              <li>
                <Link to="/products" onClick={toggleMenu} className="hover:text-pink-400">Products</Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu} className="hover:text-pink-400">About</Link>
              </li>
              <li>
                <Link to="/login" onClick={toggleMenu} className="px-6 py-3 font-semibold text-white transition-colors duration-300 bg-pink-600 rounded-full hover:bg-pink-700">Login</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;