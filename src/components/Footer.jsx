import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-[#0f1419] text-gray-400 mt-32">
      
      {/* Subscribe Bar */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl">
        <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 px-6 py-4 text-gray-700 outline-none"
          />
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 font-semibold tracking-wide hover:from-green-700 hover:to-blue-700 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/10 pb-10">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-2">
              KHUSHI CHEMICALS
            </h3>
            <p className="text-green-400 text-sm mb-3">Trusted since 2017</p>
            <p className="text-sm leading-relaxed">
              A trusted name in chemical solutions, delivering quality,
              innovation, and sustainability for industries across India.
            </p>
            <a
              href="/about"
              className="inline-block mt-4 text-green-400 hover:underline"
            >
              read more →
            </a>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-white font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white transition cursor-pointer">Products</a></li>
              <li><a href="/clients" className="hover:text-white transition cursor-pointer">Our Clients</a></li>
              <li><a href="/about" className="hover:text-white transition cursor-pointer">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition cursor-pointer">Help & Support</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition cursor-pointer">Vision & Mission</a></li>
              <li><a href="/about" className="hover:text-white transition cursor-pointer">Our Team</a></li>
              <li><a href="/about" className="hover:text-white transition cursor-pointer">Infrastructure</a></li>
              <li><a href="/contact" className="hover:text-white transition cursor-pointer">Locations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="leading-tight">
                  Shahjahanpur, Neemrana<br />
                  Rajasthan - 301706
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-green-400 flex-shrink-0" />
                <a href="tel:+919928949010" className="hover:text-white transition">
                  +91 99289 49010
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-400 flex-shrink-0" />
                <a href="mailto:khushichem2023@gmail.com" className="hover:text-white transition break-all">
                  khushichem2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap items-center gap-6 text-sm py-6 border-b border-white/10">
          <span className="text-white">Our Top Clients:</span>
          {["YKK INDIA", "OJI INDIA", "FOSROC INDIA", "GLOBUS SPIRIT"].map(
            (c) => (
              <span
                key={c}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {c}
              </span>
            )
          )}
          <a href="/clients" className="ml-auto text-green-400 cursor-pointer hover:text-green-300">
            See All →
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs pt-6 gap-4">
          <p>
            © {new Date().getFullYear()} KHUSHI CHEMICALS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">
              Compliances
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
