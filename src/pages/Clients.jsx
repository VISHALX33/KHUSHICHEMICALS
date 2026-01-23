import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHandshake, faAward , faImages} from '@fortawesome/free-solid-svg-icons';
import ykkLogo from '../assets/ykk.png';
import ojiLogo from '../assets/oji.png';
import daiichaiLogo from '../assets/daiichai.jpg';
import polylaceLogo from '../assets/polylace.jpg';
import fosrocLogo from '../assets/fosroc.jpg';
import styleinLogo from '../assets/stylein.jpg';
import tonyLogo from '../assets/tony.jpg';
import globusLogo from '../assets/globus.jpg';
import sunriseLogo from '../assets/sunrise.jpg';
import dhanukaLogo from '../assets/dhanuka.png';
import pragtiLogo from '../assets/pragti.jpg';
import vrnusLogo from '../assets/vrnus.png';
import caparoLogo from '../assets/caparo.jpg';
import denimLogo from '../assets/denim.png';
import shreenathLogo from '../assets/SHREENATH.png';
import ozoneLogo from '../assets/ozone.jpg';
import victora from '../assets/victora.jpg';
import ourbanner from "../assets/ourC.jpg"

const Clients = () => {
  const clients = [
    { name: 'YKK INDIA PVT. LTD', logo: ykkLogo },
    { name: 'OJI INDIA PVT. LTD', logo: ojiLogo },
    { name: 'DAIICHI N HORIZON AUTOCOMP PVT. LTD', logo: daiichaiLogo },
    { name: 'POLY LACE INDIA PVT. LTD.', logo: polylaceLogo },
    { name: 'VICTORA Auto PVT. LTD.', logo: victora },
    { name: 'FOSROC INDIA PVT. LTD', logo: fosrocLogo },
    { name: 'STYLEIN INDIA PVT LTD', logo: styleinLogo },
    { name: 'MD DYCHEM INDUSTRIES', logo: '' },
    { name: 'TONY INDUSTRIES PVT.LTD', logo: tonyLogo },
    { name: 'GLOBUS SPRIT LIMITED', logo: globusLogo },
    { name: 'SUNRISE MILK DAIRY', logo: sunriseLogo },
    { name: 'RAMCO INTERNATIONAL LIMITED', logo: '' },
    { name: 'DHANUKA LIMITED', logo: dhanukaLogo },
    { name: 'PRAGTI ELECTROCOMP PVT. LTD', logo: pragtiLogo },
    { name: 'VRNUS PACKAGING', logo: vrnusLogo },
    { name: 'CAPARO MARUTI LIMITED', logo: caparoLogo },
    { name: 'DENIM CARE INDUSTRIES', logo: denimLogo },
    { name: 'SHREENATH LIFE SCIENCE PVT. LTD', logo: shreenathLogo },
    { name: 'OZONE OVERSEAS PVT LTD', logo: ozoneLogo },
    { name: 'STYLEIN PVT LTD', logo: styleinLogo }
  ];

  return (
    <div>
      {/* Header */}
       <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 overflow-hidden">
              <div className="absolute inset-0 opacity-50">
                <img 
                 src={ourbanner} 
                  alt="Gallery Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FontAwesomeIcon icon={faHandshake} className="text-6xl mb-4" />
                <h1 className="text-5xl font-bold mb-4">Our Valued Clients</h1>
                <p className="text-xl text-green-100">
                  EBuilding Long-Term Partnerships Based on Trust and Quality
                </p>
              </div>
            </section>
      

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Trusted by Industry Leaders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are proud to serve a diverse portfolio of clients across multiple industries. Our commitment 
              to quality, reliability, and customer satisfaction has helped us build strong, lasting relationships 
              with leading companies throughout India.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faBuilding} className="text-5xl text-green-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-lg text-gray-700">Prestigious Clients</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faAward} className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-lg text-gray-700">Customer Satisfaction</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faHandshake} className="text-5xl text-green-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Years</h3>
              <p className="text-lg text-gray-700">of Trust & Partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Client Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>

          {/* All Clients - Compact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center justify-center text-center"
              >
                {/* Logo Container */}
                <div className="w-full h-24 mb-3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-blue-50 transition-all duration-300">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain p-3"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faBuilding} className="text-3xl text-gray-300 group-hover:text-green-600 transition-colors duration-300" />
                  )}
                </div>
                
                {/* Client Name */}
                <h3 className="text-xs font-semibold text-gray-700 leading-tight mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              <span className="font-bold text-green-600">{clients.length}+</span> Prestigious clients trust us for their chemical needs
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Industries We Serve</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Automotive',
              'Packaging',
              'Paper Industries',
              'Textiles',
              'Pharmaceuticals',
              'Dairy',
              'Spirits & Beverages',
              'Electronics',
              'Life Sciences',
              'Plating',
              'Chemical Manufacturing',
              'Industrial Supply'
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg text-center shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FontAwesomeIcon icon={faAward} className="text-6xl text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our valued clients have to say about their experience with KHUSHI CHEMICALS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  MS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mr. Mukesh Saini</h3>
                  <p className="text-sm text-gray-600">Victoria Auto Pvt Ltd</p>
                </div>
              </div>
              <div className="text-4xl text-green-600 mb-3"></div>
              <p className="text-gray-700 italic">
                KHUSHI CHEMICALS has been our trusted supplier for over 3 years. Their consistent quality and timely delivery have helped us maintain our production schedules without any delays. Highly recommended!
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  RS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mr. Rahul Sharma</h3>
                  <p className="text-sm text-gray-600">Stylein</p>
                </div>
              </div>
              <div className="text-4xl text-blue-600 mb-3"></div>
              <p className="text-gray-700 italic">
                Exceptional service and competitive pricing! The team at KHUSHI CHEMICALS understands our requirements perfectly and always goes the extra mile to ensure we get the best products for our textile operations.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  TG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mr. Tarun Gupta</h3>
                  <p className="text-sm text-gray-600">Diwakar Enterprises</p>
                </div>
              </div>
              <div className="text-4xl text-green-600 mb-3"></div>
              <p className="text-gray-700 italic">
                We appreciate the professionalism and expertise of KHUSHI CHEMICALS. Their technical support team is always available to answer our queries, and the product quality is consistently excellent.
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  AY
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mr. Ajay Yadav</h3>
                  <p className="text-sm text-gray-600">Shreenath Life Sciences</p>
                </div>
              </div>
              <div className="text-4xl text-blue-600 mb-3"></div>
              <p className="text-gray-700 italic">
                As a pharmaceutical company, we have stringent quality requirements. KHUSHI CHEMICALS has consistently met our expectations with certified products and proper documentation. A reliable partner indeed!
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  GM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mr. Gulshan Mangria</h3>
                  <p className="text-sm text-gray-600">Ozone Overseas</p>
                </div>
              </div>
              <div className="text-4xl text-green-600 mb-3"></div>
              <p className="text-gray-700 italic">
                Outstanding service from order to delivery! KHUSHI CHEMICALS offers competitive prices without compromising on quality. Their flexible packaging options and quick turnaround time make them our preferred supplier.
              </p>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center justify-center text-center">
              <FontAwesomeIcon icon={faHandshake} className="text-6xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Happy Clients</h3>
              <p className="text-gray-700 mb-6">
                Experience the same level of service and quality that our clients rave about
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition shadow-lg"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Clients Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">Quality Products</h3>
                <p className="text-green-100">
                  ISO-certified chemicals meeting the highest industry standards
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Timely Delivery</h3>
                <p className="text-green-100">
                  Prompt and reliable delivery across multiple locations
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Competitive Pricing</h3>
                <p className="text-green-100">
                  Best market prices with flexible payment terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Growing Family of Clients</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the KHUSHI CHEMICALS difference. Let us be your trusted partner for all chemical requirements.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition shadow-lg inline-block"
          >
            Become a Client
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clients;
