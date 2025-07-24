import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
const Component = motion.div;

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="flex items-center justify-center min-h-screen text-3xl">Product not found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container min-h-screen pt-15 pb-20 mx-auto"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full rounded-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div  className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          {/* <p  className="mt-4 text-2xl font-light text-green-900">₹{product.price}</p> */}
          <p  className="mt-6 text-lg text-gray-400">{product.description}</p>
          <div className="mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 text-xl font-semibold text-white transition-colors duration-300 bg-pink-600 rounded-full hover:bg-pink-700"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;