import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f1419] text-gray-400 mt-32">
      <div className="max-w-7xl mx-auto px-6">

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

        {/* Main Grid - Desktop */}
        <div className="hidden md:grid grid-cols-5 gap-10 border-b border-white/10 pb-10 pt-20">
          {/* Brand */}
          <div className="col-span-2">
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

            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/khushi-chemicals/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-[#004182]"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-white font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/clients" className="hover:text-white">Our Clients</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Help & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">Vision & Mission</a></li>
              <li><a href="/about" className="hover:text-white">Our Team</a></li>
              <li><a href="/about" className="hover:text-white">Infrastructure</a></li>
              <li><a href="/contact" className="hover:text-white">Locations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-green-400 mt-1" />
                <span>
                  Shahjahanpur, Neemrana <br />
                  Rajasthan - 301706
                </span>
              </li>

             <li className="flex flex-nowrap items-center gap-4 whitespace-nowrap">
  <FontAwesomeIcon
    icon={faPhone}
    className="text-green-400 flex-shrink-0"
  />

  <a
    href="tel:+918000793036"
    className="hover:text-white transition"
  >
    +91 8000793036
  </a>

  <a
    href="tel:+919928949010"
    className="hover:text-white transition"
  >
    +91 99289 49010
  </a>
</li>


              <li className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
                <a
                  href="mailto:khushichem2023@gmail.com"
                  className="hover:text-white break-all"
                >
                  khushichem2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer - Each item on its own line, left-aligned */}
        <div className="md:hidden flex flex-col gap-3 items-start py-6 border-b border-white/10 pt-20 text-white text-sm w-full">
          <div className="flex items-center gap-2 w-full">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Shahjahanpur, Neemrana, Rajasthan - 301706</span>
          </div>
          <div className="flex items-center gap-2 w-full">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+918000793036" className="hover:text-green-400">+91 8000793036</a>
            <span>|</span>
            <a href="tel:+919928949010" className="hover:text-green-400">+91 99289 49010</a>
          </div>
          <div className="flex items-center gap-2 w-full">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:khushichem2023@gmail.com" className="hover:text-green-400 break-all">khushichem2023@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 w-full">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/company/khushi-chemicals/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">LinkedIn</a>
          </div>
        </div>
        <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>

        {/* Partners */}
        <div className="flex flex-wrap items-center gap-6 text-sm py-6 border-b border-white/10">
          <span className="text-white">Our Top Clients:</span>
          {["YKK INDIA", "OJI INDIA", "FOSROC INDIA", "GLOBUS SPIRIT"].map((c) => (
            <span key={c} className="flex items-center gap-2 hover:text-white">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {c}
            </span>
          ))}
          <a href="/clients" className="ml-auto text-green-400 hover:text-green-300">
            See All →
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs py-6 gap-2 md:gap-4 w-full">
          <p className="w-full text-center md:text-left">
            © {new Date().getFullYear()} Khushi Chemicals. All Rights Reserved.
            <span className="mx-2 hidden md:inline">|</span>
            <br className="md:hidden" />
            <span className="text-green-400">
              Powered by{' '}
              <a
                href="https://www.neelxtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                NeelX Technologies
              </a>
            </span>
          </p>
          <div className="flex gap-4 w-full justify-center md:justify-end">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Compliances</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
