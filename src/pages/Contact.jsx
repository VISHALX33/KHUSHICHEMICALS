import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  // WhatsApp Contact Number
  const whatsappNumber = '919928949010';
  
  const handleWhatsAppClick = () => {
    const message = 'Hello! I would like to inquire about your chemical products. I am coming from the contact page of the website. ';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const locations = [
    { name: 'Neemrana', state: 'Rajasthan', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Neemrana+Rajasthan+India' },
    { name: 'Ghiloth', state: 'Rajasthan', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ghiloth+Rajasthan+India' },
    { name: 'Shahjahanpur', state: 'Rajasthan', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shahjahanpur+Alwar+Rajasthan+India' },
    { name: 'Keshwana', state: 'Rajasthan', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Keshwana+Rajasthan+India' },
    { name: 'Bawal', state: 'Haryana', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bawal+Haryana+India' },
    { name: 'Manesar', state: 'Haryana', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Manesar+Haryana+India' },
    { name: 'Gurugram', state: 'Haryana', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Gurugram+Haryana+India' },
    { name: 'Bhiwadi', state: 'Rajasthan', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bhiwadi+Rajasthan+India' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1200&h=600&fit=crop" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-green-100 drop-shadow-md">
            Get in Touch with KHUSHI CHEMICALS
          </p>
        </div>
      </section>
      

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions or need a quote? We're here to help! Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <FontAwesomeIcon icon={faLocationDot} className="text-3xl text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Head Office</h3>
                    <p className="text-gray-700">RIICO Industrial Area</p>
                    <p className="text-gray-700">Shahjahanpur, Neemrana</p>
                    <p className="text-gray-700">Rajasthan - 301706</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                  <FontAwesomeIcon icon={faPhone} className="text-3xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-700"><a href="tel:+919928949010" className="hover:text-green-600 transition">+91 99289 49010</a></p>
                    <p className="text-gray-700"><a href="tel:+918000793036" className="hover:text-green-600 transition">+91 80007 93036</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-green-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-700">khushichem2023@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                  <FontAwesomeIcon icon={faClock} className="text-3xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg h-full flex flex-col items-center justify-center text-center">
                <div className="bg-green-500 w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-white text-6xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Message Us on WhatsApp</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Get instant response to your queries! Chat with us directly on WhatsApp for quick assistance.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg flex items-center gap-3 text-xl"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                  Chat on WhatsApp
                </button>
                <p className="text-sm text-gray-600 mt-6">
                  Available: Monday - Saturday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-6xl text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service Locations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We have strategic offices and service coverage across multiple locations in Rajasthan and Haryana
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <a
                key={index}
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer group"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-green-600 mb-3 group-hover:text-blue-600 transition" />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.state}</p>
                <span className="text-xs text-green-600 group-hover:text-blue-600 font-medium">
                  View on Maps →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              <strong>Warehouse Facility:</strong> We maintain a state-of-the-art warehouse in Shahjahanpur 
              with customized workflow for efficient inventory management and prompt delivery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience reliable chemical supply solutions with KHUSHI CHEMICALS. Contact us today for competitive quotes and exceptional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919928949010"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call Now
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              WhatsApp Us
            </button>
            <a
              href="mailto:contact@khushichemical.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;