import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Component = motion.div;


const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dummy login successful!');
    // Dummy logic, e.g., redirect
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-2xl"
      >
        <h1 className="mb-6 text-3xl font-bold text-center">Login to your account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input 
              type="email" 
              className="w-full p-3 text-white bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-pink-600" 
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input 
              type="password" 
              className="w-full p-3 text-white bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-pink-600" 
              placeholder="••••••••"
              required
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full py-3 font-bold text-white transition-colors duration-300 bg-pink-600 rounded-lg hover:bg-pink-700"
          >
            Login
          </motion.button>
      
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="font-medium text-pink-400 hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;