import React from 'react';
import { motion } from 'framer-motion';
import { latestContent } from '../data/products';
import { Link } from "react-router-dom";

const Component = motion.div;
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-center h-screen"
      >
       

        <h1 className="text-6xl font-bold tracking-tight text-center md:text-8xl">
          Chandan's <span className="text-pink-400">NatureShots</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-xl font-light text-center max-w-2xl px-4"
        >
          Discover nature that speaks to the soul. Handshot digital clicks by Chandan Chaudhary.
        </motion.p>


        <div className="mt-8">
          <Link to="/products" className="px-6 py-3 font-semibold transition-transform duration-300 transform bg-pink-600 rounded-full hover:scale-105">
            Explore Picture
          </Link>
        </div>
      </motion.div>


{/* Latest content */}
      <section className="container py-20 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Latest Content</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {latestContent.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative block overflow-hidden rounded-lg group"
            >
              <img src={item.image} alt={item.title} className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-opacity-50 flex items-end p-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="container py-20 mx-auto">
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Stay Updated</h2>
          <p className="mt-4 text-gray-400">Join our newsletter to get the latest picture releases and  updates.</p>
          <div className="flex mt-6 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 text-white bg-gray-800 rounded-l-full outline-none focus:ring-2 focus:ring-pink-600"
            />
            <button className="px-6 py-3 font-semibold text-white transition-colors duration-300 bg-pink-600 rounded-r-full hover:bg-pink-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
