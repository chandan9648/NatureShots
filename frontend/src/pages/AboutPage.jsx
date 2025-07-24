import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/products';
import mypic from "../assets/images/mypic.jpg";
const Component = motion.div;

const AboutPage = () => {
  const timelineEvents = [
    { year: 2020, event: 'Began passion for digital shot' },
    { year: 2023, event: 'Launched social media presence' },
    { year: 2023, event: 'First art shot in Gorakhpur' },
    { year: 2025, event: 'Founded Chandan NatureShot website launch' },
  ];

  return (
    <div className="container min-h-screen pt-32 pb-20 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">About Chandan Chaudhary</h1>
        <p className="mt-4 text-gray-400">The journey of Nature pictures</p>
      </motion.div>

      <section className="py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Updated placeholder image URL */}
            <img src={mypic} alt="Aarav Sharma" className="w-full rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold">The Artist's Story</h2>
            <p className="mt-4 text-lg text-gray-400">
             Chandan Chaudhary, a renowned nature photographer based in Uttar Pradesh India, captures the raw and untamed beauty of the natural world. His keen eye for detail and patient approach reveal the subtle wonders of wildlife and landscapes. Through his lens, Chaudhary invites us to a world of breathtaking colors and serene moments, reminding us of the profound connection between humanity and nature. His photographs are not merely images; they are powerful stories that inspire a deep appreciation and a sense of responsibility for our planet.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              Through chandan shots, he aims to make high-quality picture accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="mb-12 text-4xl font-bold text-center">Career Milestones</h2>
        <div className="relative border-l border-gray-600">
          {timelineEvents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 ml-6"
            >
              <div className="absolute w-4 h-4 -translate-x-1/2 bg-pink-600 rounded-full -left-2 top-2"></div>
              <p className="text-sm font-semibold text-pink-400">{item.year}</p>
              <h3 className="mt-1 text-xl font-bold">{item.event}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="mb-12 text-4xl font-bold text-center">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <p className="text-lg italic text-gray-400">"{item.quote}"</p>
              <p className="mt-4 font-semibold text-right text-pink-400">- {item.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
