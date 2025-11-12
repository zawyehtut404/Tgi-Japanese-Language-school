import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const mainContentId = 'main-content';

  useEffect(() => {
    const mainContent = document.getElementById(mainContentId);

    const toggleVisibility = () => {
      if (mainContent.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    mainContent.addEventListener('scroll', toggleVisibility);

    return () => mainContent.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const mainContent = document.getElementById(mainContentId);
    mainContent.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-40"
          aria-label="Go to top"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTopButton;