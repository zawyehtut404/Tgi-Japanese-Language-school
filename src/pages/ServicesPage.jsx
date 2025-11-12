<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tourPackages } from '../data/tours';
import Loading from '../components/Loading';

function ServicesPage() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;

  // Since we are using local data now, we don't need to fetch
  // but we still need to wait for i18n to be ready
  if (!ready) {
    return <div className="w-full h-screen flex justify-center items-center"><Loading /></div>;
  }

  return (
    <>
      <Helmet>
        <title>Our Services | Royal Myanmar Travels</title>
        <meta name="description" content="Explore all our tour packages, from cultural tours in Bagan and Inle Lake to relaxing beach getaways in Ngapali." />
      </Helmet>
      
      <div className="bg-white">
        <section className="bg-gray-100 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Classes Packages</h1>
            <p className="text-xl text-gray-600 mt-4">Find the perfect journey for your overseas adventure.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourPackages.map((tour) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={tour.image} alt={tour.name[lang] || tour.name.en} className="w-full h-56 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-1">{tour.duration[lang] || tour.duration.en}</p>
                    <h3 className="text-xl font-semibold mb-2">{tour.name[lang] || tour.name.en}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{tour.description[lang] || tour.description.en}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                      <Link
                        to={`/services/${tour.slug}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

=======
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tourPackages } from '../data/tours';
import Loading from '../components/Loading';

function ServicesPage() {
  const { t, i18n, ready } = useTranslation();
  const lang = i18n.language;

  // Since we are using local data now, we don't need to fetch
  // but we still need to wait for i18n to be ready
  if (!ready) {
    return <div className="w-full h-screen flex justify-center items-center"><Loading /></div>;
  }

  return (
    <>
      <Helmet>
        <title>Our Services | Royal Myanmar Travels</title>
        <meta name="description" content="Explore all our tour packages, from cultural tours in Bagan and Inle Lake to relaxing beach getaways in Ngapali." />
      </Helmet>
      
      <div className="bg-white">
        <section className="bg-gray-100 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Tour Packages</h1>
            <p className="text-xl text-gray-600 mt-4">Find the perfect journey for your Myanmar adventure.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourPackages.map((tour) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={tour.image} alt={tour.name[lang] || tour.name.en} className="w-full h-56 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-1">{tour.duration[lang] || tour.duration.en}</p>
                    <h3 className="text-xl font-semibold mb-2">{tour.name[lang] || tour.name.en}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{tour.description[lang] || tour.description.en}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                      <Link
                        to={`/services/${tour.slug}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

>>>>>>> c17307b46737cf29427a86791f87850f5f51a493
export default ServicesPage;