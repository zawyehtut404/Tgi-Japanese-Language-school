
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaPlaneDeparture, FaSmileBeam, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { tourPackages } from '../data/tours';
import Counter from '../components/Counter';
import Loading from '../components/Loading';
import heroBg from '../assets/tgi_home.jpg';

// *** ဤနေရာမှ const testimonials = [...] array ကို လုံးဝ ဖယ်ရှားလိုက်ပါပြီ ***

function HomePage() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;
  const featuredTours = tourPackages.slice(0, 3);
  
  // *** i18n localization ဖိုင်ထဲမှ testimonials data ကို ခေါ်ယူအသုံးပြုခြင်း ***
  // { returnObjects: true } ကို သုံးခြင်းဖြင့် JSON array အဖြစ် တိုက်ရိုက်ရရှိမည်။
  const testimonials = t('home.testimonials', { returnObjects: true }) || [];
  
  const [currentIndex, setCurrentIndex] = useState(0); 
  const SCROLL_INTERVAL = 5000;
  const DRAG_THRESHOLD = 50; 

  const goToNext = () => {
    if (testimonials.length === 0) return; // Data မရှိရင် မလုပ်ဆောင်ရန်
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const goToPrev = () => {
    if (testimonials.length === 0) return; // Data မရှိရင် မလုပ်ဆောင်ရန်
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (testimonials.length === 0) return; // Data မရှိရင် Interval မစရန်
    const intervalId = setInterval(goToNext, SCROLL_INTERVAL);
    return () => clearInterval(intervalId);
  }, [SCROLL_INTERVAL, testimonials.length]); 
  
  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x; 

    if (dragDistance > DRAG_THRESHOLD) {
      goToPrev();
    } else if (dragDistance < -DRAG_THRESHOLD) {
      goToNext();
    }
  };

  // Data loading ကိုလည်း စစ်ဆေးရန် ထည့်သွင်းထားသည်
  if (!ready || testimonials.length === 0) {
    return <div className="w-full h-screen flex justify-center items-center"><Loading /></div>;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <Helmet>
        <title>{t('home.welcome')}</title>
        <meta name="description" content={t('home.tagline')} />
      </Helmet>
      <div className="bg-white text-gray-800">
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 whitespace-pre-line ${lang === 'my' ? 'font-padauk' : ''}`}>
              {t('home.welcome')}
            </h1>
            <p className="text-lg md:text-xl mb-8">{t('home.tagline')}</p>
            <a href="#tours" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              {t('home.explore_button')}
            </a>
          </div>
        </div>

        <section id="tours" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2">{t('home.featured_tours_title')}</h2>
            <p className="text-center text-gray-600 mb-12">{t('home.featured_tours_subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour, index) => (
                <motion.div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
                  <img src={tour.image} alt={tour.name[lang]} className="w-full h-56 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{tour.name[lang] || tour.name.en}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{tour.description[lang] || tour.description.en}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                      <Link to={`/services/${tour.slug}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <FaPlaneDeparture size={48} className="mb-4" />
                <p className="text-5xl font-bold"><Counter to={1500} />+</p>
                <p className="text-xl mt-2">{t('home.stats_packages')}</p>
              </div>
              <div className="flex flex-col items-center">
                <FaMapMarkedAlt size={48} className="mb-4" />
                <p className="text-5xl font-bold"><Counter to={90} />+</p>
                <p className="text-xl mt-2">{t('home.stats_destinations')}</p>
              </div>
              <div className="flex flex-col items-center">
                <FaSmileBeam size={48} className="mb-4" />
                <p className="text-5xl font-bold"><Counter to={1500} />+</p>
                <p className="text-xl mt-2">{t('home.stats_clients')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials Section: IMPROVED STYLING --- */}
        <section className="py-20 bg-white relative"> 
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.testimonials_title')}</h2>
            
            <div className="relative flex justify-center items-center h-96"> 
              
              {/* Previous Button */}
              <button 
                onClick={goToPrev}
                className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors hidden md:block" 
                aria-label="Previous testimonial"
              >
                <FaArrowLeft size={20} className="text-blue-600" />
              </button>

              {/* Testimonial Card - Now Swipeable with updated styling */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial.id}
                  // *** UPDATED CLASSNAMES FOR STYLING ***
                  className="bg-blue-50 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto flex-shrink-0 absolute cursor-grab"
                  
                  drag="x" 
                  dragConstraints={{ left: 0, right: 0 }} 
                  onDragEnd={handleDragEnd} 

                  initial={{ opacity: 0, x: 100 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* *** UPDATED TEXT COLORS *** */}
                  {/* i18n ကနေ ခေါ်ယူထားသော data ကို အသုံးပြုခြင်း */}
                  <p className="text-blue-800 italic mb-6 text-lg text-center">"{currentTestimonial.quote}"</p>
                  <div className="text-center mt-8">
                    <p className="font-bold text-blue-900 text-xl">{currentTestimonial.name}</p>
                    <p className="text-sm text-blue-600">{currentTestimonial.origin}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Next Button */}
              <button 
                onClick={goToNext}
                className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors hidden md:block" 
                aria-label="Next testimonial"
              >
                <FaArrowRight size={20} className="text-blue-600" />
              </button>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-blue-200 hover:bg-blue-300' // Dots colors updated
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </section>
        {/* --- End Testimonials Section --- */}
        
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('home.cta_title')}</h2>
            <p className="text-lg text-blue-100 mb-8">{t('home.cta_subtitle')}</p>
            <Link to="/contact">
              <motion.button className="bg-white text-blue-600 font-bold py-3 px-10 rounded-full shadow-lg" whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                {t('home.cta_button')}
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
export default HomePage;