import React from 'react';
import Navbar from './Navbar';

export const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="bg-green-500 text-white text-center py-16 px-4 relative"
        style={{
          backgroundImage: "url('/speedymart_hero_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeInDown">
          Groceries Delivered in Minutes!
        </h1>
        <p className="mt-4 text-lg animate-fadeIn">
          Order fresh groceries, snacks, and daily essentials at your doorstep.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-3xl mx-auto flex shadow-lg animate-fadeInUp">
          <input
            type="text"
            placeholder="Search for products, brands, and categories"
            className="w-full p-4 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-white text-green-500 px-6 py-4 rounded-r-md font-medium hover:bg-gray-200 transition-transform transform hover:scale-105">
            Search
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-4">
        <h2 className="text-2xl font-bold mb-10 text-center">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['Fruits & Vegetables', 'Dairy', 'Snacks', 'Beverages', 'Household', 'Bakery'].map(
            (category) => (
              <div
                key={category}
                className="bg-white shadow rounded-lg overflow-hidden text-center transform hover:scale-105 transition-transform"
              >
                <img
                  src={`/categories/${category
                    .toLowerCase()
                    .replace(/ & /g, '-')
                    .replace(/ /g, '-')}.png`}
                  alt={category}
                  className="w-full h-32 object-cover"
                />
                <p className="p-2 font-medium text-gray-700">{category}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Offers Section */}
      <div className="bg-green-100 py-16 px-4">
        <h2 className="text-2xl font-bold mb-10 text-center">Today's Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((offer) => (
            <div
              key={offer}
              className="bg-white shadow rounded-lg overflow-hidden flex items-center hover:shadow-lg transition-shadow"
            >
              <img
                src={`/offers/offer-${offer}.png`}
                alt={`Offer ${offer}`}
                className="w-1/3 h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Special Offer {offer}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Get up to 30% off on your favorite products.
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transform hover:scale-105 transition-transform">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 SpeedyMart. All rights reserved.</p>
      </footer>
    </div>
  );
};
