import React from 'react';

const products = [
  {
    id: 1,
    name: 'Midnight Rose',
    category: 'Eau de Parfum',
    price: 289,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Golden Elixir',
    category: 'Face Serum',
    price: 189,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Ocean Mist',
    category: 'Eau de Toilette',
    price: 245,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">Featured Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Add to Cart
                </button>
              </div>
              
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}