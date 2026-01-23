import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import logo from '../assets/kclogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const location = useLocation();

  const whatsappNumber = '919928949010';

  const products = [
    'Nitric Acid',
    'Caustic Soda Flakes',
    'Caustic Soda Lye',
    'Formic Acid',
    'Acetic Acid Glacial',
    'Phosphoric Acid',
    'Ammonia Liqure',
    'Polly Aluminium Chloride',
    'Ferric Chloride',
    'Common Salt',
    'Global Salt',
    'Hydrated Lime',
    'Sodium Meta Bi Sulphate',
    'Sodium Hypo Chloride',
    'Bleaching Powder',
    'Tri Sodium Phosphate',
    'Soda Ash Dense/Light',
    'Hydrochloric Acid',
    'Glucose',
    'Polly Electrollite',
    'Ferrious Sulphate',
    'Caustic Soda Prills',
    'Caustic Potash Flakes',
    'Methyle Chloride',
    'Methylene Chloride',
    'Carbon Tetrachloride',
    'Hydrogen Per Oxide',
    'Calcium Chloride Flakes',
    'Calcium Chloride Powder',
    'Dilute Sulphuric Acid',
    'Aluminium Chloride',
    'Stable Bleaching Powder',
    'Maize/Paper Starch',
    'Acid Sulry',
    'Ammonia Bi Cab',
    'Sodium Nitrate & Nitri',
    'Malt Extract',
    'Chlorinated paraffin',
    'Sulphuric Acid',
    'Methanol'
  ];

  const clients = [
    'YKK INDIA PVT. LTD',
    'OJI INDIA PVT. LTD',
    'DAIICHI N HORIZON AUTOCOMP PVT. LTD',
    'POLY LACE INDIA PVT. LTD.',
    'VICTORA Auto PVT. LTD.',
    'FOSROC INDIA PVT. LTD',
    'STYLEIN INDIA PVT LTD',
    'MD DYCHEM INDUSTRIES',
    'TONY INDUSTRIES PVT.LTD',
    'GLOBUS SPRIT LIMITED',
    'SUNRISE MILK DAIRY',
    'RAMCO INTERNATIONAL LIMITED',
    'DHANUKA LIMITED',
    'PRAGTI ELECTROCOMP PVT. LTD',
    'VRNUS PACKAGING',
    'CAPARO MARUTI LIMITED',
    'DENIM CARE INDUSTRIES',
    'SHREENATH LIFE SCIENCE PVT. LTD',
    'OZONE OVERSEAS PVT LTD',
    'STYLEIN PVT LTD'
  ];

  const handleWhatsAppClick = () => {
    const message = 'Hello! I would like to inquire about your chemical products.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/clients', label: 'Clients' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="KHUSHI CHEMICALS Logo" className="h-12 w-auto" />
            <div className="flex items-center space-x-2">
              <div className="text-4xl font-bold text-green-600">KHUSHI</div>
              <div className="text-lg font-semibold text-blue-600">CHEMICALS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => {
                  if (link.label === 'Products') setShowProducts(true);
                  if (link.label === 'Clients') setShowClients(true);
                }}
                onMouseLeave={() => {
                  if (link.label === 'Products') setShowProducts(false);
                  if (link.label === 'Clients') setShowClients(false);
                }}
              >
                <Link
                  to={link.path}
                  className={`text-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {link.label}
                </Link>
                
                {/* Products Dropdown */}
                {link.label === 'Products' && showProducts && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Our Products</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-3 max-h-[400px] overflow-y-auto">
                      {products.map((product, index) => (
                        <Link
                          key={index}
                          to="/products"
                          className="flex items-center gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition group"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-150 transition-transform"></div>
                          <span className="text-sm text-gray-700 group-hover:text-green-600 font-medium transition-colors">
                            {product}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                      <Link
                        to="/products"
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Clients Dropdown */}
                {link.label === 'Clients' && showClients && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Our Valued Clients</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-3 max-h-[400px] overflow-y-auto">
                      {clients.map((client, index) => (
                        <Link
                          key={index}
                          to="/clients"
                          className="flex items-center gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition group"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                          <span className="text-sm text-gray-700 group-hover:text-blue-600 font-medium transition-colors">
                            {client}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                      <Link
                        to="/clients"
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        View All Clients →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              Let's Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-lg font-medium ${
                  isActive(link.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="w-full mt-3 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              Let's Connect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
