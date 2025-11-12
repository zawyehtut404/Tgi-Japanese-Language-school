<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHome, FaUserFriends, FaCog, FaImages, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

const navContainerVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const navLinkVariants = {
  open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

function Sidebar({ isOpen, closeMenu }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-60 z-50"
          ></motion.div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/80 backdrop-blur-lg border-l border-white/10 shadow-lg z-50"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-10">
                <img 
                  src={logoImg} 
                  alt="Logo" 
                  className="h-10 w-10 rounded-full object-cover" 
                />
                <motion.button 
                  onClick={closeMenu} 
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>
              
              <motion.nav 
                className="flex flex-col space-y-2 flex-grow"
                variants={navContainerVariants}
                initial="closed"
                animate="open"
              >
                <LinkItem to="/" icon={<FaHome />} text={t('navbar.home')} closeMenu={closeMenu} />
                <LinkItem to="/services" icon={<FaCog />} text={t('navbar.services')} closeMenu={closeMenu} />
                <LinkItem to="/gallery" icon={<FaImages />} text={t('navbar.gallery')} closeMenu={closeMenu} />
                <LinkItem to="/contact" icon={<FaEnvelope />} text={t('navbar.contact')} closeMenu={closeMenu} />
                <LinkItem to="/about" icon={<FaUserFriends />} text={t('navbar.about')} closeMenu={closeMenu} />
              </motion.nav>

              {/* Language Switcher with the fix */}
              <div className="mt-6 border-t border-gray-700 pt-4">
                 <p className="text-sm font-semibold text-gray-500 mb-2">{t('language')}</p>
                 <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => changeLanguage('en')} 
                      className={`px-3 py-1.5 text-sm rounded-md w-full transition-colors ${i18n.language.startsWith('en') ? 'font-bold bg-blue-500 text-white' : 'font-medium bg-gray-700 hover:bg-gray-600'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => changeLanguage('my')} 
                      className={`px-3 py-1.5 text-sm rounded-md w-full transition-colors ${i18n.language.startsWith('my') ? 'font-bold bg-blue-500 text-white' : 'font-medium bg-gray-700 hover:bg-gray-600'}`}
                    >
                      မြန်မာ
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const LinkItem = ({ to, icon, text, closeMenu }) => (
  <motion.div 
    variants={navLinkVariants}
    whileHover="hover"
  >
    <Link to={to} className="flex items-center space-x-4 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md py-3 px-4 transition-colors duration-200" onClick={closeMenu}>
      <motion.span className="text-blue-400" variants={iconVariants}>
        {icon}
      </motion.span>
      <span>{text}</span>
    </Link>
  </motion.div>
);

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHome, FaUserFriends, FaCog, FaImages, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

const navContainerVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const navLinkVariants = {
  open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

function Sidebar({ isOpen, closeMenu }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-60 z-50"
          ></motion.div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900/80 backdrop-blur-lg border-l border-white/10 shadow-lg z-50"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-10">
                <img 
                  src={logoImg} 
                  alt="Logo" 
                  className="h-10 w-10 rounded-full object-cover" 
                />
                <motion.button 
                  onClick={closeMenu} 
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>
              
              <motion.nav 
                className="flex flex-col space-y-2 flex-grow"
                variants={navContainerVariants}
                initial="closed"
                animate="open"
              >
                <LinkItem to="/" icon={<FaHome />} text={t('navbar.home')} closeMenu={closeMenu} />
                <LinkItem to="/about" icon={<FaUserFriends />} text={t('navbar.about')} closeMenu={closeMenu} />
                <LinkItem to="/services" icon={<FaCog />} text={t('navbar.services')} closeMenu={closeMenu} />
                <LinkItem to="/gallery" icon={<FaImages />} text={t('navbar.gallery')} closeMenu={closeMenu} />
                <LinkItem to="/contact" icon={<FaEnvelope />} text={t('navbar.contact')} closeMenu={closeMenu} />
              </motion.nav>

              {/* Language Switcher with the fix */}
              <div className="mt-6 border-t border-gray-700 pt-4">
                 <p className="text-sm font-semibold text-gray-500 mb-2">{t('language')}</p>
                 <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => changeLanguage('en')} 
                      className={`px-3 py-1.5 text-sm rounded-md w-full transition-colors ${i18n.language.startsWith('en') ? 'font-bold bg-blue-500 text-white' : 'font-medium bg-gray-700 hover:bg-gray-600'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => changeLanguage('my')} 
                      className={`px-3 py-1.5 text-sm rounded-md w-full transition-colors ${i18n.language.startsWith('my') ? 'font-bold bg-blue-500 text-white' : 'font-medium bg-gray-700 hover:bg-gray-600'}`}
                    >
                      မြန်မာ
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const LinkItem = ({ to, icon, text, closeMenu }) => (
  <motion.div 
    variants={navLinkVariants}
    whileHover="hover"
  >
    <Link to={to} className="flex items-center space-x-4 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md py-3 px-4 transition-colors duration-200" onClick={closeMenu}>
      <motion.span className="text-blue-400" variants={iconVariants}>
        {icon}
      </motion.span>
      <span>{text}</span>
    </Link>
  </motion.div>
);

>>>>>>> c17307b46737cf29427a86791f87850f5f51a493
export default Sidebar;