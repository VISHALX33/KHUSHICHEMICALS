import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Products = () => {
  const products = [
    { name: 'Nitric Acid', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop' },
    { name: 'Caustic Soda Flakes', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Caustic Soda Lye', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Formic Acid', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&h=300&fit=crop' },
    { name: 'Acetic Acid Glacial/Textile G', image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop' },
    { name: 'Phosphoric Acid', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop' },
    { name: 'Ammonia Liqure', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Polly Aluminium Chloride', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Ferric Chloride powder and Liqure', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop' },
    { name: 'Common Salt', image: 'https://images.unsplash.com/photo-1606170033648-5d55a3eac2c8?w=400&h=300&fit=crop' },
    { name: 'Global Salt', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop' },
    { name: 'Hydrated Lime', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Sodium Meta Bi Sulphate', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop' },
    { name: 'Sodium Hypo Chloride', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Bleaching Powder', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Tri Sodium Phosphate', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop' },
    { name: 'Soda Ash Dense/Light/Bi Carbonate', image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop' },
    { name: 'Hydrochloric Acid', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&h=300&fit=crop' },
    { name: 'Nitric Acid (LR)', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Glucose', image: 'https://images.unsplash.com/photo-1606170033648-5d55a3eac2c8?w=400&h=300&fit=crop' },
    { name: 'Polly Electrollite', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop' },
    { name: 'Ferrious Sulphate', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Caustic Soda Prills', image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop' },
    { name: 'Caustic Potash Flakes', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop' },
    { name: 'Methyle Chloride', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&h=300&fit=crop' },
    { name: 'Methylene Chloride', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Carbon Tetrachloride', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop' },
    { name: 'Hydrogen Per Oxide', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Bleaching powder', image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop' },
    { name: 'Calcium Chloride Flakes', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop' },
    { name: 'Calcium Chloride Powder', image: 'https://images.unsplash.com/photo-1606170033648-5d55a3eac2c8?w=400&h=300&fit=crop' },
    { name: 'Dilute Sulphuric Acid', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&h=300&fit=crop' },
    { name: 'Aluminium Chloride Anhydrous', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Stable Bleaching Powder', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop' },
    { name: 'Maize/Paper Starch', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' },
    { name: 'Acid Sulry', image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop' },
    { name: 'Ammonia Bi Cab & Citric Acid', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop' },
    { name: 'Sodium Nitrate & Nitri', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&h=300&fit=crop' },
    { name: 'Malt Extract & lecithin', image: 'https://images.unsplash.com/photo-1606170033648-5d55a3eac2c8?w=400&h=300&fit=crop' },
    { name: 'Coco powder & SMP', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop' },
    { name: 'Chlorinated paraffin', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop' },
    { name: 'Sulphuric Acid', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop' },
    { name: 'Methanol', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon icon={faFlask} className="text-6xl mb-4" />
          <h1 className="text-5xl font-bold mb-4">Our Product Range</h1>
          <p className="text-xl text-green-100">
            High-Quality Chemicals for Various Industries
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">43+ Premium Chemical Products</h2>
            <p className="text-lg text-gray-700">
              We offer a comprehensive range of chemical products available in various packaging options 
              including Tanker, Drum, and Bags for prompt delivery at competitive prices.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-green-300 focus:border-green-500 focus:outline-none text-lg"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 text-xl"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300/059669/ffffff?text=Chemical+Product';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  </div>
                  <div className="text-sm text-gray-600">
                    Available in Tanker, Drum & Bags
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Packaging Options</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🚛</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Tanker</h3>
              <p className="text-gray-700">
                Bulk quantities delivered via tankers for large-scale industrial requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🛢️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Drums</h3>
              <p className="text-gray-700">
                Standard drum packaging for medium-sized orders with secure handling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Bags</h3>
              <p className="text-gray-700">
                Convenient bag packaging for smaller quantities and easy storage.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              <strong>Special Note:</strong> Materials required in loose quantity can also be delivered. 
              We maintain flexible inventory management to meet your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Need a Specific Chemical Product?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements. We provide customized solutions and competitive pricing.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition shadow-lg inline-block"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
