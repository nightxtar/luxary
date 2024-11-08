import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif mb-4">Join Our World of Luxury</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to receive exclusive offers, early access to new products, and beauty tips from our experts.
        </p>
        
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-gray-200 outline-none"
          />
          <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}