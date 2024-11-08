import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80"
          alt="Luxury perfume"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Discover Your<br />Signature Scent
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Explore our curated collection of luxury fragrances and beauty essentials
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}