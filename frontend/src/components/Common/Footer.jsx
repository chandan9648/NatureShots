import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
      <p>&copy; 2025 Chandan Shots. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <Link to="https://www.instagram.com/naturevibes.156/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">Instagram</Link>
        <Link to="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-pin-400">Twitter</Link>
        <Link to="https://www.linkedin.com/in/chandan-310156273/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">LinkedIn</Link>
      </div>
    </footer>
  );
};

export default Footer;