import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-20">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
      <div className="bg-gray-800 text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <p className="mt-4 text-lg text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/">
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;