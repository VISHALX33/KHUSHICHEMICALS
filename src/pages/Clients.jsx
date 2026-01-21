import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHandshake, faAward } from '@fortawesome/free-solid-svg-icons';

const Clients = () => {
  const clients = [
    { name: 'YKK INDIA PVT. LTD', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { name: 'OJI INDIA PVT. LTD', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { name: 'DAIICHI N HORIZON AUTOCOMP PVT. LTD', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop' },
    { name: 'POLY LACE INDIA PVT. LTD.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    { name: 'VICTORA Auto PVT. LTD.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { name: 'FOSROC INDIA PVT. LTD', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { name: 'STYLEIN INDIA PVT LTD', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop' },
    { name: 'MD DYCHEM INDUSTRIES', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    { name: 'TONY INDUSTRIES PVT.LTD', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { name: 'GLOBUS SPRIT LIMITED..', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { name: 'SUNRISE MILK DAIRY.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop' },
    { name: 'RAMCO INTERNATIONAL LIMITED.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    { name: 'DHANUKA LIMITED..', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { name: 'PRAGTI ELCTROCOMPVT.LTD .', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { name: 'VRNUS PACKEGING.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop' },
    { name: 'CAPARO MARUTI. LIMITED', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    { name: 'DENIM CARE INDUSTRIES', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' },
    { name: 'SHREENATH LIFE SCIENCE PVT. LTD', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { name: 'OZONE OVERSEAS PVT LTD', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop' },
    { name: 'STYLEIN PVT LTD', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon icon={faHandshake} className="text-6xl mb-4" />
          <h1 className="text-5xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-xl text-green-100">
            Building Long-Term Partnerships Based on Trust and Quality
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300/059669/ffffff?text=Client+Company';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 leading-tight">{client.name}</h3>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Trusted Partner
                  </div>
                </div>
              </div>
            ))}
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
