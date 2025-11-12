import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { tourPackages } from '../data/tours';
import NotFoundPage from './NotFoundPage';
import Loading from '../components/Loading';

function TourDetailPage() {
  const { slug } = useParams();
  const { i18n, ready } = useTranslation();
  const lang = i18n.language;
  const tour = tourPackages.find((p) => p.slug === slug);

  const relatedTours = tour ? tourPackages.filter(p => p.slug !== slug).slice(0, 3) : [];
  
  if (!ready) {
    return <div className="w-full h-screen flex justify-center items-center"><Loading /></div>;
  }

  if (!tour) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{tour.name[lang] || tour.name.en} | TGi Japanese Language School</title>
        <meta name="description" content={tour.description[lang] || tour.description.en} />
      </Helmet>

      <div className="bg-white">
        <div className="container mx-auto px-6 pt-12">
          <img src={tour.image} alt={tour.name[lang] || tour.name.en} className="w-full max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{tour.name[lang] || tour.name.en}</h1>
            <div className="flex flex-wrap items-center space-x-4 text-gray-600 mb-6">
              <span className="font-semibold">Duration: {tour.duration[lang] || tour.duration.en}</span>
              <span className="text-gray-300">|</span>
              <span className="font-semibold">Price: {tour.price}</span>
            </div>
            <div className="prose max-w-none text-gray-700 leading-relaxed mb-12">
              <p>{tour.longDescription[lang] || tour.longDescription.en}</p>
            </div>
            
            <div className="mt-12 text-center md:text-left">
              <Link to="/contact" state={{ subject: `Booking Inquiry: ${tour.name.en}` }} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
                Book This Class
              </Link>
            </div>
          </div>
        </div>
        
        {relatedTours.length > 0 && (
          <section className="py-20 bg-gray-50 mt-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedTours.map((relatedTour) => (
                        <motion.div key={relatedTour.id} className="bg-white rounded-lg shadow-lg overflow-hidden" whileHover={{ y: -10, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                            <img src={relatedTour.image} alt={relatedTour.name[lang] || relatedTour.name.en} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{relatedTour.name[lang] || relatedTour.name.en}</h3>
                                <p className="text-gray-700 mb-4 flex-grow">{relatedTour.description[lang] || relatedTour.description.en}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-bold text-blue-600">{relatedTour.price}</span>
                                    <Link to={`/services/${relatedTour.slug}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Details</Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default TourDetailPage;