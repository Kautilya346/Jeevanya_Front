import React from "react";
import logo from "../assests/logo.png";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 w-full text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img
              src={logo}
              alt="Jeevanya Logo"
              className="h-16 mx-auto md:mx-0 mb-4"
            />
            <h2 className="text-xl font-bold text-blue-400">Jeevanya</h2>
            <p className="text-gray-400 mt-2">
              Transforming ideas into reality
            </p>
          </div>

          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 text-center md:text-left md:max-w-xs">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-3">
              Subscribe to our newsletter for the latest updates
            </p>
            <form className="mt-2">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Jeevanya. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
