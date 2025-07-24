import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/Products/ProductCard';
const Component = motion.div;

const ProductsPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="container min-h-screen pt-25 pb-20 mx-auto">
      <h1 className="mb-10 text-5xl font-bold text-center">Our Offerings</h1>

      <div className="mb-12 text-center">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 mx-2 rounded-full transition-colors duration-300 ${filter === 'all' ? 'bg-pink-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('flys')} 
          className={`px-4 py-2 mx-2 rounded-full transition-colors duration-300 ${filter === 'flys' ? 'bg-pink-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          Flys
        </button>
        <button 
          onClick={() => setFilter('flowers')} 
          className={`px-4 py-2 mx-2 rounded-full transition-colors duration-300 ${filter === 'flowers' ? 'bg-pink-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          Flowers
        </button>
        <button 
          onClick={() => setFilter('cinematics')} 
          className={`px-4 py-2 mx-2 rounded-full transition-colors duration-300 ${filter === 'cinematics' ? 'bg-pink-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
         Cinematics
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProducts.map(product => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductsPage;