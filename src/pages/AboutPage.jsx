import React from 'react';
import { Helmet } from 'react-helmet-async';
import missionImage from '../assets/mission-image.jpg';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | TGi Japanese Language School</title>
        <meta name="description" content="Learn about the mission and values of TGi Japanese Language School. Your trusted partner in exploring the Japanese language and culture." />
      </Helmet>

      <div className="bg-white text-gray-800">
        {/* Page Header */}
        <section className="bg-gray-100 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About TGi Japanese Language School</h1>
            <p className="text-xl text-gray-600 mt-4">Your trusted partner in exploring the Japanese language and culture.</p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={missionImage} 
                    alt="Myanmar landscape" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our mission is to provide authentic, high-quality, and unforgettable travel experiences throughout Myanmar. We are committed to showcasing the rich culture, history, and natural beauty of our country while ensuring the utmost comfort and satisfaction for our clients.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe in responsible tourism that benefits local communities and preserves the environment for future generations. Our expert team works tirelessly to craft unique itineraries that go beyond the usual tourist spots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Expert Sensei</h3>
                <p className="text-gray-600">Our Sensei are passionate, knowledgeable locals who bring the stories of Japan to life.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Customized Itineraries</h3>
                <p className="text-gray-600">We tailor every trip to your interests, budget, and travel style for a truly personal journey.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Excellent Value & Service</h3>
                <p className="text-gray-600">We provide top-notch service and unforgettable experiences at a fair and competitive price.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default AboutPage;