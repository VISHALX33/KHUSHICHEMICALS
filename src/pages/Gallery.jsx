import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
           src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141335/10_lwhhy9.jpg" 

            alt="Gallery Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FontAwesomeIcon icon={faImages} className="text-6xl mb-4" />
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-green-100">
            Explore Our State-of-the-Art Facilities and Operations
          </p>
        </div>
      </section>

      {/* Gallery Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Take a visual tour of KHUSHI CHEMICALS - from our modern manufacturing facilities and quality control laboratories 
            to our extensive warehouses and delivery fleet. See how we maintain excellence in every aspect of our operations.
          </p>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 auto-rows-[200px]">
            {/* Large horizontal image - Hero */}
            <div className="col-span-4 md:col-span-8 lg:col-span-8 row-span-2 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141335/11_cwunbn.jpg" 
                alt="Chemical Manufacturing Facility" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Manufacturing Facility</h3>
                  <p className="text-sm">State-of-the-art chemical production units</p>
                </div>
              </div>
            </div>

            {/* Tall vertical image */}
            <div className="col-span-4 lg:col-span-4 row-span-2 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141335/10_lwhhy9.jpg" 
                alt="Quality Control Laboratory" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Quality Lab</h3>
                  <p className="text-sm">Advanced testing & analysis</p>
                </div>
              </div>
            </div>

            {/* Small square image */}
            <div className="col-span-2 md:col-span-4 lg:col-span-3 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141335/3_zzwrrk.jpg" 
                alt="Chemical Storage Tanks" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Storage Tanks</p>
              </div>
            </div>

            {/* Wide horizontal image */}
            <div className="col-span-2 md:col-span-4 lg:col-span-5 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141335/13_q5lmab.jpg" 
                alt="Industrial Equipment" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Industrial Equipment</p>
              </div>
            </div>

            {/* Medium square image */}
            <div className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141335/12_dxp0rv.jpg" 
                alt="Warehouse Facility" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Warehouse in Shahjahanpur</p>
              </div>
            </div>

            {/* Tall image */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 row-span-2 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141336/14_bwa4dt.jpg" 
                alt="Delivery Fleet" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Delivery Fleet</h3>
                  <p className="text-sm">Prompt & reliable transport</p>
                </div>
              </div>
            </div>

            {/* Wide image */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141336/6_noz4ia.jpg" 
                alt="Eco-Friendly Operations" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Eco-Friendly Practices</p>
              </div>
            </div>

            {/* Square image */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141336/4_qnn2y9.jpg" 
                alt="Customer Service Team" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Customer Support</p>
              </div>
            </div>

            {/* Large horizontal bottom image */}
            <div className="col-span-4 md:col-span-8 lg:col-span-6 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141336/2_ygg3bg.jpg" 
                alt="Office Locations" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">8+ Strategic Locations</p>
              </div>
            </div>

            {/* Final medium image */}
            <div className="col-span-4 md:col-span-4 lg:col-span-6 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141337/8_ecspeb.jpg" 
                alt="Modern Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Modern Infrastructure</p>
              </div>
            </div>

            {/* Additional images for more complete gallery */}
            <div className="col-span-2 md:col-span-4 lg:col-span-3 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141336/5_tdcwr3.jpg" 
                alt="Technology Integration" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Advanced Technology</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-5 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141336/7_z8saix.jpg" 
                alt="Safety Standards" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">ISO Certified Operations</p>
              </div>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1 overflow-hidden rounded-xl shadow-lg group relative">
              <img 
                src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1769141337/9_td3t3u.jpg" 
                alt="Production Line" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">Production Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Experience Excellence in Chemical Solutions</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit our facilities or connect with us to learn more about our operations and capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="bg-white text-green-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-green-600"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
