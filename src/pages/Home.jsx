import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faLeaf, faUsers, faAward, faHandshake, faShieldAlt, faTruck, faHeadset, faCertificate, faIndustry, faPills, faNewspaper, faTint, faWineBottle, faShirt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/textile-chemical-factory.mp4';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/85 to-blue-600/85"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Welcome to KHUSHI CHEMICALS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 drop-shadow-md">
              Your Trusted Partner in Quality Chemical Solutions
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto drop-shadow-md">
              With an annual turnover of ₹5.00 Crore, we specialize in delivering premium quality chemicals 
              to various industries across Neemrana, Ghiloth, Shahjahanpur, Keshwana, Bawal, Manesar, Gurugram, and Bhiwadi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Company</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                KHUSHI Chemicals has been a trusted name in the chemical industry. We continue our commitment 
                to innovative and sustainable solutions.
              </p>
              <p>
                We have been serving and delivering quality to our clients, and today we stand as an entity 
                with an annual turnover of ₹5.00 Crore INR. We have been rendering the best of our services 
                by supplying basic raw materials. We are primarily stationed at Neemrana, Ghiloth, Shahjahanpur, 
                Keshwana, Bawal, Manesar, Gurugram, and Bhiwadi for materials to various industries.
              </p>
              <p>
                We specialize in catering to Paper industries, Detergent, Dairies, Textiles, Sugar Pharmaceutical 
                units, Plating industries, and many more. The company has offices at strategic locations to maintain 
                and coordinate its activities in an effective manner.
              </p>
              <p>
                We offer various chemicals in packaged form of Tanker, Drum, and Bags for prompt delivery at 
                competitive prices. We have our own warehouse in Shahjahanpur which is maintained with a customized 
                workflow for availability of stock. Material required in loose quantity can also be delivered.
              </p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop" 
                  alt="Chemical Manufacturing" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop" 
                  alt="Quality Control Lab" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop" 
                  alt="Industrial Warehouse" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop" 
                  alt="Chemical Storage" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=600&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <FontAwesomeIcon icon={faFlask} className="text-6xl text-green-600 mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              To be a global leader in chemical manufacturing and driving progress through cutting-edge 
              research and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Key Strengths</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=250&fit=crop" 
                  alt="Quality Assurance" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-green-600/20"></div>
              </div>
              <FontAwesomeIcon icon={faAward} className="text-5xl text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-700">
                Our ISO-certified facilities ensure consistent quality across our product range. 
                We maintain the highest standards in every process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop" 
                  alt="Customer Approach" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20"></div>
              </div>
              <FontAwesomeIcon icon={faHandshake} className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Approach</h3>
              <p className="text-gray-700">
                We prioritize client satisfaction, offering swift solutions and prompt support. 
                Your success is our success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" 
                  alt="Eco-Friendly Practices" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-green-600/20"></div>
              </div>
              <FontAwesomeIcon icon={faLeaf} className="text-5xl text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly Practices</h3>
              <p className="text-gray-700">
                Sustainability remains at our core. We minimize waste, reduce emissions, and promote 
                eco-friendly alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-green-100 text-lg">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
              <FontAwesomeIcon icon={faFlask} className="text-5xl mb-4" />
              <h3 className="text-5xl font-bold mb-2">43+</h3>
              <p className="text-xl text-green-100">Chemical Products</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
              <FontAwesomeIcon icon={faUsers} className="text-5xl mb-4" />
              <h3 className="text-5xl font-bold mb-2">20+</h3>
              <p className="text-xl text-green-100">Trusted Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
              <FontAwesomeIcon icon={faShieldAlt} className="text-5xl mb-4" />
              <h3 className="text-5xl font-bold mb-2">₹5 Cr</h3>
              <p className="text-xl text-green-100">Annual Turnover</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
              <FontAwesomeIcon icon={faTruck} className="text-5xl mb-4" />
              <h3 className="text-5xl font-bold mb-2">8+</h3>
              <p className="text-xl text-green-100">Service Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose KHUSHI CHEMICALS?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We stand out in the industry with our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faTruck} className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Prompt delivery across all service locations with our own logistics</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeadset} className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your queries and needs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCertificate} className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ISO Certified</h3>
              <p className="text-gray-600">Quality assured products meeting international standards</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Industry Experts</h3>
              <p className="text-gray-600">Decades of experience serving diverse industrial sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
    

      {/* CTA Section */}
     
    </div>
  );
};

export default Home;
