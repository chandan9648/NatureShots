import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Component = motion.div;

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="p-4 overflow-hidden transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg cursor-pointer"
    >
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="object-cover w-full h-70 transition-transform duration-500 rounded-lg" />
        <div className="mt-4 text-white">
          <h3 className="text-xl font-semibold">{product.name}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;