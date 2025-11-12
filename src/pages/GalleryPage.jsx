import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from '../components/Lightbox';

// Import all gallery images
import baganImg from '../assets/Gallery_1.jpg';
import inleLakeImg from '../assets/Gallery_9.jpg';
import mandalayImg from '../assets/Gallery_10.jpg';
import goldenRockImg from '../assets/Gallery_4.jpg';
import ngapaliImg from '../assets/Gallery_5.jpg';
import kalawImg from '../assets/Gallery_6.jpg';
import ubeinBridgeImg from '../assets/Gallery_7.jpg';
import shwedagonImg from '../assets/Gallery_8.jpg';

const images = [
  { id: 1, src: baganImg, alt: 'Temples of Bagan' },
  { id: 2, src: inleLakeImg, alt: 'Inle Lake Fishermen' },
  { id: 3, src: mandalayImg, alt: 'Mandalay Palace' },
  { id: 4, src: goldenRockImg, alt: 'Golden Rock Pagoda' },
  { id: 5, src: ngapaliImg, alt: 'Ngapali Beach' },
  { id: 6, src: kalawImg, alt: 'Trekking in Kalaw' },
  { id: 7, src: ubeinBridgeImg, alt: 'U Bein Bridge Sunset' },
  { id: 8, src: shwedagonImg, alt: 'Shwedagon Pagoda' },
];

function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Helmet>
        <title>Gallery | TGi Japanese Language School</title>
        <meta name="description" content="A glimpse into the beauty of Myanmar. View photos from our tours of Bagan, Inle Lake, Mandalay, and more." />
      </Helmet>
      
      <div className="bg-white">
        {/* Page Header */}
        <section className="bg-gray-100 py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Gallery</h1>
            <p className="text-xl text-gray-600 mt-4">A glimpse into the beauty of Myanmar.</p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map(image => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedImg(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Lightbox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      </div>
    </>
  );
}

export default GalleryPage;