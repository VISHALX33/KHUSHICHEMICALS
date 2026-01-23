import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Products = () => {
  const products = [
    'Nitric Acid',
    'Caustic Soda Flakes',
    'Caustic Soda Lye',
    'Formic Acid',
    'Acetic Acid Glacial/Textile G',
    'Phosphoric Acid',
    'Ammonia Liqure',
    'Polly Aluminium Chloride',
    'Ferric Chloride powder and Liqure',
    'Common Salt',
    'Global Salt',
    'Hydrated Lime',
    'Sodium Meta Bi Sulphate',
    'Sodium Hypo Chloride',
    'Bleaching Powder',
    'Tri Sodium Phosphate',
    'Soda Ash Dense/Light/Bi Carbonate',
    'Hydrochloric Acid',
    'Nitric Acid (LR)',
    'Glucose',
    'Polly Electrollite',
    'Ferrious Sulphate',
    'Caustic Soda Prills',
    'Caustic Potash Flakes',
    'Methyle Chloride',
    'Methylene Chloride',
    'Carbon Tetrachloride',
    'Hydrogen Per Oxide',
    'Bleaching powder',
    'Calcium Chloride Flakes',
    'Calcium Chloride Powder',
    'Dilute Sulphuric Acid',
    'Aluminium Chloride Anhydrous',
    'Stable Bleaching Powder',
    'Maize/Paper Starch',
    'Acid Sulry',
    'Ammonia Bi Cab & Citric Acid',
    'Sodium Nitrate & Nitri',
    'Malt Extract & lecithin',
    'Coco powder & SMP',
    'Chlorinated paraffin',
    'Sulphuric Acid',
    'Methanol'
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${
                  index % 6 === 0 ? 'from-green-50 to-green-100' :
                  index % 6 === 1 ? 'from-blue-50 to-blue-100' :
                  index % 6 === 2 ? 'from-teal-50 to-teal-100' :
                  index % 6 === 3 ? 'from-cyan-50 to-cyan-100' :
                  index % 6 === 4 ? 'from-emerald-50 to-emerald-100' :
                  'from-indigo-50 to-indigo-100'
                } rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-l-4 ${
                  index % 6 === 0 ? 'border-green-500' :
                  index % 6 === 1 ? 'border-blue-500' :
                  index % 6 === 2 ? 'border-teal-500' :
                  index % 6 === 3 ? 'border-cyan-500' :
                  index % 6 === 4 ? 'border-emerald-500' :
                  'border-indigo-500'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${
                    index % 6 === 0 ? 'from-green-500 to-green-600' :
                    index % 6 === 1 ? 'from-blue-500 to-blue-600' :
                    index % 6 === 2 ? 'from-teal-500 to-teal-600' :
                    index % 6 === 3 ? 'from-cyan-500 to-cyan-600' :
                    index % 6 === 4 ? 'from-emerald-500 to-emerald-600' :
                    'from-indigo-500 to-indigo-600'
                  } flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                      {product}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm">
                        <FontAwesomeIcon icon={faFlask} className="mr-1 text-green-600" />
                        Tanker
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm">
                        <FontAwesomeIcon icon={faFlask} className="mr-1 text-blue-600" />
                        Drum
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm">
                        <FontAwesomeIcon icon={faFlask} className="mr-1 text-teal-600" />
                        Bags
                      </span>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FontAwesomeIcon icon={faFlask} className="text-4xl text-gray-800" />
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
