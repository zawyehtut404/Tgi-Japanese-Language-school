import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Lightbox({ selectedImg, setSelectedImg }) {
  if (!selectedImg) return null;

  // Closes the lightbox when the backdrop is clicked
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={selectedImg.src}
        alt={selectedImg.alt}
        className="max-w-[90%] max-h-[80%] object-contain shadow-2xl rounded-lg"
        initial={{ y: "-50px", scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />
    </motion.div>
  );
}

export default Lightbox;