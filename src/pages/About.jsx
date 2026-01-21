import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faLeaf, faAward, faHandshake, faWarehouse, faTruck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1600&h=600&fit=crop" 
            alt="Chemical Industry Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">About KHUSHI CHEMICALS</h1>
          <p className="text-xl text-green-100">Building Trust Through Quality and Innovation</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                KHUSHI Chemicals has been a trusted name in the chemical industry. We continue our commitment 
                to innovative and sustainable solutions. We have been serving and delivering quality to our clients, 
                and today we stand as an entity with an annual turnover of ₹5.00 Crore INR.
              </p>
              <p>
                We have been rendering the best of our services by supplying basic raw materials. We are primarily 
                stationed at Neemrana, Ghiloth, Shahjahanpur, Keshwana, Bawal, Manesar, Gurugram, and Bhiwadi for 
                materials to various industries.
              </p>
              <p>
                We specialize in catering to Paper industries, Detergent, Dairies, Textiles, Sugar Pharmaceutical 
                units, Plating industries, and many more. The company has offices at strategic locations to maintain 
                and coordinate its activities in an effective manner.
              </p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop" 
                  alt="Chemical Laboratory" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop" 
                  alt="Industrial Facility" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop" 
                  alt="Chemical Storage" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop" 
                  alt="Quality Control" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
                  alt="Vision Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={faEye} className="text-6xl text-green-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700">
                  To be a global leader in chemical manufacturing and driving progress through cutting-edge 
                  research and environmental responsibility. We envision a future where sustainable chemical 
                  solutions power industries worldwide.
                </p>
              </div>
            </div>

            <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
                  alt="Mission Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={faBullseye} className="text-6xl text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  To deliver high-quality chemical products and services that exceed customer expectations while 
                  maintaining the highest standards of safety, sustainability, and innovation. We are committed 
                  to being a reliable partner for all your chemical needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Key Strengths</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop" 
                  alt="Quality Assurance" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-green-600/20"></div>
              </div>
              <div className="p-6 text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 shadow-lg">
                  <FontAwesomeIcon icon={faAward} className="text-3xl text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-700">
                Our ISO-certified facilities ensure consistent quality across our product range. Every product 
                undergoes rigorous testing to meet international standards.
              </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop" 
                  alt="Customer Service" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20"></div>
              </div>
              <div className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 shadow-lg">
                  <FontAwesomeIcon icon={faHandshake} className="text-3xl text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Approach</h3>
              <p className="text-gray-700">
                We prioritize client satisfaction, offering customized solutions and prompt support. Our dedicated 
                team ensures your needs are met efficiently.
              </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" 
                  alt="Eco-Friendly" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-green-600/20"></div>
              </div>
              <div className="p-6 text-center">
                <div className="bg-gradient-to-br from-green-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 shadow-lg">
                  <FontAwesomeIcon icon={faLeaf} className="text-3xl text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly Practices</h3>
              <p className="text-gray-700">
                Sustainability remains at our core. We minimize waste, reduce emissions, and promote eco-friendly 
                alternatives in all our operations.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Infrastructure</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" 
                  alt="Warehouse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={faWarehouse} className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Warehouses</h3>
              <p className="text-gray-700">
                We have our own warehouse in Shahjahanpur maintained with customized workflow for availability 
                of stock and efficient inventory management.
              </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&h=300&fit=crop" 
                  alt="Delivery Truck" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={faTruck} className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Delivery</h3>
              <p className="text-gray-700">
                We offer various chemicals in packaged form of Tanker, Drum, and Bags for prompt delivery at 
                competitive prices. Loose quantities also available.
              </p>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop" 
                  alt="Strategic Locations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Locations</h3>
              <p className="text-gray-700">
                Offices at strategic locations across Neemrana, Ghiloth, Shahjahanpur, Keshwana, Bawal, 
                Manesar, Gurugram, and Bhiwadi for effective coordination.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Industries We Serve</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Paper Industries', 'Detergent', 'Dairies', 'Textiles', 'Sugar', 'Pharmaceutical', 'Plating Industries', 'Manufacturing'].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg text-center shadow hover:shadow-lg transition">
                <p className="font-semibold text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
